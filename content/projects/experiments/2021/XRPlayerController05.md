---
title: XR Player Controller [05]
subtitle: Version 5 of my FUll body XR Player Controller
date: 2021-05-15
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Experiment", "VR", "XR", "InverseKinematics", "ReadyPlayerMe", "VRoid", "Physics", "Unity", "Hands"]
categories: ["2021"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>Refining one of the first Prototypes to exist (in 2020) to contain a full body avatar and finger tracking.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_838.webm" type="video/mp4"></video>
</div>

<!--more-->

## Devices tested:
- Oculus Quest 1/2
- Pico 2/3

<!-- Technologies Used -->
## Technologies used:
- VRoid SDK (Avatars)
- ReadyPlayerMe SDK (Avatars)
- OculusVR SDK
- UnityXR SDK
- PicoVR SDK

<p>First thing I did this round, was fail hard at using Mechanim Animator to handle my Hand Posing. Turns out its just easier and more performant to man handle hand posing with pure C#.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_729.webm" type="video/mp4"></video>
</div>

<p>Semi working legs. Check.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_823.webm" type="video/mp4"></video>
</div>

<p>You know I had to make sure everything worked with physics. Just incase.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_828.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_830.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_849.webm" type="video/mp4"></video>
</div>

## Skeletal Mesh Orientation Mismatch (S.M.O.M.)
<p>S.M.O.M. happens when one mesh skeletal bone structure has incompatible orientations with another set of bones, leading to misalignment when trying to animate or manipulate them consistently.</p>

<p>You can expect to run into SMOM when using ReadyPlayerMe avatars for a full body rig.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_832.webm" type="video/mp4"></video>
</div>

<p>However, SMOM is easily defeated with the use of my custom Hand Mapper.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_840.webm" type="video/mp4"></video>
</div>

<p>The results, a full body XR controller that dynamically switches between hand and controller tracking. Not something you see often in 2021.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_836.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_838.webm" type="video/mp4"></video>
</div>

<p>And a simple voice plugin test to move the avatars facial blendshapes.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_842.webm" type="video/mp4"></video>
</div>

<p>During development, this gave me nightmares.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController05/XRLog_2021_844.webm" type="video/mp4"></video>
</div>

