DemoDays.co
======================

##About

Event page and [archive](http://demodays.co/archive) for tech@NYU DemoDays in NYC. Live at [demodays.co](http://demodays.co)

##Site

DemoDays is built entirely in Jekyll. There is no backend or DB. The archives pages are done with lots of YAML and Liquid, taking advantage of the built-in {{post.date}} for layout.

* Jekyll
* LESS

#Documentation (DemoDays 1.0, pre-API, pre-Jekyll 2.x)

DemoDays is compiled with [Jekyll](http://jekyllrb.com/). 

1. Install Jekyll on your computer
2. cd to this directory locally
3. `jekyll serve --watch`
4. Go to localhost:4000 in your browser

DemoDays is currently rather hacky. I built this by myself before the API and before Jekyll 2.x was released. This meant I had to manipulate the posts without using [collections](http://jekyllrb.com/docs/collections/).

What we're doing is tricking Jekyll into believing we have top level "blog posts" in `/_posts/`. We name these posts the same as the actual date of that DD. Eg., the DemoDays on July 21st, 2012 is named `21-07-2012-july2012.md`. Then in `/_posts/demos` we have a "category" called demos with folders organized by date. The demo posts all have a year of 0000 but otherwise correspond to the correct date. Since we don't care about compiling the demo posts, it doesn't really matter.

This bad structure will be replaced as soon as:

1. We upgrade DemoDays to Jekyll 2.x
2. DemoDays uses an API integration instead of hacking YAML and loops to generate pages
3. Jekyll is banished from tech@NYU since Ethan hates it

(All are forthcoming...)