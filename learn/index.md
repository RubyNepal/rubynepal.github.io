---
title: Learning Resources
layout: post
---

{% for resource in site.data.learn %}
  * [{{ resource.name }}]({{resource.link}})
{% endfor %}
