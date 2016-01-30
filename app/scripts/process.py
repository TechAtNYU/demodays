# These two commands solve issue of HTTPS Insecure Platform in Python:
# pip install requests
from bs4 import BeautifulSoup
import requests, json, os, unicodedata, datetime, certifi, urllib3

# Suppresses InsecureRequestWarning
requests.packages.urllib3.disable_warnings()

headers = {
    'content-type': 'application/vnd.api+json',
    'accept': 'application/*, text/*'
}
r = requests.get('https://api.tnyu.org/v3/events?sort=-startDateTime&filter[simple][teams]=53f99d48c66b44cf6f8f6d81', headers=headers, verify=False)
data = json.loads(r.text)

demo = data['data'][2]
title = demo["attributes"].get("title")
title = unicodedata.normalize('NFKD', title).encode('ascii','ignore')
rsvpUrl = demo["attributes"].get("rsvpUrl")

# date, time, day and monthYear parsing
startDateTime = demo["attributes"].get("startDateTime")
startDateTime = datetime.datetime.strptime(startDateTime, "%Y-%m-%dT%H:%M:%S.%fZ")

endDateTime = demo["attributes"].get("startDateTime")
endDateTime = datetime.datetime.strptime(endDateTime, "%Y-%m-%dT%H:%M:%S.%fZ")

monthYear = startDateTime.strftime("%b %Y")
day = startDateTime.strftime("%A")
time = startDateTime.strftime("%I:%M") + "-" + endDateTime.strftime("%I:%M")
startDateTime = startDateTime.timetuple()
date = ""
for a in range(2,-1,-1):
    if a != 0:
        date += str(startDateTime[a]) + "/"
    elif a == 0:
        date += str(startDateTime[a])
programTitle = date + "Program"

# demoUrl parsing from details
demoUrl = ""
details = demo["attributes"].get("details")
details = unicodedata.normalize('NFKD', details).encode('ascii','ignore')
details_soup = BeautifulSoup(details, 'html.parser')
for link in details_soup.find_all('a'):
    if "goo.gl/forms" in link.string:
        demoUrl = link.string

# about current demoday
currentTitle = demo["attributes"].get("title")
currentDesc = demo["attributes"].get("details")

# venue info
venue_id = demo["relationships"]["venue"].get("data").get("id")
v = requests.get("https://api.tnyu.org/v3/venues/" + venue_id, headers=headers, verify=False)
v_data = json.loads(v.text)
venue = v_data["data"]["attributes"]
location = venue.get("name")
address = venue.get("address")

# presenters info
# TO DO: Adjust for multiple presenters and no presenter
presenter_id = demo["relationships"]["presenters"].get("data")[0].get("id")
p = requests.get("https://api.tnyu.org/v3/presenters/" + presenter_id, headers=headers, verify=False)
p_data = json.loads(p.text)
presenter = p_data["data"]["attributes"]
url = presenter.get("url")
shortBio = presenter.get("shortBio")
name = presenter.get("name")
title = presenter.get("title")
desc = "<a href=\"{}\">{}</a>, {}. {}".format(url, name, title, shortBio)
keynoteSpeakers = [
    {
        "name": name,
        "desc": desc
    }
]

# coorganizers/hosts info
hosts_len = len(demo["relationships"]["coorganizers"].get("data"))
# if hosts_len == 0:
#     hostsImg = [
#         {
#             "src": "../assets/logos/techatnyu.png",
#             "name": "tech@nyu",
#             "href": "http://techatnyu.org"
#         }
#     ]
# else:
#     for i in range(0, hosts_len):
#         hosts_id = demo["relationships"]["coorganizers"].get("data")[0]

# ToDo:
# Adjust presenters, hosts to allow for multiple ones
# What to do for img for presenter? Use Twitter API to get a headshot? Lol.
#
# Do above for prevSponsors. Find a way to update it after every demoday (think then talk to abhi)
# Don't commit the key!
