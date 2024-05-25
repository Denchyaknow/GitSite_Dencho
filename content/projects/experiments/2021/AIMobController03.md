---
title: AI Mob Controller [03]
subtitle: Third iteration at making a dynamic AI designed for XR combat
date: 2021-02-10
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["AI", "Combat", "Physics", "Unity"]
categories: ["Experiments", "2021"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>This experiments goal was to iterate on my previous AI Controllers and refine the spawning and path finding algorithms.</p>


<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController03/XRLog_2021_696.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>The models were provided by free assets on the Unity Asset Store.</p>

<p>Created a Waypoint system that only allows one mob at a time to navigate to the point, the mobs automatically seek out point in a waypoint path that doesn't have its source/target points queued by another mob.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController03/XRLog_2021_688.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController03/XRLog_2021_709.webm" type="video/mp4"></video>
</div>

<p>Testing out Ragdolling system for a nonstandart mesh rig.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController03/XRLog_2021_725.webm" type="video/mp4"></video>
</div>

<p>A Combat system that animated the Rigidbody with a Physics PID Controller to traverse a dynamic generated path, with adjustable curves/properties to change up how it ride the attack path.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController03/XRLog_2021_696.webm" type="video/mp4"></video>
</div>
