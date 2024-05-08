---
title: XR Bridge System
subtitle: Procedural bridges spawning in a cool way
date: 2021-04-15
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Experiment", "VR", "XR", "Unity", "Physics"]
categories: ["2021"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>The goal of this experiment was to create a procedural dynamic map out of bridges and hub nodes of my own design.</p> 

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRBridgeSystem/XRLog_2021_790.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>One problem I encountered was during the Spawning/Despawning of the bridges, framerate would drop on the Quest1 due to performance issues with colliders moving over time. This meant I could only make bridges so long before frames would skip.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRBridgeSystem/XRLog_2021_792.webm" type="video/mp4"></video>
</div>

<p>It worked well in theory but, in practice it's not that feasible on a low powered device like the Quest1.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRBridgeSystem/XRLog_2021_850.webm" type="video/mp4"></video>
</div>
