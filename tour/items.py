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
	def __setitem__(self, key, value):
		if key not in self.fields:
			self.fields[key] = scrapy.Field()
		self._values[key] = value

class ruleItem(scrapy.Item):
    # define the fields for your item here like:
    rule = scrapy.Field()
    rule_type = scrapy.Field()

class uniqueUrlItem(scrapy.Item):
    # define the fields for your item here like:
    unique_url = scrapy.Field()
