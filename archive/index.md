---
layout: legacy-index
title: Archive
---

<div>
<ul>
	{% for post in site.posts %}
	{% unless post.category == "demo" %}
		<a href="{{post.url}}"><li>{{ post.title }}</li></a>
	{% endunless %}
	{% endfor %}
</ul>
</div>

#Statistics

{% for post in site.posts %}
	{% unless post.category == "demo" %}
	{% capture post_count %} {{ post_count | plus: 1 }} {% endcapture %}
	{% endunless %}
{% endfor %}

{{ post_count }}


{% for maker in site.posts %}
hi {{ post.maker.name }}
{% endfor %}


{% for post in site.categories.demo %}
	{% capture demo_count %} {{ demo_count | plus: 1 }} {% endcapture %}



	
	
{% capture site_makers %}{% for maker in post.maker %}{{ maker.name | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign maker_names = site_makers | split:',' | sort %}





<!--
{% for maker in post.maker %}

<h4 class="maker__name">{{ maker.name }} 
	{% if maker.twitter %}<a href="http://twitter.com/{{ maker.twitter }}" class="maker__twitter"><i class="ion-social-twitter" data-pack="social" data-tags="follow, post, share"></i></a> {% endif %}
</h4>
{% endfor %}-->
	
{{ post.maker.name | join: "," }}							


{{ maker_names }}
	
								
{% endfor %}



{{ demo_count }}





