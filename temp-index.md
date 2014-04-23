---
layout: none
title: DemoDays, presented by tech@NYU
---
<h1>temp index for DD archive</h1>

<div class="archive__wrap">
    <!--<div class="archive__control--left"><a href="#">&laquo;</a></div>
    <div class="archive__control--right"><a href="#">&raquo;</a></div>-->
<ul class="archive">
	{% for post in site.posts %}
	<a href="{{post.url}}"><li class="past__{{post.date | date: '%b-%Y' }}"><div class="past__arrow"></div><div class="past__date">{{ post.date | date: "%b %Y" }}</div></li></a>
	{% endfor %}
</ul>
</div>
