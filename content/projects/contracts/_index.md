---
title: Contracts
summary: Projects I was hired to work on in the past.
type: landing
show_date: false
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
  - block: tag_cloud
    content:
      title: Tags
    design:
      columns: '1'
  - block: portfolio
    id: contracts
    content:
      title: All Contract Work
      filters:
        tags: [ "Contract" ]
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
---
