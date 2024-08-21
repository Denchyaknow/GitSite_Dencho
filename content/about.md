---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: About Dencho
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      subtitle: ''
      text: |-
          <div class="video_cover"></div>
          <spline-viewer id="spline_hero" class="spline_cover" url="https://prod.spline.design/hQ8HSnvTRVmMWZBu/scene.splinecode"></spline-viewer>
    design:
      css_class: 'animeBorders6 commonVideoSection halfHero'
      background:
        video: 
          filename: backgrounds/XRLog_2023_Hero.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
          flip: true # Post-processing: flip the video horizontally?

  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: ''
  #   design:
  #     css_class: 'sectionBorderTopMask'
  #     columns: '1'

  - block: markdown
    content:
      title: 'Everyday Tools'
      subtitle: 'Tools I use on a daily basis'
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


  - block: skills
    content:
      title: Skills
      text: 'I am a beginner at becoming a master'
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: admin
    design:
      css_class: 'animeBorders6' # needed to minimize blank space between hero - seperator - skills section
      columns: '1'

  - block: markdown
    content:
      title: 'Familiar Tools'
      subtitle: 'Some tools Ive used in the past and have a good understanding of'
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

  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: ''
  #   design:
  #     css_class: 'sectionBorderBottom'
  #     columns: '1'

  - block: experience
    content:
      title: Experience
      date_format: Jan 2006 #   Refer to https://docs.hugoblox.com/customization/#date-format
      items:
      
        - title: Senior Developer
          company: Yakno
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2024-05-20'
          date_end: '2024-08-19' #   Leave `date_end` empty if it's your current employer.
          description: |-
              - Self-published a rhythm game on Steam called Peach, utilizing the Steam API via the Heathen SDK.
              - Worked closely with an Audio Engineer to create a game that heavily relied on Steams Inventory Service to create items that players can collect, sell, and trade on the Steam marketplace.
        - title: Lead XR Programmer, Technical Spokesman
          company: Crypto Comedy Club (CCC)
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2022-01-01'
          date_end: '2023-12-31' #   Leave `date_end` empty if it's your current employer.
          description: |-
              - Developed a project utilizing multimodal full-body finger tracking with ReadyPlayerMe Avatars, incorporating inverse kinematics and procedural physics.
              - Served as the technical spokesman, detailing project specifications and features during live AMA streams.
              - Blogged about prototype development, successfully raising over $80k in funds.
              - Innovated with physics-based full-body finger and controller tracking, a unique feature not available in other market applications.
        - title: Lead Programmer, Acting CGO
          company: BlockUnited
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2023-01-01'
          date_end: '2024-12-31'
          description: |-
              - Led the Unity frontend development, created, and maintained an open-source Web3SDK repository.
              - Developed experimental runtime prototypes interacting with blockchain events in real-time.
              - Successfully navigated and resolved project-breaking changes due to blockchain developments multiple times.
              - Extended existing source code to integrate rapidly-prototyped Web3 features, including a custom base building system and a physics-friendly combat system.
              - Developed core front-end systems for a Web3 MMO-Action-RPG using Unity3D and various SDKs.
              - Collaborated with a Back-end Full Stack developer to ensure seamless Unity-WebAPI interaction.
              - Set up technical documentation for multiple projects and provided interview materials for new hires.
              - Worked closely with artists to implement game elements based on wireframes from Figma.
              - Transitioned to the role of acting Chief Game Officer (CGO), overseeing game design and strategic project direction.
        - title: Unity3D Programmer
          company: Freelancer/Contractor
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2014-01-01'
          date_end: '2022-12-31'
          description: |-
              - Developed VR/AR applications and prototypes for various clients, including StudyEdge, Forged Interactive, and LLamaZOO.
              - Implemented experimental finger tracking features using Oculus Quest.
              - Created and maintained Android apps, ensuring compatibility across devices.
        - title: Unity3D Programmer
          company: StudyEdge
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2022-01-01'
          date_end: '2022-04-30'
          description: |-
              - Developed networked prototypes using Oculus Quest's experimental finger tracking.
              - Collaborated with R&D teams to implement front-end features.
        - title: Unity3D Programmer
          company: DriveAbilityVT
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2021-01-01'
          date_end: '2021-06-30'
          description: |-
              - Developed an app for detecting human behavior patterns using neural networking with Amazon S3 and DynamoDB.
              - Sole maintainer of the Android branch, ensuring continuous updates and compatibility.
        - title: Technical Data Specialist
          company: Google Bellevue Office
          company_url: ''
          company_logo: org-x
          location: Bellevue, WA
          date_start: '2020-01-01'
          date_end: '2020-06-30'
          description: |-
              - Worked on packet filtering and validation for self-driving car data.
              - Gained experience in team collaboration and technical data handling.
        - title: Microsoft Security Tech Support
          company: Microsoft Redmond Campus
          company_url: ''
          company_logo: org-x
          location: Redmond, WA
          date_start: '2018-01-01'
          date_end: '2020-03-31'
          description: |-
              - Monitored fire panels and security systems across the Microsoft main campus.
        - title: Lead Unity3D Programmer
          company: AiDunno Games
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2017-01-01'
          date_end: '2017-12-31'
          description: |-
              - Developed combat systems, AI, and editor tools for an Android game available on Google Play Store.
              - Ensured compatibility across various devices, troubleshooting and debugging issues.
        - title: Web Backend Programmer
          company: Drive Group LLC
          company_url: ''
          company_logo: org-x
          location: Remote
          date_start: '2016-01-01'
          date_end: '2016-08-31'
          description: |-
              - Developed and managed websites using frameworks such as WordPress, Laravel, and technologies like PHP, CSS, HTML5, JavaScript, MySQL, and jQuery.
    design:
      columns: '1'
      css_class: ''



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
