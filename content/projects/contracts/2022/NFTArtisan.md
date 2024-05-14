---
title: NFT Artisan
subtitle: An editor tool for Unity that allows you to create NFT media and metadata from map datatypes or other object arrays
date: 2022-02-10
type: post
reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["Contract", "EditorTool", "Unity", "Web3", "NFT", "Automation", "C#", "CorruptedRealms"]
categories: ["2022"] # display at the top of a page alongside a page’s metadata
featured: false # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---
<!--TODO: Add a function or 2 from the tools inspector code and snap a pic of the custom inspector-->

<p>This tool allowed the team to easily recreate NFT metadata and media from serialized data types in a Unity project, like an array of CellData or GameObjects.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/NFTArtisan/XRLog_2022_871.webm" type="video/mp4"></video>
</div>

<!--more-->

<p>I learned alot about the growing standard that is NFT Metadata, how its imprinted onto the block chain via a smart contract, the requirements for batch uploading NFT metadata, and even interacting with smart contracts.</p>

<p>Creating NFT media and metadata needs to be consistent in brand and format. This tool allows use to do just that after we make iterative changes to Land or NFT items in a Web3 enabled project.</p>

| Features         | Description |
|--------------------------|-------------|
| **Batch Generation**     | Capable of generating over 100,000 NFT images or videos in one session with efficient batch processing. |
| **Format Typing Support**        | Supports PNG, JPG, and MP4 formats to accommodate various NFT media requirements. |
| **Automatic Framing**  | Operates independently on its own GameObject, allowing for movement and adjustment within the scene as needed. |
| **MapManager Integration** | Utilizes the CellData array from the MapManager component to generate `metadata.json` files and media, processing each cell's data based on its position and configured settings. |
| **Recording Settings**   | Offers highly adjustable recording settings to customize recording angles, durations (for videos), and formats, while being stored on a configurable scriptable object. |
| **Scene Interaction**    | Capable of handling large scale recordings and was tested with with over 100k CellData entries in the MapManager for comprehensive map coverage. |
| **Dynamic Object Handling** | Links with an ItemDatabase or an array of Transforms to spawn instances at the recorder's location, capturing necessary Metadata and Media. |
| **Operational Versatility** | Functions both in and out of play mode, providing flexibility across different development stages. |
| **Asynchronous Code** | The main thread only haults for saving files to disk. everything else used the async C# pattern to invoke logic overtime till the array queue is exhausted. |
| **Automated Cleanup**    | Manages the cleanup of spawned instances post-recording to maintain scene integrity. |
| **Export Functionality** | Exports generated Media and Metadata to specified folders, organizing assets for efficient access and use. |

<p>The end result is 2 folders full of fresh ready to upload NFT Media and Metadata.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/NFTArtisan/XRLog_2022_890.webm" type="video/mp4"></video>
</div>

<p>Example of live NFTs using Metadata created from this tool.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/NFTArtisan/XRLog_2022_888.webm" type="video/mp4"></video>
</div>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/NFTArtisan/XRLog_2022_899.webm" type="video/mp4"></video>
</div>
