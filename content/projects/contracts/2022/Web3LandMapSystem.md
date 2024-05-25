---
title: Web3 Land Based Map System
subtitle: An interactive map system that uses the concept of NFT Land on a hexagon grid that syncs up with a live smart contract on the blockchain
date: 2022-10-22
type: post
reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["EditorTool", "Unity", "Web3", "NFT", "Automation", "C#", "CorruptedRealms"]
categories: ["Contracts", "2022"] # display at the top of a page alongside a page’s metadata
featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---
<!--TODO: Add a function or 2 from the tools inspector code and snap a pic of the custom inspector-->

<p>Contracted by a startup to RnD and produce a working prototype of an Interactive Map with overlaying hexagonal cells and dynamic states that change based on the live NFT metadata pulled from the blockchain.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/Web3LandMapSystem/XRLog_2022_897.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>This is one of my earliest projects involving Web3, at the time (2022) there was but a handful of blockchain SDKs that were compatible with Unity and C#.</p>

<p>This Map system need to be usable in a way that it helps you setup the map, and hold live data representations synced form the blockchain.</p>

| Feature         | Description |
|--------------------------|-------------|
| **MapManager Component**     | In charge of loading terrain prefabs and settings relative to a scene Id, and contains CellData methods/data used to hold serialized data about points on the map. |
| **Custom Inspectors**        | Includes setup status among the needed controls to specify how to spawn a planar grid of cells across any number of terrains.   |
| **Automatic Serialization**  | Hooks into Unity to serialize/deserialize data with the scene upon save reloading during development. |
| **CellData Saving and Loading** | After initial setup, controls allow devs to save the current state of the maps cellData to a serialized array. During runtime upon connection to the blockchain, if supplied with a contract config, will pull the celldata bit by bit from the blockchain to override the default serialized data on the map. Only when data has been synced recently can users interact with cell states via a UI. |
| **Dynamic CellData Status**   | Upon user interaction, should display the current state of a NFTs land metadata. |
| **Additional WebGL Branch**    | WebGL support for the map. With deep link for Web3 Wallet connection. |
| **Asynchronous Code** | The main thread only haults for saving files to disk. everything else used the async C# pattern to invoke logic overtime till the array queue is exhausted. Thanks to Cysharps UniTask plugin for supporting WebGL and unifying my asynchronous logic between platforms. |
| **Frustrum Culling**    | Occlusion Culling grass and other map objects based on what the camera sees. Much like the system from ZeroDawnHorizon and other AAA titles with big maps.  |
| **AAA Cinemachine Camera System** | Uses Cinemachine, which is a popular AAA camera system part of the Unity registry that we can easily manipulate in code. |

#### Rapid Prototyping

<p>It was important to save development time by exploring adaptable plugins from github and the asset store, that might give us a head start. After testing multiple grid based map plugins, we settled on one who's source code was extendable and well documented so we can adapt the plugin to work with NFT metadata.</p>

<p>First step was to generate a map from an array of terrains, thus populating the serialized custom celldata thats compliant to the ERC-721 smart contract. Then a simple controller to navigate around the map, written from scratch using Cinemachine.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/Web3LandMapSystem/XRLog_2022_892.webm" type="video/mp4"></video>
</div>

<p>After a few months of work we had a working prototype that listed live NFT data synced from the blockchain.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/Web3LandMapSystem/XRLog_2022_899.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/Web3LandMapSystem/XRLog_2022_901.webm" type="video/mp4"></video>
</div>

<p>This was the first version of the UX for the Map controls, they were revised later on.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/Web3LandMapSystem/XRLog_2022_903.webm" type="video/mp4"></video>
</div>

<p>A GUI to compliment the Map so the user can filter out thousands of NFT metadata to find one specifically.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/Web3LandMapSystem/XRLog_2022_909.webm" type="video/mp4"></video>
</div>