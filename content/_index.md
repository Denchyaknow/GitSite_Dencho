---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    id: home
    demo: false # Only display this section in the Hugo Blox Builder demo site
    design:
      background:
        video: 
          filename: backgrounds/XRLog_2023_Hero.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
          flip: true # Post-processing: flip the video horizontally?
    content:
      title: Dencho.Dev
      cta_note:
        label: >-
          <!--div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div-->
      text: |-
          {{% callout warning %}}
          **NOTICE:** This Page is Under Construction
          {{% /callout %}}
          <!--div id="particles-js"></div-->
          <div class="video_hero">
              <div class="video_cover"></div>
          </div>

          <button class="reButton btn btn-primary animate__animated">Button Style 3</button>
          {{% staticref "uploads/cv.pdf" "newtab" %}}Link Style 1{{% /staticref %}} 
          <button class="reButton btn btn-primary animate__animated">
           {{< icon name="custom/unity-plain.svg" pack="custom" >}} XR Projects
          Button Style 3
          </button>
          <button id="reButton" class="btn btn-primary animate__animated">
            {{< icon name="vr-cardboard" pack="fas" >}} XR Projects
          </button>
          <h1 class="reText load-hidden">
              Widget Inc.
          </h1>
          <div class="buttonSidePanel">
              <button class="reButton btn btn-primary animate__animated">
              {{< icon name="vr-cardboard" pack="fas" >}} ReadMe
              {{< figure class="selector" src="icons/custom/bg0.svg" theme="light" >}}
              </button>
              <button class="reButton btn btn-primary animate__animated">
              {{< icon name="vr-cardboard" pack="fas" >}} Skills
              {{< figure class="selector" src="icons/custom/bg1.svg" theme="light" >}}
              </button>
              <button class="reButton btn btn-primary animate__animated">
              {{< icon name="vr-cardboard" pack="fas" >}} Projects
              {{< figure class="selector" src="icons/custom/bg2.svg" theme="light" >}}
              </button>
              <button class="reButton btn btn-primary animate__animated">
              {{< icon name="vr-cardboard" pack="fas" >}} Contact
              {{< figure class="selector" src="icons/custom/bg3.svg" theme="light" >}}
              </button>
          </div>
          <spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/3ajmJqcYvVWbt9Cj/scene.splinecode"></spline-viewer>
          
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |-
          <spline-viewer class="spline_section" url="https://prod.spline.design/JPYWFPf5webjzoW4/scene.splinecode"></spline-viewer>
    design:
      css_class: 'spline_markdown'
      columns: '1'
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |-
          {{< gist Denchyaknow 5bbfaf6473294e8c7bf3f271be6f56ca >}}
          <!--spline-viewer class="spline_cover" url="https://prod.spline.design/hQ8HSnvTRVmMWZBu/scene.splinecode"></spline-viewer-->
        # <script>
        #   document.addEventListener('DOMContentLoaded', function() {
        #     const homeSectionBg = document.querySelector('.home-section-bg');
        #     const splineSection = document.querySelector('.spline_section');

        #     if (homeSectionBg && splineSection) {
        #       // Move #spline_section after .home-section-bg
        #       homeSectionBg.parentNode.insertBefore(splineSection, homeSectionBg.nextSibling);
        #     }
        #   });
        # </script>
    design:
      columns: '1'
  - block: about.biography
    id: about
    content:
      title: AboutMe
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
    design:
        background:
            video: 
                filename: projects/physicsBasedExoArms/XRLog_2020_001.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
                flip: false # Post-processing: flip the video horizontally?


  - block: skills
    content:
      title: Skills
      text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: admin
    design:
      columns: '1'


  - block: collection
    id: posts
    content:
      title: Experiments
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - projects
          - experiments
        author: ""
        category: ""
        tag: "Prototype"
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
      view: Card #List, Compact, Card, Citation, Showcase, Masonry
      columns: '1'


  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
          - projects
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: masonry #List, Compact, Card, Citation, Showcase, Masonry
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false


#   - block: experience
#     content:
#       title: Experience
#       # Date format for experience
#       #   Refer to https://docs.hugoblox.com/customization/#date-format
#       date_format: Jan 2006
#       # Experiences.
#       #   Add/remove as many `experience` items below as you like.
#       #   Required fields are `title`, `company`, and `date_start`.
#       #   Leave `date_end` empty if it's your current employer.
#       #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
#       items:
#         - title: CEO
#           company: GenCoin
#           company_url: ''
#           company_logo: org-gc
#           location: California
#           date_start: '2021-01-01'
#           date_end: ''
#           description: |2-
#               Responsibilities include:

#               * Analysing
#               * Modelling
#               * Deploying
#         - title: Professor of Semiconductor Physics
#           company: University X
#           company_url: ''
#           company_logo: org-x
#           location: California
#           date_start: '2016-01-01'
#           date_end: '2020-12-31'
#           description: Taught electronic engineering and researched semiconductor physics.
#     design:
#       columns: '2'
#   - block: accomplishments
#     content:
#       # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
#       title: 'Accomplish&shy;ments'
#       subtitle:
#       # Date format: https://docs.hugoblox.com/customization/#date-format
#       date_format: Jan 2006
#       # Accomplishments.
#       #   Add/remove as many `item` blocks below as you like.
#       #   `title`, `organization`, and `date_start` are the required parameters.
#       #   Leave other parameters empty if not required.
#       #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
#       items:
#         - certificate_url: https://www.coursera.org
#           date_end: ''
#           date_start: '2021-01-25'
#           description: ''
#           icon: coursera
#           organization: Coursera
#           organization_url: https://www.coursera.org
#           title: Neural Networks and Deep Learning
#           url: ''
#         - certificate_url: https://www.edx.org
#           date_end: ''
#           date_start: '2021-01-01'
#           description: Formulated informed blockchain models, hypotheses, and use cases.
#           icon: edx
#           organization: edX
#           organization_url: https://www.edx.org
#           title: Blockchain Fundamentals
#           url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
#         - certificate_url: https://www.datacamp.com
#           date_end: '2020-12-21'
#           date_start: '2020-07-01'
#           description: ''
#           icon: datacamp
#           organization: DataCamp
#           organization_url: https://www.datacamp.com
#           title: 'Object-Oriented Programming in R'
#           url: ''
#     design:
#       columns: '2'


#   - block: markdown
#     content:
#       title: Gallery
#       subtitle: ''
#       text: |-
#         {{< gallery album="demo" >}}
#     design:
#       columns: '1'
#   - block: collection
#     id: featured
#     content:
#       title: Featured Publications
#       filters:
#         folders:
#           - publication
#         featured_only: true
#     design:
#       columns: '2'
#       view: card
#   - block: collection
#     content:
#       title: Recent Publications
#       text: |-
#         {{% callout note %}}
#         Quickly discover relevant content by [filtering publications](./publication/).
#         {{% /callout %}}
#       filters:
#         folders:
#           - publication
#         exclude_featured: true
#     design:
#       columns: '2'
#       view: citation
#   - block: collection
#     id: talks
#     content:
#       title: Recent & Upcoming Talks
#       filters:
#         folders:
#           - event
#     design:
#       columns: '2'
#       view: compact
#   - block: tag_cloud
#     content:
#       title: Popular Topics
#     design:
#       columns: '2'
#   - block: contact
#     id: contact
#     content:
#       title: Contact
#       subtitle:
#       text: |-
#         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
#       # Contact (add or remove contact options as necessary)
#       email: test@example.org
#       phone: 888 888 88 88
#       appointment_url: 'https://calendly.com'
#       address:
#         street: 450 Serra Mall
#         city: Stanford
#         region: CA
#         postcode: '94305'
#         country: United States
#         country_code: US
#       directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
#       office_hours:
#         - 'Monday 10:00 to 13:00'
#         - 'Wednesday 09:00 to 10:00'
#       # Choose a map provider in `params.yaml` to show a map from these coordinates
#       coordinates:
#         latitude: '37.4275'
#         longitude: '-122.1697'  
#       contact_links:
#         - icon: twitter
#           icon_pack: fab
#           name: DM Me
#           link: 'https://twitter.com/Twitter'
#         - icon: skype
#           icon_pack: fab
#           name: Skype Me
#           link: 'skype:echo123?call'
#         - icon: video
#           icon_pack: fas
#           name: Zoom Me
#           link: 'https://zoom.com'
#       # Automatically link email and phone or display as text?
#       autolink: true
#       # Email form provider
#       form:
#         provider: netlify
#         formspree:
#           id:
#         netlify:
#           # Enable CAPTCHA challenge to reduce spam?
#           captcha: false
#     design:
#       columns: '2'
---
