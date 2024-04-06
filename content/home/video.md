---
active: false
title: I can create just about anything
subtitle: 
widget: blank
weight: 40
design:
  columns: '1'
advanced:
  css_class: transparent
---


<div class="videobox">
  <div id="player"></div>
  <div class="videocover"></div>
</div>

<script>
  var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'zsAvdJypnj8',
          host: 'http://www.youtube-nocookie.com',//privacy mode
          playerVars: { 'controls': 0, //hide controls
                       'autohide': 1,
                       'modestbranding': 1, //hide brand
                       'showinfo': 0, //hide video info
                       'mute' : 1 //video is muted
                      },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        }
        function onPlayerReady(event) {
          goToStart(event);
        }
        function onPlayerStateChange(event) {
          var tm = player.getCurrentTime();
          if (event.data == YT.PlayerState.ENDED) {
            goToStart(event);
          }
        }
        function goToStart(event) {
          event.target.seekTo(0,1);
          player.playVideo();
        }
</script>
