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
      css_class: 'fullHero commonVideoSection'
      background:
        video: 
          filename: backgrounds/XRLog_2023_Hero.webm # Name of video in `assets/media/
          flip: false # Post-processing: flip the video horizontally?
    content:
      title: ''
      cta_note:
        label: >-
          <!--div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div-->
      text: |-
          <!--div id="particles-js"></div-->
          <div id="longLoadingScreen"></div>
          <div class="buttonSidePanel">
              <button class="reButton btn btn-primary">
              {{< icon name="vr-cardboard" pack="fas" >}}<p>ReadMe</p>
              </button>
              <button class="reButton btn btn-primary">
              {{< icon name="vr-cardboard" pack="fas" >}} <p> Skills</p>
              </button>
              <button class="reButton btn btn-primary">
              {{< icon name="vr-cardboard" pack="fas" >}} <p> Projects</p>
              </button>
              <button class="reButton btn btn-primary">
              {{< icon name="vr-cardboard" pack="fas" >}} <p> Contact</p>
              </button>
          </div>
          <!--spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/3ajmJqcYvVWbt9Cj/scene.splinecode"></spline-viewer-->
          <!--spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/hQ8HSnvTRVmMWZBu/scene.splinecode"></spline-viewer-->
          <div id="heroTextBox">
            <div id="heroTextBackground"></div>
            <span id="heroText"></span>
            <div id="heroTextStrings" style="display: none;">
              <p>
              Hi, I'm <strong>Dencho</strong>,
              </p>
            </div>
          </div>
          <script> SetTypedTextById('heroText'); </script>
  - block: markdown
    content:
      title: ''
      subtitle: ''
      #text: '<div class="sectionBorderTopMask"</div>'
    design:
      css_class: 'sectionBorderTopMask'
      columns: '1'

  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: ''
    design:
      css_class: ''
      columns: '1'

  - block: markdown
    content:
      title: '<h1>SECTIONAL</h1>'
      subtitle: ''
      text: |-
          <div class="mTextBox">
            <span id="mdText0" class="mText"></span>
            <div id="mdText0Strings" style="display: none;">
              <p>
              Hi, I'm `<strong>DenchoDenchoDenchoDencho 
              <br> DenchoDenchoDenchoDencho</strong>`,
              </p>
              <p>
              Hi, I'DenchoDenchoDenchoDencho in one line
              </p>
            </div>
          </div>
          <script> SetTypedTextById('mdText0'); </script>
    design:
      css_class: 'sectionMarkDown commonVideoSection animatedBorderBottom'
      columns: '1'
      background:
        video: 
          filename: backgrounds/XRLog_2023_Hero.webm # Name of video in `assets/media/
          flip: false # Post-processing: flip the video horizontally?
  - block: markdown
    content:
      title: '<p>SECTIONAL</p>'
      subtitle: ''
      text: |-
          <div class="mTextBox">
            <span id="mdText1" class="mText"></span>
            <div id="mdText1Strings" style="display: none;">
              <p>
              Hi, I'm <strong>DenchoDenchoDenchoDencho 
              <br> DenchoDenchoDenchoDencho</strong>,
              </p>
              <p>
              Hi, I'DenchoDenchoDenchoDencho in one line
              </p>
            </div>
          </div>
          <script> SetTypedTextById('mdText1'); </script>
    design:
      css_class: 'sectionMarkDown'
      columns: '1'

  - block: collection
    id: featuredProjects
    content:
      title: Featured Projects
      subtitle: Projects that I consider have influenced my skill growth the most.
      text: ''
      filters:
        tag: ''
        folders: [ 'projects' ]
        featured_only: true
      count: 5
    design:
      css_class: ''
      columns: '1'
      view: card # compact list citation
  


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
