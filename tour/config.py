from flask import Flask
import os
import binascii

app = Flask(__name__)

#Secret Key generation
sessionKey = os.urandom(32)
sessionKey = binascii.hexlify(sessionKey)
app.secret_key = sessionKey


#
#Defined all global variable
#

proc = None
url  = ''
allowed_domain = ''
unique_url_status_json = ''
unique_product_url_status_json = ''
splash_url = 'http://68.183.86.57:8050/render.html?url='
user_CSV = 'user_data/user.csv'
print_log_flag = True