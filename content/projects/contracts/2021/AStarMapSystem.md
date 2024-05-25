---
title: A* Map System
subtitle: A custom map system that uses the A* algorithm for calculating the best path to take
date: 2021-01-20
type: post

reading_time: false
profile: false
commentable: true
draft: false
private: false # hide page in search results
tags: ["EditorTools", "A*", "Unity"]
categories: ["Contracts", "2021"] # display at the top of a page alongside a page’s metadata
featured: true # a page can be displayed in the Featured block on the homepage. This is useful for sticky, announcement blog posts or selected publications etc.
---

<p>Contracted to make a Custom A* Map System.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AStarMapSystem/XRLog_2021_683.webm" type="video/mp4"></video>
</div>

<!--more-->

<!--Link To Repo Here-->

<p>The client requested a Custom Hex Tile Map System that had Methods to calculate the best path to take. It needed to be modular and flexible with any map size, and calculate pathing using an asynchronous pattern.</p>

### The A* Algorithm

<p>The A* (pronounced “A-star”) algorithm is a powerful pathfinding technique used in various fields of computer science. It offers completeness, optimality, and optimal efficiency.</p>

- A* is a graph traversal and pathfinding algorithm.
- Given a weighted graph, a source node, and a goal node, A* finds the shortest path (with respect to the given weights) from the source to the goal.
- It evaluates points using a heuristic value (also known as the H score), which estimates the distance from a node to the goal.
- A* combines both the movement cost (from the current point to its neighbors) and the heuristic value to guide its search.

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AStarMapSystem/XRLog_2021_685.webm" type="video/mp4"></video>
</div>

<p>It even came with a Custom Editor Tool I made to help simulate the pathing in and outside of PlayMode.</p>

<div class="video_thing">
    <video muted autoplay="" name="media" loop=""><source src="https://raw.githack.com/Denchyaknow/GitSite_Dencho/Develop/assets/media/projects/AStarMapSystem/XRLog_2021_687.webm" type="video/mp4"></video>
</div>