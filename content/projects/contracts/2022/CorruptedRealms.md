---
title: Corrupted Realms
summary: |-
    <p>Contracted as a Senior Front-end Programmer for a Web3 MMORPG CodeName: CorruptedRealms</p>
    <div class="video_thing">
        <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_937.webm" type="video/mp4"></video>
    </div>
type: landing
tags: ["Contract", "EditorTool", "Unity", "Web3", "NFT", "Automation", "C#"]
date: 2023-10-11
sections:
  # - block: hero
  #   id: projectHero
  #   demo: false # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: 
  #     cta_note:
  #       label: >-
  #         <!--div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div-->
  #     text: |-
  #        # NOTICE: 
  #        **This Page is Under Construction** 
  #        #### Please Reload the page if any Media files fail to show during development.
  #   design:
  #       background:
  #           video: 
  #               filename: projects/physicsBasedExoArms/XRLog_2020_001.webm # Name of video in `assets/media/`. #https://raw.githack.com/Denchyaknow/StaticStorage/Develop/Test/test0.mp4'
  #               flip: true # Post-processing: flip the video horizontally?
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |-
        **Hired on as a Senior Programmer, This is one of my earliest projects involving Web3, at the time (2022-2023) there was but a handful of blockchain SDKs that were compatible with Unity and C#. On top of all the Web3 functionality part of my job was to refine the combat and art workflow for maps.**
        | Technologies Used        | Description |
        |--------------------------|-------------|
        | **Cinemachine**     | Modular AAA Camera System. |
        | **Invector Character System**     | A quick start to basic combat, but unacceptable for production. |
        | **Combat Extensions**     | The initial state of combat in the game was subpar at best. I performed surgery to the SDKs source code in a attempt at more modern combat. |
        | **Gaia**     | I used Gaia to generate different land samples of quality and size to that we could acheive the biggest land possible for the most amount of cells.  |
        | **AssetBundles**     |  Using addressables I created a assetbundle workflow for Item and Character assets.  |
        | **TerrainGridSystem**  |  A Plugin for easy grids, which I then extended to use our own crafted NFT metadata for cells.  |
        | **MoralisWeb3SDK**  |  This was our main Web3 Plugin that we used for Web3 interactions, but it was deprecated early 2023.  |
        | **ThirdWebSDK**  |  The replacement for Moralis, through we only used it for the wallet connections.  |
        | **MongoDB&Azure**  |  Our Backend handed by another Senior Programmer, I was responsible for the Web3 interactions with the WebAPI the other dev made.  |
        | **SpeedTree**  |  This and other asset packs were use to make our terrains.  |
        | **NFTArtisan**  |  A Plugin I made to generate NFTs from a custom CellManager.  |
        | **FinalIK**  |  Humanoid IK system.  |
        | **PuppetMaster**  |  Humanoid Ragdoll system.  |
        | **UnityGamingServices**  |  We used this for Networking and region servers the lived on the edge.  |

        <!--Custom spacing-->
        <div class="mb-3"></div>
        <!--GitHub Button JS-->
        <script async defer src="https://buttons.github.io/buttons.js"></script>
    design:
      columns: '1'
  - block: markdown
    id: stuff1
    content:
      title: ''
      subtitle: ''
      text: |-
        #### Creating a stereoscopic 3D Web3 Map

        <p>This was basically my first prototype of a 3D map using such a big terrain (over 200k square meters) and was pretty hard to make as I had to make sure multiple Web3 systems was working with out smart contract thats live on the testnet. This is the initial state of the Map UI before the Web3 integration.</p>
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_937.webm" type="video/mp4"></video>
        </div>
        <p>Here is the final prototype state of the Map UI after the Web3 integration. </p>
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_943.webm" type="video/mp4"></video>
        </div>

        #### Runtime Tests
        
        <p>Some early testing of the Map system running with the character controller.</p>
        
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_929.webm" type="video/mp4"></video>
        </div> 
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_931.webm" type="video/mp4"></video>
        </div> 

        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_945.webm" type="video/mp4"></video>
        </div>
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_947.webm" type="video/mp4"></video>
        </div>
    design:
      columns: '1'
  - block: markdown
    id: stuff1
    content:
      title: ''
      subtitle: ''
      text: |-
        #### Extending Combat
        <p>I'm sure the Invector SDK is usable for a lot of projects. However I have never been more displeased by the code quality in the SDK. It makes me want to throw up and if I could go back to the start of development I would strongly recommend against using it. I ended reverse engineering parts of their character components so that performance would increase by 80%+ during stress testing. This is why it's not recommended to handle null or distance checks every frame. Shame shame.</p>
        <p>I started by overriding attack functions to tie into a custom sensor I made that detects other mob sensors. This was then used to input an relative "intent" direction the AI should use for the attack trajectory. I then combined all that with a custom physics PID controller I wrote a while back to make attacks apply forces to the attackers and defenders bodies. </p>
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_919.webm" type="video/mp4"></video>
        </div>
        <p>Next I started creating a modular attack system using scriptable objects to eventually create hotswappable skills/attacks that can be used by the AI and Player controllers. Custom Inspectors will be used to allow technical artists to easily create different attack patterns and tie them to animations/vfx/audio/ect.</p> 
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_921.webm" type="video/mp4"></video>
        </div>
        <p>The benifits of my custom PID controller before knockup animation states were made.</p>
        <div class="video_thing">
            <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_923.webm" type="video/mp4"></video>
        </div>
    design:
      columns: '1'
  - block: collection
    id: featured2
    content:
      title: All CR Prototypes
      subtitle: Here are some of the bigger prototypes I worked on during the development of  Corrupted Realms
      text: '' # |- {{< gallery album="demo" >}}
      filters:
        tag: CorruptedRealms
        featured_only: false
    design:
      columns: '1'
      view: card # card, list, showcase, compact
---

