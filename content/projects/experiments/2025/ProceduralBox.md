---
title: XR Procedural Box
subtitle: A runtime-generated 3D box built for AR/VR, later evolving into real-world XRay use cases.
date: 2025-02-14
type: post
reading_time: false
profile: false
commentable: true
draft: true
featured: true
private: true
tags: ["XR", "Unity", "Procedural", "AR", "VR", "Geometry"]
categories: ["Experiments", "2025"]
---

<p>This project started as a simple experiment: generating a **procedural box mesh** entirely in code at runtime. The goal was to avoid relying on prebuilt meshes and instead give full control over dimensions, normals, and UVs directly inside Unity.</p>

<div class="video_thing"> 
  <video muted autoplay="" name="media" loop="">
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRProceduralBox/XRLog_2025_XRProceduralBox_0.webm" type="video/mp4">
  </video>
</div> <!--more--> 

<p>While humble at first glance, this procedural box became the foundation for a much larger feature later tied to **real-world XRay use cases**. Unfortunately, those details are under NDA—but the journey began here.</p>


<p>The box is created by defining vertices, triangles, and UV mappings in C#. This gives total control over the box’s size and orientation. Beyond just a static mesh, I implemented runtime adjustments—allowing the box to expand, shrink, and reconfigure itself procedurally without ever touching the Unity editor’s 3D primitives.</p>

<div class="video_thing"> 
  <video muted autoplay="" name="media" loop="">
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRProceduralBox/XRLog_2025_XRProceduralBox_1.webm" type="video/mp4">
  </video>
</div>

<p>Even at this early stage, I added surface normals and UVs so that shaders and textures would work correctly on the generated box. This ensured it could be used in more advanced visual pipelines, like XR rendering and material-based effects.</p>

<div class="video_thing"> 
  <video muted autoplay="" name="media" loop="">
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRProceduralBox/XRLog_2025_XRProceduralBox_2.webm" type="video/mp4">
  </video>
</div>

<p>While the procedural box itself may seem small, it served as the **building block for something much bigger**—a system that eventually intersected with real-world hardware and XR-based XRay visualization. Sadly, I can’t go into detail on that due to NDA restrictions, but this little procedural mesh ended up having quite a large impact.</p>

{{< gist Denchyaknow e7cdf46d45c21b45cf82c1a402cf6c7d ProceduralBox.cs >}}


<script src="https://gist.github.com/Denchyaknow/e7cdf46d45c21b45cf82c1a402cf6c7d.js"></script>