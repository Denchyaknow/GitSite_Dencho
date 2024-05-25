---
title: AI Mob Controller [04]
subtitle: Fourth iteration at making a dynamic AI designed for XR combat
date: 2021-04-10
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

<p>This experiments goal was to iterate on my previous AI Controllers and refine the combat system.</p>


<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController04/XRLog_2021_771.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>I worked more on the combat skill pathing. It is now more dynamic while still using a physics PID controller to move the rigidbody via forces in additive manner.</p>

<p>Both of these mobs use the same combat system, but one is tweaked to have a shorter travel path, with drag/angulardrag over time (set by a curve and multiplier) which allows me to create something like a bulletTime attack but in realtime.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController04/XRLog_2021_779.webm" type="video/mp4"></video>
</div>

<p>This kind of system allows other physics objects to alter the pathing trajectory of the mob even while the skill is running.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController04/XRLog_2021_771.webm" type="video/mp4"></video>
</div>

<p>Even works with drone like locomotion.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController04/XRLog_2021_804.webm" type="video/mp4"></video>
</div>
