---
layout: default
title: my comix
---
<div id="home">
<ul class="posts">
<section id="comix">

 {% for tag in site.tags %}
 {%if tag[0]=='comix' %}
  <ul>
    {% for post in tag[1] %}
      <li><h1>{{ post.title }}</h1></li>
      {{ post.content }}
    {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
