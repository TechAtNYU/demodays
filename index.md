---
layout: default
title: demodays
---
<section class="intro">
<div class="site">
{% capture intro %}
  {% include intro.markdown %}
{% endcapture %}
{{ intro | unindent | markdownify }}
</div>
</section>

<section class="setting-details">
<div class="site">
{% capture details %}
  {% include details.markdown %}
{% endcapture %}
{{ details | unindent | markdownify }}
</div>
</section>

<section class="main-copy">
<div class="site">
{% capture copy %}
  {% include copy.markdown %}
{% endcapture %}
{{ copy | unindent | markdownify }}
</div>
</section>


<section class="clubs-sponsors">
<div class="site">
{% capture sponsors %}
  {% include sponsors.markdown %}
{% endcapture %}
{{ sponsors | unindent | markdownify }}
</div>
</section>
