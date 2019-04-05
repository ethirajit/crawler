from selenium import webdriver
from selenium.webdriver.firefox.options import Options

options = Options()
options.set_headless(headless=True)
driver = webdriver.Firefox(firefox_options=options)
driver.get("http://yatra.com/")
driver.save_screenshot('screenie.png')
print ("Headless Firefox Initialized")
driver.quit()