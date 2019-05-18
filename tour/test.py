import requests
from flask import render_template, jsonify, request, redirect
from flask_login import login_user, logout_user, current_user
from scrapy import cmdline
import subprocess
import json
import os.path
import tldextract
import sys

from config import *
from utility import *
from login import *
 
def scraping(url, allowed_domain, crawler):
    #url = "start_url=http://www."+str(url)
    url            = "start_url="+str(url)
    allowed_domain = "allowed_domain="+str(allowed_domain)
    #Start Crawler
    proc = subprocess.Popen(["scrapy", "crawl" , crawler, "-a", url, "-a", allowed_domain], stdout=subprocess.PIPE)
    return proc

def recursive_nodes(level_element, json_data, row):
    for data in level_element.split('/')[1:-1]: #Skipping first and last element
        for node_data in json_data:
            if data == node_data['text']:
                if 'children' in node_data:
                    json_data = node_data['children']
                else:
                    node_data['children'] = []
                    json_data = node_data['children']
                break
    else:
        json_data.append(row)

@app.route('/')
def index():
    print (current_user.is_authenticated)
    if current_user.is_authenticated:
        return render_template('index.html', form='form1', url='')
    else:
        return render_template('login.html', error="" , form='form1', url='')

@app.route('/', methods=['POST'])
def login():
    if request.method == 'POST':
        if request.form['authType'] == "login":
            username=request.form['accountName']
            password=request.form['accountPassword']
            table = query(user_CSV)
            rows = table[(table['user_name'] == username) & (table['password'] == password)]
            if len(rows.index):
                session_key = os.urandom(32)
                session_key = binascii.hexlify(session_key)
                user = user_authenticated(session_key, username, None)
                login_user(user, remember=False)
                if not os.path.exists('user_data/'+current_user.username):
                    os.makedirs('user_data/'+current_user.username)
                print_log_with_timestamp("*****************************************************", current_user.username)
                print_log_with_timestamp("*  Logged In to datapetta.com  *", current_user.username)
                print (current_user.is_authenticated)
                print (current_user.username)
                print_log_with_timestamp("*****************************************************", current_user.username)
                return render_template('index.html', form='form1', url='')
            else:
                error="Login Failed"
                return render_template('login.html', error=error, form='form1', url='') 
        elif request.form['authType'] == "logout":
            user_table = query(user_CSV)
            #user_table = user_table[(user_table['user_name'] == current_user.username)]
            row_index = user_table.loc[user_table['user_name']== current_user.username].index[0]
            user_table.loc[row_index, 'login_status'] = 'False'
            #user_table.loc[0, 'login_status'] = 'False'
            user_table.to_csv(user_CSV, index=False)
            print_log_with_timestamp("*****************************************************", current_user.username)
            print_log_with_timestamp("*  Logged out from datapetta.com  *", current_user.username)
            print_log_with_timestamp("*****************************************************", current_user.username)
            logout_user()
            return render_template('login.html', error="" , form='form1', url='')

    return render_template('login.html')
    
@app.route('/run', methods=['POST', ])
def form_submit():
    if request.method == 'POST':
        # Step1: Unique URL scraping
        if request.form.get('url_form') == 'url_form':
            global proc
            global url
            global allowed_domain
            global unique_url_status_json

            url             = request.form['url']
            #Get Allowed Domain
            extract_domains = tldextract.extract(url) #output wil be ExtractResult(subdomain='www.blog', domain='facebook', suffix='com')
            main_domain     = '.'.join(extract_domains[1:3])

            if extract_domains[0] == 'www' or extract_domains[0] == '': #Allowed domain will be like facebook.com or blog.facebook.com
                allowed_domain = main_domain
            else:
                sub_domain = extract_domains[0].split('.')
                if sub_domain[0] == 'www':
                    allowed_domain = '.'.join(sub_domain[1:]) + '.' + main_domain
                else:
                    allowed_domain = '.'.join(sub_domain) + '.' + main_domain

            if not 'http' in url:
                http = 'http'
            else:
                http = url.split(':')[0]
            try:
                website_exist_with_www = False
                website_exist_without_www = False
                website_check = http+'://www.'+allowed_domain
                print (website_check)
                req = requests.get(splash_url+website_check)
                if req.status_code == 200:
                    website_exist_with_www = True
                else:
                    try:
                        website_check = http + '://' + allowed_domain
                        print(website_check)
                        req = requests.get(splash_url+website_check)
                        if req.status_code == 200:
                            website_exist_without_www = True
                        else:
                            print("Website doesn't able to access")
                            print(req.status_code)
                            sys.exit(1)
                    except Exception as e:
                        print(e)
                        print("Website doesn't able to access")
                        sys.exit(1)
            except:
                try:
                    website_check = http + '://' + allowed_domain
                    print(website_check)
                    req = requests.get(splash_url+website_check)
                    if req.status_code == 200:
                        website_exist_without_www = True
                    else:
                        print("Website doesn't able to access")
                        print(req.status_code)
                        sys.exit(1)
                except Exception as e:
                    print(e)
                    print("Website doesn't able to access")
                    sys.exit(1)

            # Get URL
            if website_exist_with_www:
                if not 'http' in url:
                    if not 'www' in url:
                        url = 'http://www.'+str(url)
                    else:
                        url = 'http://' + str(url)
                elif not 'www' in url:
                    url = str(http)+'://www.'+allowed_domain
            elif website_exist_without_www:
                url = str(http) +'://'+allowed_domain

            print ("URL :"+url)
            unique_url_status_json = 'data/url/unique_' + allowed_domain + '_status.json'
            if os.path.exists(unique_url_status_json):
                os.remove(unique_url_status_json)

            proc = scraping(url, allowed_domain, "scrap_unique_url")
            return render_template('index.html', form='form2', url=url)

        # Step2: Scraping Product URL
        elif request.form.get("scrap_product_url") == 'scrap_product_url':
            global unique_product_url_status_json
            unique_product_url_status_json = 'data/url/product_'+ allowed_domain + '_status.json'
            if os.path.exists(unique_product_url_status_json):
                os.remove(unique_product_url_status_json)

            proc = scraping(url, allowed_domain, "scrap_package_url")
            return render_template('index.html', form='form3', url=url)

        # Step3: Saving XPATH and Start Product Scraping
        elif request.form.get("save_xpath") == 'save_xpath':
            global unique_product_data_status_json
            unique_product_data_status_json = 'data/data/'+allowed_domain +'_status.json'
            if os.path.exists(unique_product_data_status_json):
                os.remove(unique_product_data_status_json)
            file_name = 'data/url/xpath_'+allowed_domain+'.json'
            file_obj = open(file_name, 'w')
            keys = list(request.form.keys()) #List of ['xpath2', 'name2', 'name3', 'name1', 'xpath1', 'save_xpath', 'xpath3']
            print (keys)
            keys.remove('save_xpath')
            for k in range(1, (int(len(keys)/2))+1):
                #file_obj.write(str({request.form.get('name'+str(k)).encode('utf8'): request.form.get('xpath'+str(k)).encode('utf8')})+'\n')
                file_obj.write(str({request.form.get('name'+str(k)): request.form.get('xpath'+str(k))})+'\n')
            proc = scraping(url, allowed_domain, "scrap_data")
            return render_template('index.html', form='form4', url=url)

@app.route('/status')
def status():
    if proc == None:
        return jsonify({'json_data': [], "status": ''})

    if proc.poll() == None: #Crawler Process alive
        if request.args.get('type') == 'deny_allow_url':
            if not os.path.exists(unique_url_status_json):
                return jsonify({'json_data':[], "status":'unique_url'})
            else:
                file = unique_url_status_json
        elif request.args.get('type') == 'product_url':
            if not os.path.exists(unique_product_url_status_json):
                return jsonify({'json_data':[], "status":'product_url'})
            else:
                file = unique_product_url_status_json
        elif request.args.get('type') == 'product_data':
            if not os.path.exists(unique_product_data_status_json):
                return jsonify({'json_data':[], "status":'product_data'})
            else:
                file = unique_product_data_status_json

        file_obj = open(file, 'r')
        lines = file_obj.readlines()
        json_data = []
        for line in lines:
            try:
                uniq_url = json.loads(line)
                if request.args.get('type') == 'deny_allow_url':
                    uniq_url = uniq_url['unique_url']
                elif request.args.get('type') == 'product_url':
                    uniq_url = uniq_url['url']
                elif request.args.get('type') == 'product_data':
                    uniq_url = uniq_url['url'] #Not only URL, can be display other data also if required.
                row = {"url": str(uniq_url)}
                json_data.append(row)
            except:
                continue
        if request.args.get('type') == 'deny_allow_url':
            return jsonify({'json_data':json_data, "status":'unique_url'})
        elif request.args.get('type') == 'product_url':
            return jsonify({'json_data':json_data, "status":'product_url'})
        elif request.args.get('type') == 'product_data':
            return jsonify({'json_data':json_data, "status":'product_data'})
    else:
        if request.args.get('type') == 'deny_allow_url':
            file = 'data/url/unique_simplified_'+allowed_domain+'.json'
            file_obj = open(file, 'r')
            json_data = file_obj.read()
            urls = json.loads(json_data)
            json_data = []

            #For JS Tree View, Generating JSON data
            global js_tree_id
            js_tree_id = 1
            for i in range(len(urls['level0'])):
                main_domain = urls['level0'][i]
                row = {"text": str(main_domain), "id": js_tree_id, "children":[]}
                js_tree_id = js_tree_id + 1
                json_data.append(row)
                for level in range(1, len(urls)):
                    if level == 1:
                        for level_element in urls['level'+str(level)]:
                            if main_domain in level_element:
                                row = {"text": str(level_element.split('/')[-1]), "id": js_tree_id}
                                js_tree_id = js_tree_id + 1
                                json_data[i]['children'].append(row)
                    else:
                        for level_element in urls['level'+str(level)]:
                            if main_domain in level_element:
                                row = {"text": str(level_element.split('/')[-1]), "id": js_tree_id}
                                js_tree_id = js_tree_id + 1
                                recursive_nodes(level_element, json_data[i]['children'], row)

            return jsonify({'json_data':json_data, "status":'unique_simplifed_url'})
        elif request.args.get('type') == 'product_url':
            file = 'data/url/product_'+allowed_domain+'.json'
            file_obj = open(file, 'r')
            product_url = file_obj.readlines()
            product_url = product_url[0] #Hard coded to fetch from first url
            product_url = json.loads(product_url)
            product_url = product_url['url']
            r = requests.get(product_url, verify=False)
            return jsonify({'html_content':r.text, "status":'product_url_sniffer'})
        elif request.args.get('type') == 'product_data':
            return jsonify({"message": 'Vanakkam', "status": 'end_of_scrap'})


@app.route('/save_deny_allow_url')
def save_deny_allow_url():
    if request.args.get('type') == 'deny':
        url_paths = request.args.get('deny_url_path_array')
        file = 'data/url/deny_url_'+allowed_domain+'.json'
    elif request.args.get('type') == 'allow':
        url_paths = request.args.get('allow_url_path_array')
        file = 'data/url/allow_url_'+allowed_domain+'.json'

    url_paths.encode('utf8')
    url_paths = url_paths.split(',')
    removable = []
    x = 0
    for val in url_paths:
        for inter in url_paths[:x]+url_paths[x+1:]:
            if val in inter:
                if not inter in removable:
                    removable.append(inter)
        x = x + 1
    for val in removable:
        url_paths.remove(val)

    with open(file, 'w') as file_obj:
        for url_path in url_paths:
            file_obj.write(url_path + '\n')

    if request.args.get('type') == 'deny':
        return jsonify({"status":'deny_url_done'})
    elif request.args.get('type') == 'allow':
        return jsonify({"status":'allow_url_done'})

@app.route('/scrap_product_url', methods=['POST', ])
def scrap_product_url():
    if request.method == 'POST':
        if request.form['scrap_product_url'] == 'yes':
            #Step2: Scraping Product URL
            proc = scraping(url, "scrap_package_url")
            return render_template('index.html', form='form3', url=url)

if __name__ == '__main__':
    '''r = requests.get('https://adventurenation.com/', verify=False)
    print r.status_code
    print type(r.text)
    with open('templates/test.html', 'w') as fo:
        fo.write(r.text)

    with open('templates/index.html', 'r') as fo:
        lines = fo.read()
    
    lines = lines.replace('</body>', '</body>\n<script src="{{ url_for("static", filename="js/test.js") }}"></script>\n<script>$("body").click(function(event){alert(getXPath(event.target));});</script>\n')

    with open('templates/index.html', 'w') as fo:
        fo.write(lines)'''

    #Reset all users login status to false, when restart the web server
    user_table = query(user_CSV)
    count_row=user_table.shape[0] #gives number of row count
    count_col=user_table.shape[1] #gives number of col count
    for row in range(count_row):
        user_table.loc[row, 'login_status'] = 'False'
        user_table.loc[row, 'session_key'] = 'False'
    user_table.to_csv(user_CSV, index=False)
    
    app.run(host='0.0.0.0')
