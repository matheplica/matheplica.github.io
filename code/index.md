---
layout: default
title: my code
---
<div id="home">
<ul class="posts">
<section id="code">

 {% for tag in site.tags %}
 {%if tag[0]=='code' %}
  <ul>
    {% for post in tag[1] %}
      <li><h3>{{ post.title }}</h3></li>
      {{ post.content }}
    {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
