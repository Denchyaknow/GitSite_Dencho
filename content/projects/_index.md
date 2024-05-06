---
title: Projects
summary: Everything I worked on.
type: landing
# page: any general content
# landing # pages that can consist of content blocks, such as the homepage
# post: blog posts or news
# Publications: import your research publications from BibTeX
# Online Courses: share knowledge online
# Projects: publish your portfolio or projects
# Notes: collaborate on content across notebooks, sections, and pages
# Software Documentation: document your software projects
# Talks/Events: publish any talks which you are presenting
# Slides: write slides very efficiently with Markdown, present them at your talk, and share them online
date: 2022-01-01
tags: ["Prototype", "VR", "Mobs", other]
categories: ["Cat0", "Cat1", "Experiments", "Prototypes"] # display at the top of a page alongside a page’s metadata
#image:
  #filename: 'https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.webm'
  #https://i.imgur.com/XlJ4RR1.mp4
  #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.gif
  #placement: 1
  #caption: 'Photo by [Geo](https://github.com/gcushen/)'
  #focal_point: 'Center'
  #preview_only: false
  #alt_text: An optional description of the image for screen readers.
   # Uncomment to load an image from `assets/media/` instead.
#banner:
 # image: 'https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.webm'
  #filename: 'https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.webp'
  #caption: 'Image credit: [**Geo**](https://github.com/gcushen/)'
sections:
  - block: hero
    id: projects
    demo: false # Only display this section in the Hugo Blox Builder demo site
    content:
      title: Dencho.Dev
      image:
        filename: 
      cta:
        label: '**Get Started**'
        url: https://hugoblox.com/templates/
      cta_alt:
        label: Ask a question
        url: https://discord.gg/z8wNYzb
      cta_note:
        label: >-
          <div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div>
      text: |-
         **Under Contruction**

    design:
        background:
            video: 
                filename: projects/test0.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
                flip: false # Post-processing: flip the video horizontally?
                brightness: 0.2

  - block: collection
    id: project_posts
    content:
      title: Projects
      subtitle: 'Everything I worked on'
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 100
      # Filter on criteria
      filters:
        folders: 
          - projects
          - experiments
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: Masonry #List, Compact, Card, Citation, Showcase, Masonry
      columns: '1'

---
<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.webm" type="video/mp4"></video>
</div>

{{< video src="https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4" >}}
