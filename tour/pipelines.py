# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


'''class TourPipeline(object):
    def process_item(self, item, spider):
        return item'''
        
from scrapy.exceptions import DropItem
import json

#Filter to reduce the duplicate URL
class DuplicatesPipeline(object):

    def __init__(self):
        self.urls_seen = set()

    def open_spider(self, spider):
        file_name = 'data/url/'+spider.allowed_domains[0]+'.json'
        self.file = open(file_name, 'w')

    def close_spider(self, spider):
        self.file.close()
        
    def process_item(self, item, spider):
        if item['url'] in self.urls_seen:
            raise DropItem("Duplicate item found: %s" % item)
        else:
            self.urls_seen.add(item['url'])
            line = json.dumps(dict(item)) + "\n"
            self.file.write(line)
            return item