import eel
from back.back import *

@eel.expose    
def message_py(message):
    return bot_maessage(message)

@eel.expose 
def first_message_py():
    return first_bot_maessage()