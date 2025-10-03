---
title: XR Color Picker
subtitle: An AR-friendly half-circle color wheel that anticipates user input for smooth color selection.
date: 2025-04-21
type: post
reading_time: false
profile: false
commentable: true
draft: false
featured: true
private: false
tags: ["XR", "AR", "Unity", "UI", "UX", "HandTracking"]
categories: ["Contracts", "2025"]
---

<div class="video_thing"> <video muted autoplay="" name="media" loop=""> <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRColorPicker/XRLog_2025_XRColorPicker_0.webm" type="video/mp4"> </video> </div>

<p>In a recent AR project, I was tasked to develop a custom **XR color picker** – essentially a half-circle color wheel UI to let users choose colors directly in augmented reality. This feature was challenging to implement because of strict constraints in the project’s codebase, but it resulted in a highly intuitive tool. The picker presents a broad gradient of colors in a semi-circular format that fits nicely into an AR interface (and it can just as easily be used in VR).</p>  <!--more--> 

<div class="video_thing"> <video muted autoplay="" name="media" loop=""> <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRColorPicker/XRLog_2025_XRColorPicker_1.webm" type="video/mp4"> </video> </div>

<p>In the video above, you can see the color picker in action. The user drags a selection marker around the half-circle spectrum, and the chosen color updates continuously.</p>

<!--p>Notice that even when the pointer strays slightly outside the wheel’s bounds, the picker still responds smoothly – a crucial UX improvement for AR where precise finger alignment is difficult.</p--> 

<!--p>The next video demonstrates this UX improvement. Even when the user’s pointer (finger) moves outside the semi-circular palette, the selection dot remains clamped to the wheel’s edge and the color continues updating without interruption.</p--> 

<div class="video_thing"> <video muted autoplay="" name="media" loop=""> <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRColorPicker/XRLog_2025_ColorPicker_1.webm" type="video/mp4"> </video> </div> 


<p>A bug I ended up face-planting during development was the fact that interacting with the color picker requires the user the pinch, which in turn was also the input action needed to draw. This caused us to patch our existing input controllers to make sure something like this did not happen in the future.</p> 

<div class="video_thing"> <video muted autoplay="" name="media" loop=""> <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRColorPicker/XRLog_2025_XRColorPicker_Bug_0.webm" type="video/mp4"> </video> </div>


<p>I also constrained the movement of the selection indicator to make interaction more predictable. As the user drags the pointer around, it is mathematically **clamped to the circular path** of the wheel. Even if the hand motion isn’t perfectly steady (common in AR), the system interprets the movement primarily by its angular direction relative to the wheel’s center. In other words, the picker bases the color on the angle of your input rather than the exact touch position. This angle-based approach helps “read” the user’s intention – ensuring that even if your finger is a bit off-target in 3D space, you still get the color you meant to select. This took quite a bit of math for calculating a a normal offset.</p> 

<div class="video_thing"> <video muted autoplay="" name="media" loop=""> <source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/XRColorPicker/XRLog_2025_XRColorPicker_Math.webm" type="video/mp4"> </video> </div>
