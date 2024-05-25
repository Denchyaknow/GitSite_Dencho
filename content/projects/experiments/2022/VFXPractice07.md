---
title: VFX Practice [07]
subtitle: Fun with Shadergraph and VFXgraph
date: 2023-02-10
type: post
reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["VFX", "Particles", "Unity", "Shaders", "Rhythm"]
categories: ["Experiments", "2022"] # display at the top of a page alongside a page’s metadata
featured: false # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---
<p>A small experiment to create a reactive shadergraph with exposed properties that a custom controller can use to make the shader react to the beat of an audio clip.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/VFXPractice07/XRLog_2021_768.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>And a VFXGraph that controls particles to move along an array of world points over time. In this case I calculated a Hexagons orientation and size from a cells center position, then fed each corner to the VFXGraph via my custom tool.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/VFXPractice07/XRLog_2022_879.webm" type="video/mp4"></video>
</div>
