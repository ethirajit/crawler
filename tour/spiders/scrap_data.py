# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider
from tour.items import dataItem
import tldextract
import json
import ast


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
    def __init__(self, start_url=None, *args, **kwargs):
        super(tourSpider, self).__init__(*args, **kwargs)

        self.allowed_domains = tldextract.extract(start_url)
        self.allowed_domains = ['.'.join(self.allowed_domains[1:3])]
        file_name = 'data/url/'+self.allowed_domains[0]+'.json'
        url_file = open(file_name, 'r')
        urls = url_file.readlines()
        start_urls = []
        for url in urls:
            url = json.loads(url)
            start_urls.append(url["url"])

        self.start_urls = list(set(start_urls))

    # Method which starts the requests by visiting all URLs specified in start_urls
    def start_requests(self):
        #print self.start_urls
        for url in self.start_urls:
            yield scrapy.Request(url, callback=self.parse_items, dont_filter=True)

    # Method for parsing items
    def parse_items(self, response):
        # The list of items that are found on the particular page
        items = []
        # Object for dataItem class in item.py
        item = dataItem()
        #Get Xpath
        file_name = 'data/url/xpath_'+self.allowed_domains[0]+'.json'
        xpath_file = open(file_name, 'r')
        xpaths = xpath_file.readlines()
        start_urls = []
        for xpath in xpaths:
			xpath = xpath.rstrip()
			xpath = json.dumps(ast.literal_eval(xpath))
			xpath = json.loads(xpath)
			key = str(next(iter(xpath)))
			item[key] = response.xpath(xpath[key]).extract()

        if item:
            items.append(item)

        '''# Extract package name, duration, price, highlights, details (with respect to the current page)
        try:
            if 'akbarholidays.com' in self.allowed_domains[0]:
                result = self.akbarholidays(response)
            elif 'travart.org' in self.allowed_domains[0]:
                result = self.travart(response)
        except IndexError:
            pass
        else:
            item['package_name'] = result[0]
            item['package_duration'] = result[1]
            item['package_price'] = result[2]
            item['package_highlights'] = result[3]
            item['package_overview'] = result[4]
            item['package_itinerary'] = result[5]
            item['package_include'] = result[6]
            item['package_exclude'] = result[7]
        finally:
            if item:
                items.append(item)'''
        return items
