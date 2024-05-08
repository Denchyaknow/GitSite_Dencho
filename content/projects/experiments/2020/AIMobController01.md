---
title: AI Mob Controller [01]
subtitle: My first try at making a dynamic AI designed for XR combat
date: 2020-02-18
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Experiment", "AI", "Combat", "Physics", "Unity"]
categories: ["2020"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>The goal of this experiment was to learn what it takes to create an AI that operates within perspective of a XRPlayerControllers camera view.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_414.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>First I wrote my own PID controller to control a Drones Rigidbody via physics to match a point in world space.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_414.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_417.webm" type="video/mp4"></video>
</div>

<p>Adjusting the variables allowed to to appear more smooth and animated.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_420.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_423.webm" type="video/mp4"></video>
</div>

<p>Different properties can lead to different behaviors.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_426.webm" type="video/mp4"></video>
</div>

<p>Now we give it a gun. For learning.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_407.webm" type="video/mp4"></video>
</div>

<p>Make sure it knows how to shoot. With even the recoil effecting the PID controller.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_433.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_436.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_440.webm" type="video/mp4"></video>
</div>

<p>This can get pretty chaotic but, its good to know how many bodies I can simulate at a given time when you consider theres a PID controller for each Rigidbody.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AIMobController01/XRLog_2020_443.webm" type="video/mp4"></video>
</div>