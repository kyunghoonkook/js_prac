window.addEventListener("load", function () {
    var myVideo = document.querySelector("#myvideo");
    var playPause = document.querySelector(".btn");

    playPause.addEventListener("click", function () {
        if (myVideo.paused) {
            myVideo.play();
            this.src = "images/pause.png";
        }
        else {
            myVideo.pause();
            this.src = "images/play.png";
        }
    })
})

