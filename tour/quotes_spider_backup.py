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

    # The domains that are allowed (links to other domains are skipped)
    #allowed_domains = ["adventurenation.com", "yatra.com"]
    allowed_domains = ["adventurenation.com", "thomascook.in", "traveltriangle.com", "travelguru.com", "hellotravel.com",
                       'coxandkings.com', 'sotc.in', 'makemytrip.com', 'travart.org', 'akbarholidays.com', 'trinityairtravel.com',
                       'aeratrip.com', 'www.swantour.com', 'dallakeholidays.com', 'dewanholidays.com', 'takemetoindia.in',
                       'hiddenindiatours.com', 'happyjourney.co.in', 'southtourism.in', 'acetripindia.com', 'paradiseunexplored.com',
                       ]

    # The URLs to start with
    #start_urls = ["https://www.adventurenation.com", "https://www.yatra.com"]
    start_urls = ["http://www.adventurenation.com/", "https://www.thomascook.in/", "http://traveltriangle.com/",
                  "https://www.travelguru.com", "https://www.hellotravel.com/", 'http://www.coxandkings.com/',
                  'http://www.sotc.in/', 'https://www.makemytrip.com/', 'https://www.travart.org', 'https://www.trinityairtravel.com/'
                  'https://www.akbarholidays.com/', 'https://aeratrip.com/', 'http://www.swantour.com/', 'http://www.dallakeholidays.com',
                  'https://www.dewanholidays.com', 'https://www.takemetoindia.in/', 'http://www.hiddenindiatours.com/',
                  'http://happyjourney.co.in/', 'https://www.southtourism.in', 'https://acetripindia.com/', 'https://paradiseunexplored.com',
                  ]
    #List of web sites dont'have details directly
    #'https://www.goibibo.com/'
    # This spider has one rule: extract all (unique and canonicalized) links, follow them and parse them using the parse_items method
    rules = [
        Rule(
            LinkExtractor(
                canonicalize=True,
                unique=True
            ),
            follow=True,
            callback="parse_items"
        )
    ]

    # Method which starts the requests by visiting all URLs specified in start_urls
    '''def start_requests(self):
        for url in self.start_urls:
            yield scrapy.Request(url, callback=self.parse, dont_filter=True)'''

    # Method for parsing items
    def parse_items(self, response):
        # The list of items that are found on the particular page
        items = []
        # Only extract canonicalized and unique links (with respect to the current page)
        links = LinkExtractor(canonicalize=True, unique=True).extract_links(response)

        # Filter the duplicate URL against URL log file
        # Read URL log file
        with open('testing.json', 'r') as url_log_file:
            url_log_list = url_log_file.read().splitlines()
            url_log_list = [json.loads(e_url)['url'] for e_url in url_log_list]

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
                    if not link.url in url_log_list:
                        item = TourItem()
                        #item['url_from'] = response.url
                        item['url'] = link.url
                        items.append(item)
                    else:
                        #print("Filtered Duplicate URL")
                        #print(link.url)
                        pass
                else:
                    #print('Filtered offsite URL from redirecting URL')
                    #print(link.url)
                    pass

        #Remove dublicate in list of dict, It is a 2nd filter to reduce the Duplicat URL
        items = list({v['url']:v for v in items}.values())
        
        # Return all the found items
        return items