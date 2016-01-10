# These two commands solve issue of HTTPS Insecure Platform in Python:
# pip install requests

import requests, json, os, unicodedata

headers = {
    'content-type': 'application/vnd.api+json',
    'accept': 'application/*, text/*',
}
r = requests.get('https://api.tnyu.org/v3/events?sort=-startDateTime&filter[simple][teams]=53f99d48c66b44cf6f8f6d81', headers=headers, verify=False)
data = json.loads(r.text)

details = ""

demo = data['data'][0]
title = demo["attributes"].get("title")
title = unicodedata.normalize('NFKD', title).encode('ascii','ignore')
rsvpUrl = demo["attributes"].get("rsvpUrl")
details = demo["attributes"].get("details")

# to do: parse through details
