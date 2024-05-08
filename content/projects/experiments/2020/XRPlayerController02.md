---
title: XR Player Controller [02]
subtitle: My second attempt at making full body avatar controller for the XR Player.
date: 2020-02-10
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Experiment", "VR", "XR", "InverseKinematics", "UMA", "Physics", "Unity"]
categories: ["2020"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---
<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_076.webm" type="video/mp4"></video>
</div>

<!--more-->

## Devices tested:
- Oculus CV1
- Oculus Quest 1

<!-- Technologies Used -->
## Technologies used:
- Vroid SDK (Avatars)
- Oculus VR SDK
- UnityXR SDK

<p>This was my second attempt at a XR Player Controller. My main goal here was to make sure I can modularize components while solidifying most of the prototype code.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_079.webm" type="video/mp4"></video>
</div>

<p>The Avatar was home made this time using a base Vroid from Vroid Studio and Decimating it in Blender for low poly testing.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_083.webm" type="video/mp4"></video>
</div>

<p>I wrote the Grabbable components you see here, in order to make it work with physics.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_086.webm" type="video/mp4"></video>
</div>

<p>Held hand poses still need some work.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_092.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_095.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_098.webm" type="video/mp4"></video>
</div>

<p>Testing some facial blendshapes out.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_073.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_113.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_144.webm" type="video/mp4"></video>
</div>

<p>Jumping still needs work.</p>

<div class="video_thing">
    <video muted autoplay="" name="media1" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_052.webm" type="video/mp4"></video>
</div>

<p>HandTracking was a complete failure as different avatar rigs have skeleton bones that use a different axis orientation. So one can not simply match up rotations 1:1 unless all bones use the same orientation axis.</p>

<div class="video_thing">
    <video muted autoplay="" name="media1" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController02/XRLog_2020_050.webm" type="video/mp4"></video>
</div>
