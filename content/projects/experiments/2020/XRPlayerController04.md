---
title: XR Player Controller [04]
subtitle: Version 4 of my FUll body XR Player Controller
date: 2020-04-10
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Experiment", "VR", "XR", "InverseKinematics", "VRoid", "Physics", "Unity", "Hands"]
categories: ["2020"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>Refining one of the first Prototypes to exist (in 2020) to contain a full body avatar and finger tracking.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_340.webm" type="video/mp4"></video>
</div>

<!--more-->

## Devices tested:
- Oculus CV1
- Oculus Quest 1

<!-- Technologies Used -->
## Technologies used:
- VRoid SDK (Avatars)
- OculusVR SDK
- UnityXR SDK

<p>I was one of the first developers in the industry to achieve fullbody avatars working with finger tracking. Once you get past the hurdle of different bone orientations the rest is pretty simple, I was just a dev with just enough free time to actually do it.</p>

## Skeletal Mesh Orientation Mismatch (S.M.O.M.)
<p>S.M.O.M. happens when one mesh skeletal bone structure has incompatible orientations with another set of bones, leading to misalignment when trying to animate or manipulate them consistently. I am no longer afraid of SMOM and I am going to use one of the most common Avatars available to developers, Unity-Chan</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_337.webm" type="video/mp4"></video>
</div>

<p>Using this formula here I was able to avoid this issue, however the custom tool I made requires a basic understanding of how Quaternions work.</p>

<!--TODO: Show Math Formula and Code Snippet here-->

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_340.webm" type="video/mp4"></video>
</div>

<p>Testing UI Ray Pointers with Finger Tracking.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_349.webm" type="video/mp4"></video>
</div>


<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_353.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_356.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_359.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_362.webm" type="video/mp4"></video>
</div>

<p>I wrote an algorithm that tracks and predicts the tracked hands position and velocity. My goal was to Handle the case of when Hands overlap causing hand tracking to be lost due to occlusion. This algorithm understands when the Hands become occluded and attempts to predict and move the hands relative to their original trajectory at the time of occlusion.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_367.webm" type="video/mp4"></video>
</div>

<p>You can see that since I am simply lerping the predicted target IK position of each hand, there is no teleporting going on when hand tracking resumes from being occluded.</p>

<p>When Hand tracking quality becomes low, mapping of the fingers halt and then blend to the target orientations once tracking quality is high again.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_370.webm" type="video/mp4"></video>
</div>

<p>Testing relations with Physics based Grabbables when a Button magically resets an objects transform.</p> 

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_373.webm" type="video/mp4"></video>
</div>

<p>When this Physics button is pressed the Cubes Reset.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_376.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_379.webm" type="video/mp4"></video>
</div>

<p>Nothing much to take from this other than knowing the rigidbody wont explode the Players rigidbody in some way.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_382.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_385.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_388.webm" type="video/mp4"></video>
</div>

<p>There were a few setup issues with the relative Rig height. Nothing I can't handle.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_343.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRPlayerController04/XRLog_2020_346.webm" type="video/mp4"></video>
</div>
