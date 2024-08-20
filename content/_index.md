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
      css_class: 'fullHero commonVideoSection animeBorderBottom6'
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
          <!--div class="buttonSidePanel">
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
          </div-->
          <!--spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/3ajmJqcYvVWbt9Cj/scene.splinecode"></spline-viewer-->
          <!--spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/hQ8HSnvTRVmMWZBu/scene.splinecode"></spline-viewer-->
          
          <!-- Make the spline appear only if hardware acceleration is enabled -->
          <div id="splineBox0"></div>
          <script>
            SetInnerHTMLBasedOnBool('splineBox0', '<spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/hQ8HSnvTRVmMWZBu/scene.splinecode"></spline-viewer>', IsHardwareAccelerationEnabled());
          </script>

          <div id="heroTextBoxA" class="heroBoxCenter heroTitle">
            <div id="heroTextBackground" class="textBackground">
              <span id="heroTextA"></span>
            </div>
            <div id="heroTextAStrings" style="display: none;">
              <h1> Hi, I'm <strong>Dencho</strong> </h1>
            </div>
          </div>
          <script> SetTypedTextById('heroTextA', { _startDelay: 3000, _resetReveal: true, _loop: false }); </script>

          <div id="heroTextBoxB" class="heroBoxCenter heroSubTitle">
            <div class="textBackground">
              <span id="heroTextB"></span>
            </div>
            <div id="heroTextBStrings" style="display: none;">
              <p>Cognitively versatile <strong>Unity Developer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>C# Programmer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>Modder</strong>^1200 since 2008</p>
              <p>Cognitively versatile <strong>Otaku</strong>^1200 since 2002</p>
              <p>Cognitively versatile <strong>Gamer</strong>^1200 since 1996</p>
              <p>Cognitively versatile <strong>Unity Developer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>C# Programmer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>Modder</strong>^1200 since 2008</p>
              <p>Cognitively versatile <strong>Otaku</strong>^1200 since 2002</p>
              <p>Cognitively versatile <strong>Gamer</strong>^1200 since 1996</p>
              <p>Cognitively versatile <strong>Unity Developer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>C# Programmer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>Modder</strong>^1200 since 2008</p>
              <p>Cognitively versatile <strong>Otaku</strong>^1200 since 2002</p>
              <p>Cognitively versatile <strong>Gamer</strong>^1200 since 1996</p>
              <p>Cognitively versatile <strong>Unity Developer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>C# Programmer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>Modder</strong>^1200 since 2008</p>
              <p>Cognitively versatile <strong>Otaku</strong>^1200 since 2002</p>
              <p>Cognitively versatile <strong>Gamer</strong>^1200 since 1996</p>
              <p>Cognitively versatile <strong>Unity Developer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>C# Programmer</strong>^1200 since 2014</p>
              <p>Cognitively versatile <strong>Modder</strong>^1200 since 2008</p>
              <p>Cognitively versatile <strong>Otaku</strong>^1200 since 2002</p>
              <p>Cognitively versatile <strong>Gamer</strong>^1200 since 1996</p>
            </div>
          </div>
          <script> SetTypedTextById( "heroTextB",{ _startDelay: 3000, _resetReveal: true, _loop: true, _fade: false }); </script>
  
  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     #text: '<div class="sectionBorderTopMask"</div>'
  #   design:
  #     css_class: 'animeBorderBottom'
  #     columns: '1'

  # My Custom Classes:
  # fullHero halfHero quarterHero commonVideoSection 
  # animeBorders1 animeBorderTop2 
  # videoBackgroundRight videoBackgroundLeft

  - block: markdown
    content:
      title: 'Everyday Tools'
      subtitle: ''
      text: |-
        <div class="row badge-section">
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-csharp-plain-wordmark"></i>
              <p>C Sharp</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-unity-plain"></i>
              <p>Unity</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-photonengine-plain"></i>
              <p>Photon</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-github-original"></i>
              <p>GitHub</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-json-plain"></i>
              <p>Json</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-mongodb-plain"></i>
              <p>Markdown</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-visualstudio-plain"></i>
              <p>Visual Studios</p>
            </div>
          </div>
          <!-- Repeat for more badges -->
        </div>
    design:
      css_class: 'quarterHero'
      columns: '1'

  - block: hero
    content:
      title: ''
      subtitle: ''
      text: |-
          <div class="mTextBoxLeft">
            <div class="mTextBackground">
              <span id="mdText0" class=""></span>
            </div>
            <div id="mdText0Strings" style="display: none;">
              <p>
                Feel free to scope out my Github and Gists that consists of scripts I wrote my self. They represent my ongoing journey of learning and problem-solving.
              </p>
            </div>
              <a class="butt" href="https://github.com/Denchyaknow"><span></span>Github</a>
              <a class="butt" href="https://gist.github.com/Denchyaknow"><span></span>Gists</a>
          </div>
          <script> SetTypedTextById( "mdText0",{ _startDelay: 0, _resetReveal: false, _loop: false, _fade: false }); </script>
    design:
      css_class: 'sectionMarkDown commonVideoSection animeBorders6 halfHero videoBackgroundRight'
      columns: '1'
      background:
        video: 
          filename: backgrounds/FingerBoiHero.webm # Name of video in `assets/media/
          flip: false # Post-processing: flip the video horizontally?

  - block: markdown
    content:
      title: 'Familiar Tools'
      subtitle: ''
      text: |-
        <div class="row badge-section">
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-vscode-plain"></i>
              <p>VSCode</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-rider-plain"></i>
              <p>Rider</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-swagger-plain"></i>
              <p>Swagger</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-githubactions-plain"></i>
              <p>Github Actions</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-jira-plain"></i>
              <p>Jira</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-nodejs-plain"></i>
              <p>NodeJS</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-hugo-plain"></i>
              <p>Hugo</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-javascript-plain"></i>
              <p>Javascript</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-lua-plain"></i>
              <p>Lua</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-html5-plain"></i>
              <p>HTML5</p>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-2">
            <div class="badge-item">
              <i class="devicon-css3-plain-wordmark"></i>
              <p>CSS/SCSS</p>
            </div>
          </div>
          <!-- Repeat for more badges -->
        </div>
    design:
      css_class: 'quarterHero'
      columns: '1'

  - block: hero
    content:
      title: ''
      subtitle: ''
      text: |-
          <div class="mTextBoxRight">
            <div class="mTextBackground">
              <span id="mdText1" class=""></span>
            </div>
            <div id="mdText1Strings" style="display: none;">
              <p> I transform abstract ideas into tangible, innovative features, collaborating closely with artists and designers to bring visions to life. </p>
            </div>
          </div>
          <script> SetTypedTextById( "mdText1",{ _startDelay: 0, _resetReveal: false, _loop: false, _fade: false }); </script>
    design:
      css_class: 'sectionMarkDown commonVideoSection animeBorders6 halfHero videoBackgroundLeft'
      columns: '1'
      background:
        video:
          filename: backgrounds/RockiBoiHero.webm # Name of video in `assets/media/
          flip: false # Post-processing: flip the video horizontally?

  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: ''
    design:
      css_class: 'quarterHero'
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
