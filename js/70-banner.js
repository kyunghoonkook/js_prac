window.onload = function () {
    //각 버튼 변수로 등록
    var btn1 = document.querySelector(".btn1");
    var btn2 = document.querySelector(".btn2");
    var btn3 = document.querySelector(".btn3");
    var btn4 = document.querySelector(".btn4");

    var myImg = document.querySelector(".bannerImg");
    //변경되어야할 이미 정보를 배열에 저장하기
    var imgArr = ["main_banner1", "main_banner2", "main_banner3", "main_banner4"]

    btn1.onclick = function () {
        myImg.setAttribute("src", `images/${imgArr[0]}.jpg`);
        this.style.backgroundColor = "pink";
    }

    //버튼을 클릭하면 myImg의 src정보를 imgArr의 2번째방에 있는 이미지로 변경
    btn2.onclick = function () {
        //선택자.속성 = "값"
        //선택자
        // myImg.src = "images/" + imgArr[1] + ".jpg"; 
        // myImg.setAttribute("src","images/" + imgArr[1] + ".jpg");
        myImg.setAttribute("src", `images/${imgArr[1]}.jpg`);
        this.style.backgroundColor = "pink";
    }

    btn3.onclick = function () {
        myImg.setAttribute("src", `images/${imgArr[2]}.png`);
        this.style.backgroundColor = "pink";
    }

    btn4.onclick = function () {
        myImg.setAttribute("src", `images/${imgArr[3]}.png`);
        this.style.backgroundColor = "pink";
    }

    btn1.onblur = function() {
        this.style.backgroundColor = "#ddd";
    }
    btn2.onblur = function() {
        this.style.backgroundColor = "#ddd";
    }
    btn3.onblur = function() {
        this.style.backgroundColor = "#ddd";
    }
    btn4.onblur = function() {
        this.style.backgroundColor = "#ddd";
    }

}