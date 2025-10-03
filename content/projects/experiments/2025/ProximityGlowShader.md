---
title: Proximity Glow Shader
subtitle: A Shader Graph effect that adds a dynamic glow when objects or UI elements get close.
date: 2025-02-28
type: post
reading_time: false
profile: false
commentable: true
draft: false
featured: true
private: false
tags: ["ShaderGraph", "Unity", "UI", "XR", "AR", "VisualFX"]
categories: ["Experiments", "2025"]
---

<p>The **Proximity Glow Shader** is a Unity Shader Graph experiment designed to make objects glow dynamically based on their distance to a target. </p>

<div class="video_thing">
  <video muted autoplay="" name="media" loop="">
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/ProximityGlowShader/XRLog_2025_ProximityGlowShader_0.webm" type="video/mp4">
  </video>
</div> <!--more-->

<p>The Idea is a universal shadr that allows you to create glowing highlights around world spaced UI buttons, in-world sprites, or flat 3D planes whenever something gets close to them. It’s a simple but effective technique for helping the user to guage how close an input is to interacting with an object.</p>

![alt text](../../../../assets/media/projects/ProximityGlowShader/Pointing_TabButton.png)

<!--p><img src="../../../../assets/media/projects/ProximityGlowShader/Pointing_TabButton.png" alt="Pointing Tab Button mockup"></p-->

<p>In practice, this allows you to create glowing highlights around UI buttons, in-world sprites, or flat 3D planes whenever something gets close to them. It’s a simple but effective technique for drawing a user’s attention without cluttering the scene with extra geometry or VFX particles.</p>

<div class="video_thing">
  <video muted autoplay="" name="media" loop="">
    <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/ProximityGlowShader/XRLog_2025_ProximityGlowShader_1.webm" type="video/mp4">
  </video>
</div>

<p>By using the UI stencil pipeline, the shader properly respects Unity’s UI rendering order. This means you can integrate it into menus, HUD overlays, or AR interaction panels while still working seamlessly with 3D world elements. The glow intensity and radius are controlled by distance math inside Shader Graph, making it performant and highly flexible.</p>

<p>This shader started as a quick experiment but quickly became a handy tool for AR/VR projects where subtle, proximity-based feedback is key to keeping interfaces readable and interactive.</p>
