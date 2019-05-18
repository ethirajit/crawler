import requests
import sys
import csv
import json
from bs4 import BeautifulSoup

page = requests.get("http://www.indiavotes.com/")

if page.status_code != 200:
    sys.exit()

soup = BeautifulSoup(page.content, 'html.parser')

pc_year = {}
select = soup.find(id='year')
for option in select.find_all('option'):
    if option['value'] != '0':
        pc_year[option.text] = option['value']

pc_state = {}
select = soup.find(id='state')
for option in select.find_all('option'):
    if option['value'] != '0':
        pc_state[option.text] = option['value']

#Make URL
item = {}
with open("pc_product_url.json", 'w') as pc_json:
    for key, year in pc_year.items():
        for key, state in pc_state.items():
            item['url'] = 'http://www.indiavotes.com/pc/info?eid='+str(year)+'&state='+str(state)
            line = json.dumps(dict(item)) + "\n"
            pc_json.write(line)

ac_year = {}
select = soup.find(id='yearac')
for option in select.find_all('option'):
    if option['value'] != '0':
        ac_year[option.text] = option['value']

ac_state = {}
select = soup.find(id='stateac')
for option in select.find_all('option'):
    if option['value'] != '0':
        ac_state[option.text] = option['value']

#Make URL
item = {}
with open("ac_product_url.json", 'w') as ac_json:
    for key, year in ac_year.items():
        for key, state in ac_state.items():
            item['url'] = 'http://www.indiavotes.com/ac/info?eid='+str(year)+'&stateac='+str(state)
            line = json.dumps(dict(item)) + "\n"
            ac_json.write(line)


'''for url in pc_url:
    page = requests.get(url)
    print (url)
    if page.status_code != 200:
        print ("This URL not working")
    print (page.content)
    soup = BeautifulSoup(page.content, 'html.parser')
    table = soup.find(id='DataTables_Table_0')
    print (table)
    table_body = table.find('tbody')
    rows = table_body.find_all('tr')
    with open('pc_table.csv', 'w') as writeFile:
        writer = csv.writer(writeFile)
        for row in rows:
            r = [td for td in row.findAll('td')]
            writer.writerows(r)'''
