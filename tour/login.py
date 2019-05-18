from flask_login import UserMixin, LoginManager
from flask import render_template, jsonify, request, redirect
from flask import g
from flask.sessions import SecureCookieSessionInterface
from config import app
from utility import *
from config import *

#Flask Login
login_manager = LoginManager()
login_manager.init_app(app)

#login_manager.session_protection = "strong"

class CustomSessionInterface(SecureCookieSessionInterface):
    """Prevent creating session from API requests."""
    def save_session(self, *args, **kwargs):
        if g.get('login_via_request'):
            return
        return super(CustomSessionInterface, self).save_session(*args, **kwargs)

#app.session_interface = CustomSessionInterface()


class user_authenticated(UserMixin):
    def __init__(self, session_key, username, api_key):
        self.session_key = session_key
        self.username    = username
        self.api_key     = api_key

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def is_authenticated(self):
        return True

    def get_id(self):
        return self.session_key

@login_manager.user_loader
def load_user_from_session_key(session_key):
    try:
        user_table = query(user_CSV)
        rows = user_table[(user_table['session_key'] == str(session_key))]
        username = rows.iloc[0]['user_name']
        #update session key in user.csv
        row_index = user_table.loc[user_table['user_name']==username].index[0]
        user_table.loc[row_index, 'session_key'] = session_key
        user_table.to_csv(user_CSV, index=False)
        user = user_authenticated(session_key, username, None)
        #user.username = username
        #user.session_key = session_key
        return user    
    except Exception:
        return None

#For REST API authentications
@login_manager.request_loader
def load_user_from_request(request):
    try:
        g.login_via_request = True
        api_key = request.args.get('api_key')
        user_table = query(user_CSV)
        rows = user_table[(user_table['api_key'] == str(api_key))]
        #login using the api_key url arg
        if api_key:
            if rows.iloc[0]['api_key'] == api_key:
                user = user_authenticated(None, None, api_key)
                return user
            else:
                return None
        else:
             return None
    except Exception:
        return None

'''current_user.is_authenticated
current_user.is_active
current_user.is_anonymous
current_user.get_id
current_user.username
current_user.session_key
current_user.api_key'''



