window.addEventListener("load", function () {
    //code를 보여줄 input
    var code = this.document.querySelector("#code");
    //아이콘
    var icon = this.document.querySelector(".map");
    // icon.style.left = "10px";
    // icon.style.top = "10px";

    var xPos = 0;
    var yPos = 0;

    // console.log(xPos, yPos);
    //스타일의 값을 받아올때 사용
    //단 스크립트에서 값을 설정할 경우만
    // console.log(icon.style.cssText);

    //defaultView -> window
    //getComputerStyle("선택자") css 값을 가진 대상
    //getPropertyValue("속성") ->
    // console.log(this.document.defaultView.getComputedStyle(icon).getPropertyValue("left"));

    // 문서에서 키보드를 누르면 현재 눌려진 키에 대한 정보를 받아서 위로 가는 화살표 위를 누르면 아이콘이 위로 10px 아래를 누르면 아래로10px씩 이동

    this.document.addEventListener("keydown", function (e) {
        console.log(e.key, e.keyCodem, e.code);
        code.value = e.key;
        switch (e.key) {
            case "ArrowUp":
                if (yPos > 0) {
                    yPos -= 10;
                }
                else{
                    yPos = 370;
                }
                // console.log("up");
                break;
            case "ArrowDown":
                if (yPos < 370) {
                    yPos += 10;
                }
                else{
                    yPos = 0;
                }
                // console.log("down");
                break;
            case "ArrowLeft":
                if (xPos > 0) {
                    xPos -= 10;
                }
                else{
                    xPos = 570;
                }
                // console.log("left");
                break;
            case "ArrowRight":
                if (xPos < 570) {
                    xPos += 10;
                }
                else{
                    xPos = 0;
                }
            // console.log("right");
        }
        icon.style.top = yPos + "px";
        icon.style.left = xPos + "px";
        console.log(icon.style.top, icon.style.left);
    })
})