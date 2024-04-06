---
title: Stats
active: true
subtitle: These stats are calculated and dynamically generated from code::stats
widget: blank
headless: true
weight: 35
design: 
  columns: '1'
advanced:
  css_class: stats_body
---
<div class="codestats_block">
      <img class="codestats_top" src="https://codestats-readme.vercel.app/api?username=Denchyaknow&show_icons=true&theme=radical"/>
  <div class="codestats_bottom">
      <img class="codestats_latest" src="https://codestats-readme.vercel.app/api/history/?username=Denchyaknow&theme=radical&days_count=5&language_count=30&title=Latest" />
      <img class="codestats_most" src="https://codestats-readme.vercel.app/api/top-langs/?username=Denchyaknow&theme=radical" />
  </div>
</div>
<script>
    ScrollReveal().reveal('.codestats_block', { delay: 300, origin: 'bottom', reset: true });
</script>