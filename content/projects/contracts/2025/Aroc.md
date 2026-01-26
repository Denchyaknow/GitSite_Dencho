---
title: AROC (Augmented Reality Operations Center)  
subtitle: A portable AR command-center for situational awareness and data fusion  
date: 2025-06-22  
type: post  
reading_time: false  
profile: false  
commentable: true  
draft: false  
featured: true  
private: true  
tags: ["XR", "AR", "Data Visualization"]  
categories: ["Projects", "2025"]  
---

<div class="video_thing">  
  <video muted autoplay="" name="media" loop="">  
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Drawing_3.webm" type="video/mp4">  
  </video>  
</div>

<p>Though much of the functionality is behind NDA, working on AROC pushed me into serious systems-level XR work: data fusion, platform hardening, network fallback, spatial anchoring at scale, and mission-level stability. Navigating and developing this project remains one of my proudest XR engineering efforts.</p>  <!--more--> 

<p><em>AROC</em> stands for **Augmented Reality Operations Center**, a system developed by BadVR (and via government contracts) to bring a fully immersive, spatial command-and-control interface to real-world incident operations. It’s designed to unify live sensor data, geospatial layers, and operational telemetry into one AR workspace.</p>


<p>Disclaimer: Because AROC was built under a government SBIR contract and various NDAs, I can only share snapshots and minor details of what I worked on, however this was one of the more technically intensive XR projects I’ve touched.</p>

<p>On paper, AROC lets first responders, analysts, or commanders step into a holographic “ops room” overlayed onto their real environment. Think multiple data feeds—maps, live cameras, sensor telemetry, annotations—spatially arranged in AR so you can walk around the “room.”</p>

<p>Here are some bugs and features I worked on in the AROC app, with very little context so I don't get in trouble with the goverment.</p>

<p>Whiteboard component for 2D drawing.</p>

<div class="video_thing">  
  <video muted autoplay="" name="media" loop="">  
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Drawing_4.webm" type="video/mp4">  
  </video>  
</div>

<p>Box component that impliments whiteboards for 2D drawing along a procedural 3D cube. Later on this was adapted to work with a custom Metadata loader that imported GLB meshes from streamed addressables.</p>

<div class="video_thing">  
  <video muted autoplay="" name="media" loop="">  
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Drawing_5.webm" type="video/mp4">  
  </video>  
</div>

<p>One of the trickiest engineering challenges was the synchronization and smoothing of streaming data across spatial anchors. In the field, sensor jitter, network dropouts, and anchoring drift become real problems. I worked on adaptive interpolation, failover strategies, and “ghost caching” to prevent visual artifacts or data loss during transitions. All while keeping everything synced over a custom network backend.</p>

<div style="display:flex; gap:1rem; justify-content:center; align-items:flex-start; width:100%;">
  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Drawing_1.webm" type="video/mp4">
    </video>
  </div>

  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Drawing_2.webm" type="video/mp4">
    </video>
  </div>
</div>

<p>This turned out some of the most painful debugging I ever had to do as I created custom script to detect and trigger networked drawing events. All while having to build to test networking</p>

<div style="display:flex; gap:1rem; justify-content:center; align-items:flex-start; width:100%;">
  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Debugging_0.webm" type="video/mp4">
    </video>
  </div>

  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Debugging_1.webm" type="video/mp4">
    </video>
  </div>
</div>


<div style="display:flex; gap:1rem; justify-content:center; align-items:flex-start; width:100%;">
  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Debugging_2.webm" type="video/mp4">
    </video>
  </div>

  <div style="flex:1;" class="video_thing">
    <video muted autoplay loop style="width:100%; height:auto;">
      <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AROC/XRLog_2025_AROC_Debugging_3.webm" type="video/mp4">
    </video>
  </div>
</div>



