# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class urlItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    
    url = scrapy.Field()

class dataItem(scrapy.Item):
    # define the fields for your item here like:
    
    package_name = scrapy.Field()
    package_duration = scrapy.Field()
    package_price = scrapy.Field()
    package_highlights = scrapy.Field()
    package_overview = scrapy.Field()
    package_itinerary = scrapy.Field()
    package_include = scrapy.Field()
    package_exclude = scrapy.Field()

class ruleItem(scrapy.Item):
    # define the fields for your item here like:
    rule = scrapy.Field()
