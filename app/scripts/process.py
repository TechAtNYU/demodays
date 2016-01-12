# These two commands solve issue of HTTPS Insecure Platform in Python:
# pip install requests
from bs4 import BeautifulSoup
import requests, json, os, unicodedata, datetime

headers = {
    'content-type': 'application/vnd.api+json',
    'accept': 'application/*, text/*',
}
r = requests.get('https://api.tnyu.org/v3/events?sort=-startDateTime&filter[simple][teams]=53f99d48c66b44cf6f8f6d81', headers=headers, verify=False)
data = json.loads(r.text)

demo = data['data'][0]
title = demo["attributes"].get("title")
title = unicodedata.normalize('NFKD', title).encode('ascii','ignore')
rsvpUrl = demo["attributes"].get("rsvpUrl")

# date and monthYear parsing
startDateTime = demo["attributes"].get("startDateTime")
startDateTime = datetime.datetime.strptime(startDateTime, "%Y-%m-%dT%H:%M:%S.%fZ")
monthYear = startDateTime.strftime("%b %Y")
startDateTime = startDateTime.timetuple()
date = ""
for a in range(2,-1,-1):
    if a != 0:
        date += str(startDateTime[a]) + "/"
    elif a == 0:
        date += str(startDateTime[a])

# demoUrl parsing from details
demoUrl = ""
details = demo["attributes"].get("details")
details = unicodedata.normalize('NFKD', details).encode('ascii','ignore')
details_soup = BeautifulSoup(details, 'html.parser')
for link in details_soup.find_all('a'):
    if "goo.gl/forms" in link.string:
        demoUrl = link.string
