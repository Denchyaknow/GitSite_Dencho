---
title:
active: true
subtitle:
widget: blank
headless: true
weight: 10
design: 
  columns: '1'
advanced:
  css_class: video_body
---
<div id="particles-js"></div>
<div class="particleback"></div>
<div class="video_hero">
    <video muted autoplay="" name="media" loop=""><source src="https://thumbs.gfycat.com/InsistentUnripeAmericantoad-mobile.mp4" type="video/mp4"></video>
    <div class="video_cover"></div>
</div>
<div class="intro">
    <h1 class="intro_0"> I'm Dencho </h1>
    <p class="intro_1"> A front-end XR Developer</p>
    <div class="intro_2"> {{% cta cta_link="#stats" cta_text="My Stats" %}} </div>
    <h1 class="intro_0"> NOTICE: This website is still under development</h1>
</div>
<script>
  particlesJS.load('particles-js', 'assets/particlesjs1.json', function() {
  console.log('callback - particles.js config loaded');
});
</script>
<script>
    ScrollReveal().reveal('.intro_0', { delay: 750, origin: 'bottom', reset: true });
    ScrollReveal().reveal('.intro_1', { delay: 1000, origin: 'bottom', reset: true });
    ScrollReveal().reveal('.intro_2', { delay: 1250, origin: 'bottom', reset: true });
</script>