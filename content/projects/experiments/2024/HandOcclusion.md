---
title: Depth API Hand Occlusion
subtitle: High-fidelity occlusion between real hands and virtual objects using Meta's Depth API in Passthrough AR.
date: 2025-03-12
type: post
reading_time: false
profile: false
commentable: true
draft: false
featured: true
private: true
tags: ["XR", "AR", "Unity", "Passthrough", "HandTracking", "Shader", "DepthAPI"]
categories: ["Expirements","Contracts", "2025"]
---
<p>In an XR project we used Meta’s Depth API with a custom <strong>hard occlusion</strong> shader to achieve realistic hand occlusion in AR passthrough. In practice, a user’s real hands can convincingly hide (occlude) virtual objects in the scene when they come between the user and those objects.</p>

<div class="video_thing"> <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DepthAPIHandOcclusion/XRLog_2025_Occlusion_0.webm" type="video/mp4"></video> </div> <!--more--> 

<p>In the video above, you can see the occlusion mask in action: as the user moves their hand in front of a virtual object, the object is clipped out precisely wherever the hand overlaps it.</p> 

<p>Implementing this feature in Unity wasn’t particularly difficult Meta supplies built-in occlusion shader libraries and even a Shader Graph subgraph to help integrate Depth API. The bigger challenge was the iteration cycle. At the time, Depth API occlusion only worked on-device (not in the Unity Editor), so we had to build the app to a headset for each test. This meant setting up the components and then doing a full build just to see if our changes worked, which made debugging quite tedious.</p> 

<p>To get high-quality results, we leveraged the Depth API’s **hand removal** feature – essentially telling the system to ignore the user’s actual hands in the depth occlusion stage. With the real hands removed from the depth map, we introduced our own hand and forearm models driven by Quest’s hand-tracking data. We applied a custom occlusion material (based on Meta’s provided shader) to these models, making them invisible in the scene but able to **mask out** any virtual objects behind them. In other words, the tracked hand models act as an occlusion mask wherever a hand model overlaps a virtual object, it clips that object, creating the illusion that the real hand is blocking it.</p>

<p>Here is virtual culling in action with the depth api, since its designed to use the DepthAPI and detect hard surface objects, the framework can automatically cull objects the camera is unable to see, saving a heap of performance.</p>

<div class="video_thing"> <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DepthAPIHandOcclusion/XRLog_2025_Occlusion_1.webm" type="video/mp4"></video> </div> 

<p>One practical challenge we faced was finding suitable 3D models for the occlusion hands and arms. Without a dedicated character artist, we tried multiple avatar hand/arm models to find an armature that aligned well with most users’ hand sizes and poses. We considered using Meta’s official Avatar hands, but since our client’s project was military-related, we avoided integrating the Meta Avatars SDK due to security and privacy concerns. In the end, we settled on a generic rigged hand model that provided a reasonable fit for our user base.</p> 

<p>We also experimented with the Depth API’s <strong>soft occlusion</strong> mode during development. Visually, soft occlusion looked excellent – the edges where virtual objects hide behind real objects (like the user’s hands) were much smoother and less flickery compared to hard occlusion. However, this mode came with a significant performance cost, consuming noticeably more GPU resources. In our tests, soft occlusion caused some frame rate drops on the Quest, whereas hard occlusion ran much more efficiently (as expected, since it’s the cheaper technique). Given our strict performance requirements, we decided to stick with hard occlusion for the final implementation.</p> 

<p>Here’s a quick comparison between <strong>Soft Occlusion</strong> and <strong>Hard Occlusion</strong> modes.</p>

<div style="display:flex; gap:1rem; justify-content:center; align-items:flex-start; width:100%;">
  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DepthAPIHandOcclusion/XRLog_2025_SoftOcclusion_0.webm" type="video/mp4">
    </video>
  </div>

  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/DepthAPIHandOcclusion/XRLog_2025_HardOcclusion_0.webm" type="video/mp4">
    </video>
  </div>
</div>

<p>Notice how the soft occlusion (On the left) produces smoother, less jagged edges around the hand compared to hard occlusion (On the rigth) – at the cost of some GPU overhead.</p> 

<p>Ultimately, our hard occlusion solution delivered the desired effect: virtual elements seamlessly disappear behind the user’s real hands without a performance hit. This robust occlusion system runs fast and adds a big dose of realism to the mixed reality experience. The final video below shows the hard occlusion effect in action, demonstrating how the user’s hand (with the invisible occlusion material) completely hides the virtual content behind it.</p> 
