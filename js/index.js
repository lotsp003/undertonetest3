function playVideo(el) {
    var videoId = el.data('video');
    var video = document.getElementById(videoId);

    if (video.paused) {
        // Play the video
        video.play();
        el.removeClass('paused').addClass('playing');
    }
    else {
        // Pause the video
        video.pause();
        el.removeClass('playing').addClass('paused');
    }
}

$(document).on('click', '.js-video-control', function(e) {
  playVideo($(this));
  e.preventDefault();
});