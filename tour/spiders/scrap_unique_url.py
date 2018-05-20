# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider
from tour.items import ruleItem
import tldextract
import json
import re

class tourSpider(CrawlSpider):
    # The name of the spider
    name = "scrap_unique_url"
    custom_settings = {
        'ITEM_PIPELINES': {
            'tour.pipelines.uniqueUrl': 300,
        }
    }

    def __init__(self, start_url=None, *args, **kwargs):
        super(tourSpider, self).__init__(*args, **kwargs)
        self.start_urls = [start_url]
        self.allowed_domains = tldextract.extract(start_url)
        self.allowed_domains = ['.'.join(self.allowed_domains[1:3])]
        
        #Generate custome RULE'S dynamically
        self.main_deny_rule = []
        self.rules = [Rule(LinkExtractor(deny=tuple(self.main_deny_rule), canonicalize=True, unique=True), follow=True, callback="parse_items")]    
        super(tourSpider, self)._compile_rules()

    # Method for parsing items
    def parse_items(self, response):
        # The list of items that are found on the particular page
        items = [] 
        self.parse_deny_rule = [] 
        links = LinkExtractor(deny=tuple(self.parse_deny_rule), canonicalize=True, unique=True).extract_links(response)

        pattern = re.compile('\.([^)]+)[\/\?\#]')
        # Now go through all the found links
        for link in links:
            # Check whether the domain of the URL of the link is allowed; so whether it is in one of the allowed domains
            is_allowed = False
            for allowed_domain in self.allowed_domains:
                if allowed_domain in link.url:
                    is_allowed = True

            # If it is allowed, create a new item and add it to the list of found items
            if is_allowed:
                # To allow URL only started with allowed domain and it's sub domain
                list_domain = tldextract.extract(link.url)
                domain_name = list_domain.domain + '.' + list_domain.suffix
                # Filtered offsite URL from redirecting URL
                if domain_name in self.allowed_domains:
                    item = ruleItem()
                    if len(link.url.split('/')) > 4:
                        item['rule'] = str(pattern.findall(link.url)[0])
                        if not item['rule'] in self.allowed_domains: 
                            item['rule'] = '/'+item['rule'].split('/')[1]
                            items.append(item)
                    else:
                        if link.url.split('/')[-1] != '':
                            if not '.' in link.url.split('/')[-1]:
                                item['rule'] = '/'+link.url.split('/')[-1]
                                if '?' in item['rule']:
                                    item['rule'] = item['rule'].split('?')[0] #Remove the char after '?'
                                items.append(item)
                else:
                    pass
                

        #Remove dublicate in list of dict, It is a 2nd filter to reduce the Duplicat URL
        items = list({v['rule']:v for v in items}.values())
       
        #Generate custome RULE'S dynamically
        change_in_rule = False
        for item in items:
            if not item['rule'] in self.allowed_domains: 
                self.main_deny_rule.append(item['rule'])
                change_in_rule = True
        
        if change_in_rule:
            self.rules = [Rule(LinkExtractor(deny=tuple(self.main_deny_rule), canonicalize=True, unique=True), follow=True, callback="parse_items")]    
            super(tourSpider, self)._compile_rules()
        
        # Return all the found items
        return items
