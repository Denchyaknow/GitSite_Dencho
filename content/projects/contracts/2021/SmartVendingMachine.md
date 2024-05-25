---
title: Inverse Kinematic Vending Machine
subtitle: A vending machine with a robot arm that adjusts to the players height
date: 2021-01-10
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["VR", "XR", "Animation", "Physics", "Unity"]
categories: ["Contracts", "2021"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---
<p>Contracted to make a "Smart" Vending Machine feature designed to work with VR Players.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/SmartVendingMachine/XRLog_2021_671.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>NDA Prevents me from showing the UI or final outcome of the feature.</p>

<p>The goal was to create a Vending Machine that had a would automatically adjust to the VR Players Height via a Robot Arm controlled by Inverse Kinematics.</p>

<p>The teams technical artist provided the Vending Machine mesh with armature for the screens housing. The first step was connect the bones to a simple Inverse Kinematic script.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/SmartVendingMachine/XRLog_2021_657.webm" type="video/mp4"></video>
</div>

<p>Next I see how it targets the Players Head transform.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/SmartVendingMachine/XRLog_2021_664.webm" type="video/mp4"></video>
</div>

<p>With a bit of some C# magic, the Arm for the screen will extend out to any nearby Players Head transform. When the target is out of range for x+ seconds, the screen will retract back into the machine.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/SmartVendingMachine/XRLog_2021_671.webm" type="video/mp4"></video>
</div>


<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/SmartVendingMachine/XRLog_2021_673.webm" type="video/mp4"></video>
</div>

