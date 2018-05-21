# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider
from tour.items import urlItem
import tldextract
import json


class tourSpider(CrawlSpider):
    # The name of the spider
    name = "scrap_package_url"
    custom_settings = {
        'ITEM_PIPELINES': {
            'tour.pipelines.duplicateUrl': 300,
        }
    }

    #allow_pattern = ('\/trip\/', '\/travel_packages\/', '\/holidays\/', '\/packages\/', '\/deals\/', '\/india-tour-packages\/', '\/international-tour-packages\/',
    #                '\/holidaydetails\/')

    def __init__(self, start_url=None, *args, **kwargs):
        super(tourSpider, self).__init__(*args, **kwargs)
        self.start_urls = [start_url]
        self.allowed_domains = tldextract.extract(start_url)
        self.allowed_domains = ['.'.join(self.allowed_domains[1:3])]
        
        #Generate custome RULE'S for each URL'S
        '''if 'adventurenation.com' in self.start_urls[0]:
            deny_rule = ('\/group\/', '\/guru\/', '\/activity\/', '\/destination\/', '\/info\/', '\/blog\/', '\/user\/', )
        elif 'travart.org' in self.start_urls[0]:
            deny_rule = ('\/privacy', '\/contact', '\/about', 'blog\.travart\.org', )
        elif 'thomascook.in' in self.start_urls[0]:
            deny_rule = ('\/foreign-exchange\/', '\/visa', '\/flights', '\/hotels', '\/product-offers', '\/partner-deals', '\/travel-insurance',
                         '\/holiday-egift-cards', '\/contact-us', '\/about-us', '\/feedback', '\/store-locator', '\/terms-of-use', '\/privacy-policy',
                         '\/disclaimer', '\/candidate', 'blog\.thomascook\.in', '\/press-release', 'sitemap', 'col\.thomascook\.in', '\/investor-relations',
                         '\/b2b\.thomascook\.in', '\/brochure', )
        elif 'traveltriangle.com' in self.start_urls[0]:
            deny_rule = ('\/online-leads-for-travel-agents', '\/blog', '\/offers', '\/testimonials', '\/aboutus', '\/team', '\/career', '\/tnc', '\/privacy',
                         '\/cancellation', '\/fqas', '\/contact_us', )
        elif 'hellotravel.com' in self.start_urls[0]:
            deny_rule = ('\/plantour\.php', '\/agents\.hellotravel\.com', '\/stories\/', )
        elif 'coxandkings.com' in self.start_urls[0]:
            deny_rule = ('\/travelandstay\.coxandkings\.com\/', '\/business\/', '\/mice\/', '\/travelservices\/', '\/dealsandcontests\/', '\/giftvoucher\/',
                         '\/blog\.coxandkings\.com\/', '\/corporate\/', '\/about-us\/', '\/live\/', '\/pressroom\/', '\/static\/', '\/brochurerequest\/',
                        '\/sitemap\.shtml', '\/gallery', '\/travel\-resources', '\/register', '\/about\-our-adventure\-holidays', '\/user-agreement',
                        '\/terms-and-conditions', '\/payment-security', '\/privacy-policy', '\/disclaimer', '\/investor-relations', '\/sitemap', '\/faqs',
                        '\/contact-us', '\/our-branches', '\/our-sales-offices', '\/super-saver-group-holidays\/', '\/pdf\/', 'blog\.', 'holidays\.', 
                        '\/ajax\/', '\/viewpage\/', 'visitbritain\.coxandkings\.com', '\/gateway-goddess\/', '\/promotion\/', 'profile\.coxandkings\.com', )
        elif 'sotc.in' in self.start_urls[0]:
            deny_rule = ('\/flights', '\/hotels', '\/offers', '\/about-us', '\/blog', '\perfectmoments\.sotc\.in', '\/incentive\-travel', '\/outlets', 
                         '\/sotc\-assure', '\/careers\-sotc', '\/contact-us', '\/reach-us', '\/disclaimer', '\/e-brochures', '\/enquiry', '\/feedback',
                         '\/franchisee\-enquiry', '\/press\-room', '\/privacy-policy', '\/sitemap\.html', '\/outlets', '\/terms-and-conditions', '\/destination-facts',
                         '\/testimonials', '\/travel\-tips', )
        elif 'trinityairtravel.com' in self.start_urls[0]:
            deny_rule = ('service.php', 'blog.php', 'about-us.php', '\/contactus', 'payment.php', 'agent.trinityairtravel.com', 'corporate.trinityairtravel.com',
                         'vision.php', 'corporate-travel.php', 'awards-won.php', 'testimonials.php', 'feedback.php', 'sitemap.php', 'careers.php', )    
        elif 'makemytrip.com' in self.start_urls[0]:
            deny_rule = ('\/flights', '\/hotels\/', '\/homestays.makemytrip.com\/', '\/bus-tickets\/', '\/cabs\/', '\/gift-cards\/', '\/international-flights\/',
                         '\/hotels-international\/', '\/daily-deals\/', '\/blog\/', '\/new_hlp\/', '\/MyAccount\/', 'payments.makemytrip.com', '\/legal\/',
                          'supportz.makemytrip.com', 'support.makemytrip.com', '\/support\/', 'us.makemytrip.com', '\/railways', '\/routeplanner', '\/about-us\/',
                          'investors.makemytrip.com', '\/reviews', 'reviews.makemytrip.com', '\/offsites\/', '\/travel-guide\/', 'explore.makemytrip.com', '\/coupons',
                          '\/mytripessentials', 'planner.makemytrip.com', '\/pwa-hlp\/', '\/franchisee', )
        elif 'akbarholidays.com' in self.start_urls[0]:
            deny_rule = ('\/travel_essentials', 'aboutus', 'faqs', 'privacy-policy', 'contact-us', 'public', 'terms-conditions', '\/mice',  )
        elif 'aeratrip.com' in self.start_urls[0]:
            deny_rule = ('\/flightform', '\/services', '\/about-us', '\/About-us', '\/blogs', '\/contact-us', '\/Travel', )
        elif 'swantour.com' in self.start_urls[0]:
            deny_rule = ('hotels', 'hotels\/', '\/transport\/', '\/sites\/', 'contact-us.php', 'swan-tours-awards.php', 'faqs.php', 'reservation-policy.php',
                         'payment-options.php', 'testimonials.php', 'about-us.php', 'lowest-rates-challenge.php', 'india-luxury-hotels.php',
                         'hotels-chain-in-india.php', '\/blogs', 'job-in-swan-tour.php', 'sitemap.xml', '\/holiday-offers',)
        elif 'dallakeholidays.com' in self.start_urls[0]:
            deny_rule = ('\/about-us\/', '\/blog\/', '\/tripadvisor-review\/', '\/contact\/', '\/tips\/', '\/car-rental\/', '\/site-map\/', )
        else:
            deny_rule = ()'''
       
        file_name = 'data/url/unique_'+self.allowed_domains[0]+'.json'
        rule_file = open(file_name, 'r')
        rules = rule_file.readlines()
        deny_rule = []
        for rule in rules:
            rule = json.loads(rule)
            if rule["rule_type"] == 'deny':
                deny_rule.append(rule["rule"]) 
        deny_rule = tuple(deny_rule)
        
        self.rules = [Rule(LinkExtractor(deny=deny_rule, canonicalize=True, unique=True), follow=True, callback="parse_items")]
        
        super(tourSpider, self)._compile_rules()

    # This spider has one rule: extract all (unique and canonicalized) links, follow them and parse them using the parse_items method
    #deny = /testimonials/ ---> for traveltriangle.com
    #deny = /super-saver-group-holidays/ & /pdf/ & blog. & holidays. ---> for coxandkings.com

    #rules = [Rule(LinkExtractor(canonicalize=True, unique=True), follow=True, callback="parse_items")]
    
    #List of web sites dont'have details directly
    #'https://www.goibibo.com/'
    
    # Method which starts the requests by visiting all URLs specified in start_urls
    '''def start_requests(self):
        for url in self.start_urls:
            yield scrapy.Request(url, callback=self.parse_items, dont_filter=True)'''

    # Method for parsing items
    def parse_items(self, response):
        # The list of items that are found on the particular page
        items = []
        # Only extract canonicalized and unique links (with respect to the current page)
        if 'adventurenation.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/trip\/', ), canonicalize=True, unique=True).extract_links(response)
        #elif 'yatra.com' in self.start_urls[0]:
        #    links = LinkExtractor(allow=(r'packages\.yatra\.com\/holidays\/[A-Za-z]*\/details\.htm\?packageId', ), canonicalize=True, unique=True).extract_links(response)
        #    links = LinkExtractor( canonicalize=True, unique=True).extract_links(response)
        elif 'travart.org' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/travel_packages\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'thomascook.in' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidays\/india-tour-packages\/', r'\/holidays\/international-tour-packages\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'traveltriangle.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/packages\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'hellotravel.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/deals\/\d{0,10}\.html', ), canonicalize=True, unique=True).extract_links(response)
        elif 'coxandkings.com' in self.start_urls[0]:
            # '\/\d\d\-\d{0,5}' ex 02-12345 in adventure.coxandkings.com url
            links = LinkExtractor(allow=( r'\/tourid\/', r'\/tourId\/', r'\/\d\d\-\d{0,5}'), deny=(r'\/ajax\/', r'\/pdf\/', r'\/viewpage\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'sotc.in' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\?pkgId\=', r'\?pkgid\=', ), canonicalize=True, unique=True).extract_links(response)
        elif 'trinityairtravel.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/india-tour-packages\/', r'\/international-tour-packages\/'), canonicalize=True, unique=True).extract_links(response)
        elif 'makemytrip.com' in self.start_urls[0]:
            #links = LinkExtractor(allow=(r'\/holidays\/international\/package\?id\=', r'\/holidays\/india\/package\?id\=',), canonicalize=True, unique=True).extract_links(response)
            links = LinkExtractor(allow=(r'\/holidays\/international\/search\?', r'\/holidays\/india\/search\?',), canonicalize=True, unique=True).extract_links(response)
        elif 'akbarholidays.com' in self.start_urls[0]:
            links = LinkExtractor(allow=(r'\/holidaydetails\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'aeratrip.com' in self.start_urls[0]:
            links = LinkExtractor(allow = ('\/package\/', ), deny = ('\/index\/', ), canonicalize=True, unique=True).extract_links(response)
        elif 'swantour.com' in self.start_urls[0]:
            links = LinkExtractor(allow = ('luxury-tours-in-india\/[A-Za-z\d]', 'tours\/[A-Za-z\d]', 'packages\/[A-Za-z\d]', 'kailash-mansarovar\/[A-Za-z\d]',
                                   'north-east-india\/[A-Za-z\d]', 'tours-from-delhi\/[A-Za-z\d]', 'international-packages\/[A-Za-z\d]', 'balkans\/[A-Za-z\d]', ),
                                  canonicalize=True, unique=True).extract_links(response)
        elif 'dallakeholidays.com' in self.start_urls[0]:
            links = LinkExtractor(allow = ('\/package\/[A-Za-z\d]', ), canonicalize=True, unique=True).extract_links(response)
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
                    item = urlItem()
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
        return items
