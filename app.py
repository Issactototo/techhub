from flask import Flask
from cloudant.client import Cloudant
from cloudant.error import CloudantException
from cloudant.result import Result, ResultByKey,QueryResult
from cloudant.query import Query
import os
import json


app = Flask(__name__)
jsonFile = open('secrets.json')
data = json.load(jsonFile)

client = Cloudant(data["serviceUsername"], data["servicePassword"], url= data["serviceURL"])
#client = Cloudant(serviceUsername, servicePassword, url=serviceURL)
client.connect()
database = client['']

@app.route("/")
def index():
    return "1234"