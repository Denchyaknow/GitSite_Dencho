---
title: Corrupted Realms
subtitle: A MMORPG game that lives on the BlockChain
date: 2022-10-22
type: post
reading_time: false
profile: false
commentable: true
draft: false
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

| Feature         | Description |
|--------------------------|-------------|
| **Invector Character System**     | A quick start to basic combat, but unacceptable for production. |
| **Better Combat**     | The initial state of combat in the game was subpar at best. |

#### Invector Woes

<p>I'm sure the Invector SDK is usable for a lot of projects. However I have never been more displeased by the code quality in the SDK. It makes me want to throw up and if I could go back to the start of development I would strongly recommend against using it. I ended reverse engineering parts of their character components so that performance would increase by 80%+ during stress testing. This is why it's not recommended to handle null or distance checks every frame. Shame shame.</p>

#### Extending Combat

<p>I started by overriding attack functions to tie into a custom sensor I made that detects other mob sensors. This was then used to input an relative "intent" direction the AI should use for the attack trajectory. I then combined all that with a custom physics PID controller I wrote a while back to make attacks apply forces to the attackers and defenders bodies. </p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CorruptedRealms/XRLog_2022_919.webm" type="video/mp4"></video>
</div>
