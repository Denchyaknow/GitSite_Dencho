---
title: Crypto Comedy Club
subtitle: My first contract working with the blockchain
date: 2022-01-05
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Experiment", "VR", "XR", "InverseKinematics", "Networking", "ReadyPlayerMe", "BlockChain", "Physics", "Unity", "Hands"]
categories: ["2022"] # display at the top of a page alongside a page’s metadata
# featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>Contracted out by a small team with plans to launch a Comedy Club in the Metaverse tied to custom NFT metadata and the $LOL token.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_863_1.webm" type="video/mp4"></video>
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

<p>Due to an NDA im not legally allowed to show the NFT portion of this project.</p>

#### The BlockChain

<p>Implementing the blockchain took some work, however at the time we got it working due to an SDK called Moralis that was coming out at the time. Token and NFT transactions were able to take place using the connected Web3 wallet.</p>

<p>One of the main features is being able to hop into a theatre and watch a comedian perform a live or recorded session with your friends.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_857.webm" type="video/mp4"></video>
</div>

#### Physics Based Hand-Tracked Posing

<p>One of the main problems with HandTracking is the immersion break a user experiences when they reach out to grab a virtual object. Usually the virtual hands that mimic the real world hands end up clipping through the object the user is grabbing. This is my attempt to fix that.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2021_856.webm" type="video/mp4"></video>
</div>

<p>During my time at CCC I prototyped procedural hand poses when grabbing things with pure hand tracking. Each fingers Inverse Kinematic system is programmed to bend until a collider is detected.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2021_858.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_859_1.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_859_2.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_859_3.webm" type="video/mp4"></video>
</div>

#### Working with ReadyPlayerMe Avatars

<p>The final PlayerController looked something like this with a live RPM Avatar.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_864.webm" type="video/mp4"></video>
</div>


<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_863_1.webm" type="video/mp4"></video>
</div>

<p>With both Hand and Controller tracked interaction!</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_863_2.webm" type="video/mp4"></video>
</div>

<p>The UI eventually worked well enough.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_866.webm" type="video/mp4"></video>
</div>

<p>Good enough to test out Peer2Peer Networking for the first time!</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_868.webm" type="video/mp4"></video>
</div>

<p>However there were some bugs involving Physics that didn't go well over the network.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2022_869.webm" type="video/mp4"></video>
</div>

#### Audience Taming

<p>Stress testing remote player count. Turns out even low quality avatars were such a big performance hit.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2021_846.webm" type="video/mp4"></video>
</div>

<p>So I just used voxelized avatars for the audience which solved the performance hit from a full house.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/CryptoComedyClub/XRLog_2021_848.webm" type="video/mp4"></video>
</div>
