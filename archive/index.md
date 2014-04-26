---
layout: legacy-index
title: Archive
---
{% for post in site.categories.demo %}
	{% capture post_count %} {{ post_count | plus: 1 }} {% endcapture %}
	{% endfor %}
{{ post_count }}