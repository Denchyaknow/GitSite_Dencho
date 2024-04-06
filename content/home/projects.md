---
widget: portfolio
active: true
headless: true
weight: 45
title: I made things
subtitle:
content:
  page_type: post
  filter_default: 0
# Uncomment to only show content with specific tags
#  filters:
#    tags:
#      - featured project

  filter_button:
    - name: All
      tag: '*'
    - name: XR
      tag: VR, AR
    - name: Mobs
      tag: Mobs
    - name: Tools
      tag: Tool
    - name: Features
      tag: Feature
    - name: Prototypes
      tag: Prototype
design:
  columns: '1'
  view: 3
  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact  
  #   3 = Card
  #   5 = Showcase
  flip_alt_rows: true
advanced:
  css_class: projects_body
---
<script>
    ScrollReveal().reveal('.project-card', { delay: 200, origin: 'bottom', reset: true });
</script>
