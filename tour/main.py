from scrapy import cmdline
import subprocess

with open("url_list.txt") as urls:
    for url in urls:
        print(url)
        url = url.rstrip('\n')
        url = "start_url="+str(url)
        process = subprocess.Popen(["scrapy", "crawl" , "tour", "-a", url], stdout=subprocess.PIPE)
        while True:
            if process.poll() == None:
		continue
            else:
                print("End of "+url)
                break
            
    print("END")
