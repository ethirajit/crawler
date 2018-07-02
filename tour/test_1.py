import json
import ast

file_name = 'data/url/xpath_adventurenation.com.json'
xpath_file = open(file_name, 'r')
xpaths = xpath_file.readlines()
start_urls = []
for xpath in xpaths:
	#xpath = xpath.rstrip()
	print ast.literal_eval(xpath)
	xpath = json.dumps(ast.literal_eval(xpath))
	xpath = json.loads(xpath)
	key = str(next(iter(xpath)))
	print key
	print type(key)
	item[key] = response.xpath(xpath[key]).extract()