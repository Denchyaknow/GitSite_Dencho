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
      css_class: 'spline_hero'
      background:
        video: 
          filename: backgrounds/XRLog_2023_Hero.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
          flip: true # Post-processing: flip the video horizontally?
    content:
      title: ''
      cta_note:
        label: >-
          <!--div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div-->
      text: |-
          <div class="video_cover"></div>
          <spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/hQ8HSnvTRVmMWZBu/scene.splinecode"></spline-viewer>
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |-
          <!--RIBBON spline-viewer  class="spline_section" url="https://prod.spline.design/HPGrnGPNa-N-ktSX/scene.splinecode"></spline-viewer-->
          <!--HANDS spline-viewer class="spline_section" url="https://prod.spline.design/Lx3g7jnOFbroh1Vs/scene.splinecode"></spline-viewer-->
          <spline-viewer class="spline_section" url="https://prod.spline.design/BCFibHmAEjzvs887/scene.splinecode"></spline-viewer>
          <!--WAVEYDOTS spline-viewer class="spline_section" url="https://prod.spline.design/XTyxPrdmcOeQc-ua/scene.splinecode"></spline-viewer-->
          <!--ICON spline-viewer class="spline_section" url="https://prod.spline.design/ioymJaK6NubxbiXE/scene.splinecode"></spline-viewer-->
          <!--LINES spline-viewer class="spline_section" url="https://prod.spline.design/JPYWFPf5webjzoW4/scene.splinecode"></spline-viewer-->
    design:
      css_class: 'spline_divider'
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

  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: CEO
          company: GenCoin
          company_url: ''
          company_logo: org-gc
          location: California
          date_start: '2021-01-01'
          date_end: ''
          description: |2-
              Responsibilities include:

              * Analysing
              * Modelling
              * Deploying
        - title: Front End Programmer
          company: Company Name
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2000-01-01'
          date_end: '2000-12-31'
          description: Enter Description Here
    design:
      columns: '2'



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
