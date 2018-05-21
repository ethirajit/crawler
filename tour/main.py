from scrapy import cmdline
import subprocess

with open("url_list.txt") as urls:
    for url in urls:
        print(url)
        url = url.rstrip('\n')
        url = "start_url="+str(url)
        #Scrap Unique URL
        '''url_process = subprocess.Popen(["scrapy", "crawl" , "scrap_unique_url", "-a", url], stdout=subprocess.PIPE)
        while True:
            if url_process.poll() == None:
		continue
            else:
                print("End of scrap unique URL "+url)
                break'''
        #Scrap Package URL
        url_process = subprocess.Popen(["scrapy", "crawl" , "scrap_package_url", "-a", url], stdout=subprocess.PIPE)
        while True:
            if url_process.poll() == None:
		continue
            else:
                print("End of scrao URL "+url)
                break
        #Scrap Data 
        '''data_process = subprocess.Popen(["scrapy", "crawl" , "scrap_data", "-a", url], stdout=subprocess.PIPE)
        while True:
            if data_process.poll() == None:
		continue
            else:
                print("End of scrap data "+url)
                break'''
    print("END")
