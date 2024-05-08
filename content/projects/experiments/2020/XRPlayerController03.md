---
title: XR Player Controller [03]
subtitle: My third attempt was focused on better locomotion and hand tracking for full body avatars
date: 2020-03-10
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

<p>One of the earliest prototypes to exist at the time (2020) that I know of, to contain a full body avatar and finger tracking.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController03/XRLog_2020_201.webm" type="video/mp4"></video>
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

<p>I was one of the first developers in the industry to achieve fullbody avatars working with finger tracking. Once you get past the hurdle of different bone orientations the rest is pretty simple, I was just a dev with just enough free time to actually do it.</p>

## Skeletal Mesh Orientation Mismatch (S.M.O.M.)
<p>S.M.O.M. happens when one mesh skeletal bone structure has incompatible orientations with another set of bones, leading to misalignment when trying to animate or manipulate them consistently. It’s essential to ensure that both hand meshes follow the same bone orientation conventions to avoid issues during animation and rigging processes. However sometimes this cant be avoided when sourcing from different third parties, in this case I had trouble aligning VRoid Hand Skeleton to match with the Hand Skeleton from the OVR SDK used for hand tracking.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController03/XRLog_2020_050.webm" type="video/mp4"></video>
</div>

## Bypassing S.M.O.M.
<p>When dealing with skeletal mesh orientation mismatches between two hand skeletons, you can use a transformation formula to align their orientations. This approach allows you to transfer the orientation from one hand to another, even if they initially have different orientations.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController03/XRLog_2020_198.webm" type="video/mp4"></video>
</div>

<p>Using this formula here I was able to avoid this issue, however the custom tool I made requires a basic understanding of how Quaternions work.</p>

<!--TODO: Show Math Formula and Code Snippet here-->

<p>Using a Homemade VRoid Avatar, which uses a Universal Skeleton Armature. This is what happened when trying to sync up rotations from OVR custom hand skeleton to the VRoids hand.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController03/XRLog_2020_201.webm" type="video/mp4"></video>
</div>

<p>Locomotion Testing</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController03/XRLog_2020_213.webm" type="video/mp4"></video>
</div>

<p>Locomotion Jumping with Physics still needs work.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController03/XRLog_2020_216.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController03/XRLog_2020_222.webm" type="video/mp4"></video>
</div>
