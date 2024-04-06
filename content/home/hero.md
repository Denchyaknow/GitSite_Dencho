---
widget: hero
headless: true
active: false
weight: 10
title: I'm Dencho
subtitle: and I like minimal landing pages
hero_media: 
#design:
#  background:
#    gradient_angle: 0
#    gradient_start: 'rgb(5, 28, 47)'
#    gradient_end: 'rgb(68, 43, 72)'
#    text_color_light: true
cta:
  url: home/
  label: This button will destroy your device
  icon_pack: fas
  icon: power-off
cta_alt:
  url:
  label:
cta_note:
  label:
advanced:
  css_class: fullscreen
---

<div id="particles-js"></div>
<div class="particleback"></div>

<!--a class="github-button" href="https://github.com/wowchemy/wowchemy-hugo-modules" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Wowchemy Website Builder for Hugo">Star Wowchemy Website Builder for Hugo</a-->

<!--a class="github-button" href="https://github.com/wowchemy/starter-hugo-online-course" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star the Online Course template">Star the Online Course template</a>
<script async defer src="https://buttons.github.io/buttons.js"></script-->

<div class="headline">
<h1 class="punchline">
    I'm a front-end developer that specializes in XR
</h1>
  <p class="tagline">
    I use Unity 3D and C# to create features and experiences
  </p>
</div>

<div class="video_hero">
    <video muted autoplay="" name="media" loop=""><source src="https://thumbs.gfycat.com/ChillyThunderousIberiannase-mobile.mp4" type="video/mp4"></video>
</div>


<!--script>
//particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  //console.log('callback - particles.js config loaded');
//});
</script-->
<script>
  particlesJS.load('particles-js', 'assets/particlesjs1.json', function() {
  console.log('callback - particles.js config loaded');
});
</script>
<script>
    ScrollReveal().reveal('.video_hero', { delay: 500, reset: true });
		ScrollReveal().reveal('.headline', { delay: 500, reset: true });
    ScrollReveal().reveal('.tagline', { delay: 1000, reset: true });
    ScrollReveal().reveal('.punchline', { delay: 1500, reset: true });
</script>
