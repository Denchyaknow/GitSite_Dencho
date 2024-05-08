---
title: XR Chemistry Framework
subtitle: Contracted to create a Proof of concept prototype for a Chemistry learning framework for a School District
date: 2020-01-10
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Contract", "VR", "XR", "Particles", "Unity"]
categories: ["2020"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>I was contacted and contracted out by a School District Manager looking for ways to Adapt XR as a means for kids to learn remotely in a more immersive way.</p>

<div class="video_thing">
    <video muted autoplay="" name="media1" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_400.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>The things I can show from this project are limited due to an NDA</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_391.webm" type="video/mp4"></video>
</div>

<p>The main goal of this prototype was to create a UI capable of spawning Chemistry related instances of Molecule models and allow interaction with them for lecturing purposes in a Teacher to Student relationship.</p>

<div class="video_thing">
    <video muted autoplay="" name="media1" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_394.webm" type="video/mp4"></video>
</div>

<p>As the project was already 12 months into development at the time I joined, I had to work well with the existing team to know where to put my code and to make sure there were no conflicts with existing UX components</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_397.webm" type="video/mp4"></video>
</div>

<p>Prototyping a way you can move molecules with hand tracking, even under low lighting.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_559.webm" type="video/mp4"></video>
</div>

<p>The idea was that if a hand pinches near the center of a molecule group, the molecule with use the relative index finger as a Anchor with a Kinematic PID controller handling the positioning.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_563.webm" type="video/mp4"></video>
</div>

<p>First I start with a Transform Marker in the form of a filling sprite, that acts as the target position for the molecule.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_570.webm" type="video/mp4"></video>
</div>

<p>Now just a simple controller that takes account of the distance between the current and target points. Its always fun to see how well I can write something the first time.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_573.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_576.webm" type="video/mp4"></video>
</div>

<p>Adding a Highlight to show when a molecule is a valid target to grab.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_596.webm" type="video/mp4"></video>
</div>

<p>Then I made similar control method for orientation</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_599.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_602.webm" type="video/mp4"></video>
</div>

<p>The UX needs to be cleaned up a bit, but all in all it was a success.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRChemistryFramework/XRLog_2020_605.webm" type="video/mp4"></video>
</div>