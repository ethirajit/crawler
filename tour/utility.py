from datetime import datetime
from pandas import read_csv
from flask_login import current_user
from config import *

#Convert CSV to SQL using Pandas
def query(csv_file):
    table = read_csv(csv_file)
    return table
    
#print logs
def print_log_with_timestamp(message, username):
    if print_log_flag:
        with open('user_data/'+username+'/crawler_login.log', "a") as log:        
            log.write(str(datetime.now().strftime('%Y-%m-%d %H:%M:%S'))+" - "+message+"\n")
    else:
        pass