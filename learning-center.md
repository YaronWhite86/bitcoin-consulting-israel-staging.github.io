---
layout: default
title: Learning Center
---

# Learning Center

Welcome to the Learning Center. Here you'll find a collection of articles designed to help you understand Bitcoin, from the absolute basics to more advanced topics.

---

## All Articles

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span> - {{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>

---

## Visual Concepts

Sometimes a picture is worth a thousand words. Here are some diagrams to help visualize core Bitcoin concepts.

<div class="diagram-gallery">
  <div>
    <h3>How a Transaction Works On the Bitcoin Network</h3>
    <img src="{{ '/assets/images/btc_network_diagram_2.PNG' | relative_url }}" alt="A diagram explaining the bitcoin transaction process.">
  </div>
</div>
