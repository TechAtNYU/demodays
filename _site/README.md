DemoDays.co
======================

##About

Event page and [archive](http://demodays.co/archive) for tech@NYU DemoDays in NYC. Live at [demodays.co](http://demodays.co)

##Site

DemoDays is built entirely in Jekyll. There is no backend or DB. The archives pages are done with lots of YAML and Liquid, taking advantage of the built-in {{post.date}} for layout.

* Jekyll
* LESS

---

#Documentation (DemoDays 1.0, pre-API, pre-Jekyll 2.x)

##Install and setup

DemoDays is compiled with [Jekyll](http://jekyllrb.com/). 

1. Install Jekyll on your computer
2. cd to this directory locally
3. `jekyll serve --watch`
4. Go to localhost:4000 in your browser

##Warnings, background

DemoDays is currently rather hacky. I built this by myself before the API and before Jekyll 2.x was released. This meant I had to manipulate the posts without using [collections](http://jekyllrb.com/docs/collections/).

What we're doing is tricking Jekyll into believing we have top level "blog posts" in `/_posts/`. Those are what are compiled into the nice archives pages. We name these posts the same as the actual date of that DD. Eg., the DemoDays on July 21st, 2012 is named `21-07-2012-july2012.md`. Then in `/_posts/demos` we have a "category" called demos with folders organized by date. The demo posts all have a year of 0000 but otherwise correspond to the correct date. Since we don't care about compiling the demo posts, it doesn't really matter.

This bad structure will be replaced as soon as:

1. We upgrade DemoDays to Jekyll 2.x
2. DemoDays uses an API integration instead of hacking YAML to store data/generate pages
3. Jekyll is banished from tech@NYU forever since Ethan hates it

(All are forthcoming...)

##If you dare proceed

For a good example of the YAML structure, check out the files from March 2014. The YAML for the main page looks like this:

```
---
layout: legacy
title: March 2014
eventLink: http://www.meetup.com/DemoDays/events/170862782/
accent: "#263855"
accentBold: "#8ca4cc"
location: Stack Exchange
legSpeakers:
- name: Abe Geiger
  link: https://twitter.com/ageiger
  image: /lib/img/abe-geiger.png
  bioTitle: Founder & CEO, Shake
  bioDescription: Abe is the Founder and CEO of Shake, a platform that allows users to create, sign, and send legally binding agreements from their smartphones. Prior to Shake, Abe held various roles at early-stage technology startups in both New York and the Bay Area including Director of Sales and Marketing at Affinity Circles, the first private label social network provider, VP of Marketing and Biz Dev at iSoccer, a youth sports development platform, and product, biz dev, and marketing consulting roles at Change.org, Palantir, CampusGroups, and HireLabs. While in business school, Abe worked at both Canaan Partners and Greycroft sourcing and analyzing investment opportunities. During that time he co-founded the NYC Turing Fellows program to bring more engineering talent to NYC startups. He is also on the board of America Scores NY, a non-profit after school program for urban youth. Abe received his BA in Political Science from Stanford, where he also captained the Varsity soccer team for three years, and his MBA from Columbia where he was the President of InSITE.
  companyTitle: Shake
  companyDescription: Shake is an iOS application that gives consumers, freelancers and small businesses the power to create their own legal agreements using only their mobile device. Shake's mission is to make the law accessible, understandable and affordable for everyone, so our agreement templates have been developed by licensed attorneys to capture important terms without using complicated legalese. Shake can be downloaded from the Apple App Store. 
- name: Ryan Shea
  link: https://onename.io/
  image: https://s3.amazonaws.com/97p/tux.jpg
  bioTitle: 
  bioDescription: Co-creator and Core Dev of OneName, Bitcoin aficionado, Co-founder of Hack Princeton, and Pres. Emeritus of The Princeton Entrepreneurship Club.
  companyTitle: OneName
  companyDescription: OneName is a decentralized identity system (DIS) with a user directory made of entries in a decentralized key-value store (the Namecoin blockchain). Nobody owns or controls OneName and users are in complete control of their data. OneName is open source, has a public design, and is for all to take part.
---
```

1. Layout - legacy for archive posts
2. Title - Month + Year
3. eventLink - original RSVP link
4. accent - main color for the month. If you're archiving the current index page, this color is found in variables.less
5. accentBold - see above
6. location - where we hosted
7. legSpeakers - an array for the speakers
  - name
  - link - twitter
  - image - hosted and found in `/lib/img/`
  - bioTitle - the main title and company
  - bioDescription - long form description of this person