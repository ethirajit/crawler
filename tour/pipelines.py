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
class productUrl(object):

    def __init__(self):
        self.urls_seen = set()

    def open_spider(self, spider):
        file_name = 'data/url/product_'+spider.allowed_domains[0]+'.json'
        self.file_for_product_url_status = 'data/url/product_' + spider.allowed_domains[0] + '_status.json'
        self.file = open(file_name, 'w')

    def close_spider(self, spider):
        self.file.close()
        
    def process_item(self, item, spider):
        if item['url'] in self.urls_seen:
            raise DropItem("Duplicate URL found: %s" % item)
        else:
            with open(self.file_for_product_url_status, 'w') as status_obj:  # To reduce performance for large website, UI purpose
                line = json.dumps(dict(item)) + "\n"
                status_obj.write(line)

            self.urls_seen.add(item['url'])
            line = json.dumps(dict(item)) + "\n"
            self.file.write(line)
            return item

#Filter to reduce the duplicate URL
class uniqueUrl(object):

    def __init__(self):
        self.urls_seen = set()

    def open_spider(self, spider):
        file_name = 'data/url/unique_'+spider.allowed_domains[0]+'.json'
        self.file_for_uniqueurl_status = 'data/url/unique_' + spider.allowed_domains[0] + '_status.json'
        self.file = open(file_name, 'w')

    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):
        if item['unique_url'] in self.urls_seen:
            raise DropItem("Duplicate URL found: %s" % item)
        else:
            with open(self.file_for_uniqueurl_status, 'w') as status_obj:  # To reduce performance for large website, UI purpose
                line = json.dumps(dict(item)) + "\n"
                status_obj.write(line)

            self.urls_seen.add(item['unique_url'])
            line = json.dumps(dict(item)) + "\n"
            self.file.write(line)
            return item

#Write data to data base
class scrapDatabase(object):

    def __init__(self):
        self.urls_seen = set()

    def open_spider(self, spider):
        file_name = 'data/data/'+spider.allowed_domains[0]+'.json'
        self.file_product_status = 'data/data/'+spider.allowed_domains[0] + '_status.json'
        self.file = open(file_name, 'w')

    def close_spider(self, spider):
        self.file.close()
        
    def process_item(self, item, spider):
        with open(self.file_product_status, 'w') as status_obj:  # To reduce performance for large website, UI purpose
            line = json.dumps(dict(item)) + "\n"
            status_obj.write(line)

        line = json.dumps(dict(item)) + "\n"
        self.file.write(line)
        return item
