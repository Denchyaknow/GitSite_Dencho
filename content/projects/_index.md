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
          <!--spline-viewer class="splineNoCover" url="https://prod.spline.design/69eDN4S8NdHOhuWx/scene.splinecode"></spline-viewer-->
          <div id="splineBox0"></div>
          <script>
            SetInnerHTMLBasedOnBool('splineBox0', '<spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/hQ8HSnvTRVmMWZBu/scene.splinecode"></spline-viewer>', IsHardwareAccelerationEnabled());
          </script>

    design:
      css_class: 'halfHero commonVideoSection animeBorderBottom6'
      background:
        video: 
          filename: backgrounds/XRLog_2023_Hero.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
          flip: false # Post-processing: flip the video horizontally?
      columns: '1'

  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: ''
  #   design:
  #     css_class: 'sectionBorderTopMask'
  #     columns: '1'

  - block: collection
    id: posts
    content:
      title: Recent Contracts
      subtitle: '_All client work shown used placeholder assets and are not representative of the final product, all source code is original unless otherwise stated._'
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 3
      # Filter on criteria
      filters:
        folders: 
        - "projects"
        # author: ""
        category: "Contracts"
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
      css_class: 'noPaddingTop'
      view: card #List, Compact, Card, Citation, Showcase, Masonry
      columns: '1'

  - block: collection
    id: posts
    content:
      title: Recent Experiments
      subtitle: '_Either for fun or research these projects helped me hone my skills._'
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 3
      # Filter on criteria
      filters:
        folders: 
        - "projects"
        # author: ""
        category: "Experiments"
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
      css_class: 'noPaddingTop'
      view: card #List, Compact, Card, Citation, Showcase, Masonry
      columns: '1'


  - block: portfolio
    id: projects
    content:
      title: All Projects
      subtitle: Everything listed here was programmed by me.
      # text: ''
      filters:
        folders:
          - projects
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
        - name: GameJam
          tag: 'GameJam'
        - name: EditorTool
          tag: 'EditorTool'
      default_button_index: 0
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: masonry #List, Compact, Card, Citation, Showcase, Masonry
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true
      css_class: 'minHeightFullPage'

---
