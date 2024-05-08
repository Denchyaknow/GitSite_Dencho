---
title: Dynamic Collider System
subtitle: Use physics properties like velocity to dynamically make adjustments to a collider
date: 2021-05-05
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Experiment", "VR", "XR", "Unity", "Combat", "Physics"]
categories: ["2021"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>Colliders that transform with Physics.</p> 

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DynamicColliderSystem/XRLog_2021_764.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>The goal of this system was to make hit events more generous relative to the movement of the rigidbody attached to the HurtBox.</p> 

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DynamicColliderSystem/XRLog_2021_762.webm" type="video/mp4"></video>
</div>

<p>This basically works as a Melee auto aim for a XR perspective. If the player thrusts a knife forward sometime VR depth can take getting used to, this makes it easier for players to hit something that might be a few inches father then perceived.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DynamicColliderSystem/XRLog_2021_766.webm" type="video/mp4"></video>
</div>

<p>It actually works out pretty well, and I wrote it to be well performant. Just attach to a meshs child collider (box type) that has a rigidbody.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DynamicColliderSystem/XRLog_2021_764.webm" type="video/mp4"></video>
</div>
