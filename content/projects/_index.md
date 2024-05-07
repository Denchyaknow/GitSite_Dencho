---
title: Projects
summary: All Experimental and Contract work Ive done in the past that I am not to ashamed of.
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
#date: 2022-01-01
#tags: ["Prototype", "VR", "Mobs", other]
#categories: ["Cat0", "Cat1", "Experiments", "Prototypes"] # display at the top of a page alongside a page’s metadata
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
    id: projectHero
    demo: false # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 
      cta_note:
        label: >-
          <!--div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div-->
      text: |-
         # NOTICE: 
         **This Page is Under Construction** 
         #### Please Reload the page if any Media files fail to show during development.

    design:
        background:
            video: 
                filename: projects/physicsBasedExoArms/XRLog_2020_001.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
                flip: true # Post-processing: flip the video horizontally?
 

  - block: portfolio
    id: projects
    content:
      title: All Projects
      subtitle: All Experimental and Contract work Ive done in the past that I am not to ashamed of.
      filters:
        #tags: [ "Experiment" ]
        folders: 
          - "projects"
      # buttons: # To remove the toolbar, delete the entire `filter_button` block.
      #   - name: All  # To filter by a specific tag, set `tag` to an existing tag name.
      #     tag: '*' # To show all items, set `tag` to "*".
      #   - name: Deep Learning
      #     tag: Deep Learning
      #   - name: Other
      #     tag: Demo
      #default_button_index: 0 # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
    design:
      columns: '1' # Choose how many columns the section has. Valid values: '1' or '2'.
      view: masonry #List, Compact, Card, Citation, Showcase, Masonry
      flip_alt_rows: false # For Showcase view, flip alternate rows?
  - block: tag_cloud
    content:
      title: Tags
      design:
        columns: '1'
---
