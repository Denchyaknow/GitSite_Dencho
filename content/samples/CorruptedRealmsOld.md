---
title: Corrupted Realms2
subtitle: A MMORPG game that lives on the BlockChain
date: 2022-10-22
type: post
reading_time: false
profile: false
commentable: true
draft: true
private: false # hide page in search results
tags: ["Contract", "EditorTool", "Unity", "Web3", "NFT", "Automation", "C#"]
categories: ["2022"] # display at the top of a page alongside a page’s metadata
featured: false # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---
<!--TODO: Add a function or 2 from the tools inspector code and snap a pic of the custom inspector-->

<p>A startup I worked for wanted a full blown MMORPG. Here is some of the work I did that im allowed to show.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_897.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>This is one of my earliest projects involving Web3, at the time (2022) there was but a handful of blockchain SDKs that were compatible with Unity and C#. On top of all the Web3 functionality part of my job was to refine the combat and art workflow for maps.</p>

#### I am a front-end programmer

<p>I am not a designer, so the visuals you see were created before the team's designer provided me with textures for production. However, it was my responsibility to set up the UI components and integrate them with the game's logic.</p>

<p>The game is currently in development and I am not allowed to show the current state of the game. However, I can show some of the work I did on the game that is not under NDA.</p>

| Technologies         | Description |
|--------------------------|-------------|
| ****     | A quick start to basic combat, but unacceptable for production. |
| **Invector Character System**     | A quick start to basic combat, but unacceptable for production. |
| **Combat Extensions**     | The initial state of combat in the game was subpar at best. I performed surgery to the SDKs source code in a attempt at more modern combat. |
| **Gaia**     | I used Gaia to generate different land samples of quality and size to that we could acheive the biggest land possible for the most amount of cells.  |
| **AssetBundles**     |  Using addressables I created a assetbundle workflow for Item and Character assets.  |


#### Creating a stereoscopic 3D Web3 Map

<p>This was basically my first prototype of a 3D map using such a big terrain (over 200k square meters). Lookout for seams in the Terrain. I combined custom runtime controllers with a custom Map system the client had me make a few months earlier.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_929.webm" type="video/mp4"></video>
</div>
<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_931.webm" type="video/mp4"></video>
</div>

#### NFT Generation from Terrain Grid Data




#### UI Prototypes for NFTs

<p>This took a few months to make, as I had to make sure multiple Web3 systems was working with out smart contract thats live on the testnet. This is the initial state of the Map UI before the Web3 integration.</p>

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
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_945.webm" type="video/mp4"></video>
</div>


<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_947.webm" type="video/mp4"></video>
</div>


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
