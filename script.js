window.onload = function () {
    "use strict";
    var video = document.getElementById("treehouse-video"),
        playButton = document.getElementById("play"),
        fullScreenButton = document.getElementById("full-screen"),
        volume = document.getElementById("volume"),
        progressBar = document.getElementById("progress-bar"),
        cTime = document.getElementById("currentTime"),
        dTime = document.getElementById("durationTime"),
        videoContainer = document.getElementById("video-container");
    
        //Add video duration
    video.addEventListener("timeupdate", function () {
        var dTime = document.getElementById("durationTime"),
            minutes = Math.floor(video.duration / 60),
            seconds = Math.floor(video.duration - minutes * 60);
        dTime.innerHTML = (minutes + ":" + seconds);
    });
    
    //Set initial current time and duration time
    cTime.innerHTML = "0:00" + " / " + Math.floor(video.currentTime);
    dTime.innerHTML = ":" + Math.floor(video.duration);
    
    //Event listener for the play/pause button
    playButton.addEventListener("click", function () {
        if (video.paused === true) {
            // Play the video
            video.play();
            // Update the button icon to 'Pause'
            playButton.innerHTML = '<img src="icons/pause-icon.png"/>';
        } else {
            // Pause the video
            video.pause();
            // Update the button icon to 'Play'
            playButton.innerHTML = '<img src="icons/play-icon.png"/>';
        }
	});
    
    //Event Listener for seeking
    video.addEventListener("seeking", function () {
        playButton.innerHTML = '<img src="icons/play-icon.png"/>';
    });

    video.addEventListener("seeked", function () {
        playButton.innerHTML = '<img src="icons/pause-icon.png"/>';
    });
    
    //Event listening for the full screen button
	fullScreenButton.addEventListener("click", function () {
		//var vidcontainer = document.getElementById("video-container");
        if (document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
            // exit full screen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            // go full screen
            if (video.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                videoContainer.mozRequestFullScreen();
            } else if (video.msRequestFullscreen) {
                videoContainer.msRequestFullscreen();
            }
            fullScreenButton.innerHTML = '<img src="icons/fullscreen-icon.png"/>';
        }
	});
    
    //Progress bar
    video.addEventListener('timeupdate', function (e) {
        var value = (100 / video.duration) * video.currentTime;
        progressBar.value = value;
    });
    
    //Progress
    progressBar.addEventListener('click', function (e) {
        var percent = e.offsetX * this.max / this.offsetWidth;
        video.currentTime = video.duration * (percent / 100);
    });
    
    //Display current time
    video.addEventListener('timeupdate', function () {
        var cTime = document.getElementById("currentTime"),
            minutes = Math.floor(video.currentTime / 60),
            seconds = Math.floor(video.currentTime - minutes * 60),
            x = minutes < 10 ? "0" + minutes + ":" : minutes,
            y = seconds < 10 ? "0" + seconds : seconds;
        cTime.innerHTML = (x + y + " " + "/ ");
    });
    
    
    // Volume Controls - Toggle on/off
    volume.addEventListener('click', function () {
        if (video.muted === false) {
            video.muted = true;
            volume.innerHTML = '<img src="icons/volume-off-icon.png"/>';
        } else {
            video.muted = false;
            volume.innerHTML = '<img src="icons/volume-on-icon.png"/>';
        }
    });
    
    function startHighlight(startID) {
        var highlight = document.getElementById(startID).classList;
        highlight.add('highlight');
    }

	function endHighlight(endID) {
        var highlight = document.getElementById(endID).classList;
        highlight.remove('highlight');
    }

	video.addEventListener('timeupdate', function () {
        var time = video.currentTime;
        
        if (time > 0.00 && time < 4.13) {
            startHighlight('highlight1');
        } else {
            endHighlight('highlight1');
        }
        if (time >= 4.13 && time < 7.535) {
            startHighlight('highlight2');
        } else {
            endHighlight('highlight2');
        }
        if (time >= 7.535 && time < 11.27) {
            startHighlight('highlight3');
        } else {
            endHighlight('highlight3');
        }
        if (time >= 11.27 && time < 13.96) {
            startHighlight('highlight4');
        } else {
            endHighlight('highlight4');
        }
        if (time >= 13.96 && time < 17.94) {
            startHighlight('highlight5');
        } else {
            endHighlight('highlight5');
        }
        if (time >= 17.94 && time < 22.37) {
            startHighlight('highlight6');
        } else {
            endHighlight('highlight6');
        }
        if (time >= 22.37 && time < 26.88) {
            startHighlight('highlight7');
        } else {
            endHighlight('highlight7');
        }
        if (time >= 26.88 && time < 30.92) {
            startHighlight('highlight8');
        } else {
            endHighlight('highlight8');
        }
        if (time >= 32.100 && time < 34.730) {
            startHighlight('highlight9');
        } else {
            endHighlight('highlight9');
        }
        if (time >= 34.730 && time < 39.430) {
            startHighlight('highlight10');
        } else {
            endHighlight('highlight10');
        }
        if (time >= 39.430 && time < 41.190) {
            startHighlight('highlight11');
        } else {
            endHighlight('highlight11');
        }
        if (time >= 42.350 && time < 46.300) {
            startHighlight('highlight12');
        } else {
            endHighlight('highlight12');
        }
        if (time >= 46.300 && time < 49.270) {
            startHighlight('highlight13');
        } else {
            endHighlight('highlight13');
        }
        if (time >= 49.270 && time < 53.760) {
            startHighlight('highlight14');
        } else {
            endHighlight('highlight14');
        }
        if (time >= 53.760 && time < 57.780) {
            startHighlight('highlight15');
        } else {
            endHighlight('highlight15');
        }
        if (time >= 57.780 && time < 59.85) {
            startHighlight('highlight16');
        } else {
            endHighlight('highlight16');
        }
    });
};








































