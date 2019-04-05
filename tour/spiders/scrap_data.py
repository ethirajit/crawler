# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider
from tour.items import dataItem
import tldextract
import json
import ast
import re
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import NoSuchElementException

class tourSpider(CrawlSpider):
    # The name of the spider
    name = "scrap_data"
    custom_settings = {
        'ITEM_PIPELINES': {
            'tour.pipelines.scrapDatabase': 500,
        }
    }
    #ITEM_PIPELINES = {
    #'tour.pipelines.DuplicatesPipeline': 300,
    #}
    def __init__(self, start_url=None, allowed_domain=None, *args, **kwargs):
        super(tourSpider, self).__init__(*args, **kwargs)

        print (start_url)
        self.allowed_domains = [allowed_domain]
        #self.allowed_domains = tldextract.extract(start_url)
        #self.allowed_domains = ['.'.join(self.allowed_domains[1:3])]
        file_name = 'data/url/product_'+self.allowed_domains[0]+'.json'
        url_file = open(file_name, 'r')
        urls = url_file.readlines()
        start_urls = []
        for url in urls:
            url = json.loads(url)
            start_urls.append(url["url"])

        self.start_urls = list(set(start_urls))

        #Selenium Web driver Initializations
        options = Options()
        #options.set_headless(headless=True) #py2
        options.headless = True #py3
        #self.driver = webdriver.Firefox(firefox_options=options)
        self.driver = webdriver.Firefox()

    # Method which starts the requests by visiting all URLs specified in start_urls
    def start_requests(self):
        #print self.start_urls
        #Get Xpath
        file_name = 'data/url/xpath_'+self.allowed_domains[0]+'.json'
        xpath_file = open(file_name, 'r')
        self.xpaths = xpath_file.readlines()
        for url in self.start_urls:
            yield scrapy.Request(url, callback=self.parse_items, dont_filter=True)

    # Method for parsing items
    def parse_items(self, response):
        # The list of items that are found on the particular page
        items = []
        # Object for dataItem class in item.py
        item = dataItem()
        item['url'] = response.url
        for xpath in self.xpaths:
            xpath = xpath.rstrip()
            #xpath = json.dumps(ast.literal_eval(xpath)) #py2
            #xpath = json.loads(xpath) #py2
            xpath = ast.literal_eval(xpath) #py3
            key = str(next(iter(xpath)))
            xpath = xpath[key]
            try:
                if re.match("/html", xpath):
                    self.driver.get(response.url)
                    item[key] = self.driver.find_element_by_xpath(xpath).text
                else:
                    item[key] = response.xpath(xpath).extract()
            except NoSuchElementException:
                print ("URL ", response.url)
                return items

        if item:
            items.append(item)

        return items

    def closed(self, spider):
        self.driver.quit()
