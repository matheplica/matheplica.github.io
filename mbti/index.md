---
layout: default
title: mbti
---
<div id="home">
<ul class="posts">
<section id="mbti">

 {% for tag in site.tags %}
 {%if tag[0]=='mbti' %}
  <ul>
    {% for post in tag[1] reversed %}
      <li><h3>{{ post.title }}</h3></li>
      {{ post.content }}
    {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
