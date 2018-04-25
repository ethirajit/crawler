# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractor import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider
from tour.items import TourItem
import tldextract
import json


class tourSpider(CrawlSpider):
    # The name of the spider
    name = "tour"
    #allow_pattern = ('\/trip\/', '\/travel_packages\/', '\/holidays\/', '\/packages\/', '\/deals\/', '\/india-tour-packages\/', '\/international-tour-packages\/',
    #                '\/holidaydetails\/')

    def __init__(self, start_url=None, *args, **kwargs):
        super(tourSpider, self).__init__(*args, **kwargs)
        self.start_urls = [start_url]
        self.allowed_domains = tldextract.extract(start_url)
        self.allowed_domains = ['.'.join(self.allowed_domains[1:3])]

    # This spider has one rule: extract all (unique and canonicalized) links, follow them and parse them using the parse_items method 
    rules = [Rule(LinkExtractor(canonicalize=True, unique=True), follow=True, callback="parse_items")]
    
    #List of web sites dont'have details directly
    #'https://www.goibibo.com/'
    
    # Method which starts the requests by visiting all URLs specified in start_urls
    '''def start_requests(self):
        for url in self.start_urls:
            yield scrapy.Request(url, callback=self.parse, dont_filter=True)'''

    # Method for parsing items
    def parse_items(self, response):
        # The list of items that are found on the particular page
        items = []
        # Only extract canonicalized and unique links (with respect to the current page)
        if 'adventurenation.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/trip\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'travart.org' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/travel_packages\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'thomascook.in' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidays\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'traveltriangle.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/packages\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'hellotravel.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/deals\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'coxandkings.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidays\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'sotc.in' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidays\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'holidayz.makemytrip.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidays\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'trinityairtravel.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/india-tour-packages\/', r'\/international-tour-packages\/'), canonicalize=True, unique=True).extract_links(response)
        elif 'holidayz.makemytrip.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidays\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'akbarholidays.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidaydetails\/', ), canonicalize=True, unique=True).extract_links(response)
        else:
            links = []


        # Filter the duplicate URL against URL log file
        # Read URL log file
        #with open('testing.json', 'r') as url_log_file:
        #    url_log_list = url_log_file.read().splitlines()
        #    url_log_list = [json.loads(e_url)['url'] for e_url in url_log_list]

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
                    #if not link.url in url_log_list:
                    item = TourItem()
                    #item['url_from'] = response.url
                    item['url'] = link.url
                    items.append(item)
                    #else:
                        #print("Filtered Duplicate URL")
                        #print(link.url)
                        #pass
                else:
                    #print('Filtered offsite URL from redirecting URL')
                    #print(link.url)
                    pass

        #Remove dublicate in list of dict, It is a 2nd filter to reduce the Duplicat URL
        items = list({v['url']:v for v in items}.values())
        
        # Return all the found items
        #print(items)
        return items
