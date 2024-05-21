---
title: Experiments
summary: Things I explored in the past to gain a hone my skillset.
type: landing # page, landing, post, publications, online courses, projects, notes, software documentation, talks, slides
show_date: false

# date: 2022-01-01
# tags: ["Prototype", "VR", "Mobs", other]
# categories: ["Cat0", "Cat1", "Experiments", "Prototypes"] # display at the top of a page alongside a page’s metadata
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
      title: 
      cta_note:
        label: 
      text: |-
         **Under Contruction**
    design:
        background:
            video: 
                filename: projects/physicsBasedExoArms/XRLog_2020_001.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
                flip: true # Post-processing: flip the video horizontally?
  - block: portfolio
    id: experiments
    content:
      title: All Experiments
      filters:
        tags: [ "Experiment"]
        folders: 
          - "projects"
      buttons: # To remove the toolbar, delete the entire `filter_button` block.
        - name: All  # To filter by a specific tag, set `tag` to an existing tag name.
          tag: '*' # To show all items, set `tag` to "*".
        - name: Physics
          tag: 'Physics'
        - name: Unity
          tag: 'Unity'
        - name: VR
          tag: 'VR'
        - name: Animation
          tag: 'Animation'
        - name: AI
          tag: 'AI'
      default_button_index: 0 # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
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
