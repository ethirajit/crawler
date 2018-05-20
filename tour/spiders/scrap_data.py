# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider
from tour.items import dataItem
import tldextract
import json


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
        # Extract package name, duration, price, highlights, details (with respect to the current page)
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
                items.append(item)
        return items

    def akbarholidays(self, response):
        #package name
        package_name = response.css('span[class=top-text-name]::text').extract()[0]
        #package duration
        package_duration = response.css('span[class=top-text-duration]::text').extract()[0]
        #package price
        package_price = str(response.css('span[id=priceheader]::text').extract()[1]).lstrip()
        #package highlights
        all_ul = response.xpath('//*[@id="highlights2"]/div/ul')
        package_highlights = []
        for li in all_ul.xpath('.//li//text()'):
            package_highlights.append(li.extract())
        #package overview
        package_overview = response.xpath('//*[@id="overview2"]/div/p[2]//text()').extract()
        package_overview =' '.join(line for line in package_overview)
        #package itinerary
        all_ul = response.xpath('//*[@id="package-itinerary"]')
        package_itinerary = {}
        days = []
        details = []
        for li in all_ul.xpath('.//li'):
            days.append(' '.join(line for line in li.xpath('.//h1//text()').extract()))
            detail = []
            for i in li.xpath('.//div/div/p'):
                if i.xpath('.//text()').extract():
                    detail.append(' '.join(line for line in i.xpath('.//text()').extract()))
            detail ='\n'.join(line for line in detail)
            details.append(detail)
        package_itinerary['days'] = days
        package_itinerary['details'] = details
        #package include
        all_ul = response.xpath('//*[@id="included2"]/div/ul')
        package_include = []
        for li in all_ul.xpath('.//li//text()'):
            package_include.append(li.extract())
        #package exclude
        all_ul = response.xpath('//*[@id="included2"]/div[2]/ul')
        package_exclude = []
        for li in all_ul.xpath('.//li//text()'):
            package_exclude.append(li.extract())

        return package_name, package_duration, package_price, package_highlights, package_overview, package_itinerary, package_include, package_exclude

    def travart(self, response):
        #package name
        package_name = response.css('span[class=top-text-name]::text').extract()[0]
        #package duration
        package_duration = response.css('span[class=top-text-duration]::text').extract()[0]
