---
layout: legacy-index
title: Archive
---

#Thanks

{% for post in site.posts %}
	{% unless post.category == "demo" %}
	{% capture post_count %} {{ post_count | plus: 1 }} {% endcapture %}
	{% endunless %}
{% endfor %}

{% for post in site.categories.demo %}
	{% capture demo_count %} {{ demo_count | plus: 1 }} {% endcapture %}					
{% endfor %}

<h3>{{ demo_count }} Demos by our amazing demoers</h3>

<ul class="makers__thanks">
{% for post in site.categories.demo %}
	{% for maker in post.maker %}
<li>{% if maker.twitter %}<a href="http://twitter.com/{{ maker.twitter }}">{% endif %}{{ maker.name }} {% if maker.twitter %}</a>{% endif %} &bull;
</li>
{% endfor %}
{% endfor %}
</ul>








