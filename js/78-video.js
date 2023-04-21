window.addEventListener("load", function () {
    var myVideo = this.document.querySelector("#myvideo");
    var playPause = this.document.querySelector(".play");
    var stopBtn = this.document.querySelector(".stop");
    var rewardBtn = this.document.querySelector(".reward");
    var backBtn = this.document.querySelector(".back");

    //playPause 버튼을 클릭하면 비디오가 재생되도록
    playPause.addEventListener("click", function () {
        if (myVideo.paused) {
            myVideo.play();
            document.querySelector(".play>a>img").src = "images/pause.png";
        }
        else {
            myVideo.pause();
            document.querySelector(".play>a>img").src = "images/play.png";
        }
    })
    //stopBtn을 클릭하면 비디오 중지
    stopBtn.addEventListener("click", function () {
        myVideo.pause();
        myVideo.currentTime = 0;
    })

    //빨리감기
    rewardBtn.addEventListener("click", function () {
        myVideo.currentTime += 5;
    })

    backBtn.addEventListener("click", function () {
        myVideo.currentTime -= 5;
    })
})