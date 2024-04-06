---
title:
active: false
subtitle:
widget: blank
headless: true
weight: 30
design: 
  columns: '1'
advanced:
  css_class: video_body
---
<div class="video_box">
  <div id="video_frame"></div>
  <div class="video_cover"></div>
</div>

<!--{{% cta cta_link="https://discordapp.com/users/102797530168844288" cta_text="Contact via Discord" %}}-->
<script>
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var video_frame;
  function onYouTubeIframeAPIReady() {
    video_frame = new YT.Player('video_frame', {
          height: '740',
          width: '1080',
          videoId: 'zsAvdJypnj8',
          host: 'http://www.youtube-nocookie.com',//privacy mode
          playerVars: { 
            'autoplay': 1,
            'controls': 0, //hide controls
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
          var tm = video_frame.getCurrentTime();
          if (event.data == YT.PlayerState.ENDED) {
            console.log("ENDED");
            goToStart(event);
          }
          if(event.data == YT.PlayerState.CUED){
            console.log("CUED");
            goToStart(event);
          }

        }
        function goToStart(event) {
          event.target.seekTo(0,1);
          video_frame.playVideo();
        }
</script>
