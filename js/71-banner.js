// window.onload = function () { }
window.addEventListener("load", function () {
    //버튼 변수
    let leftBtn = document.querySelector(".leftBtn");
    let rightBtn = document.querySelector(".rightBtn");

    //이미지
    let myImg = document.querySelector(".bannerImg");

    //현재 보여질 이미지가 몇번째 인지 체크할 변수
    var sNum = 1;
    //오른쪽 버튼을 클릭하면 현재 그림의 다음ㅇ 그림이 myImg로 보이도록
    //현재 그림이 1이면 2, 2번이면 3
    rightBtn.addEventListener("click", function () {
        if (sNum < 7) {
            sNum++;
        }
        else {
            sNum = 1;
        }

        console.log(sNum);
        myImg.setAttribute("src", `images/main_banner${sNum}.png`);
    })

    leftBtn.addEventListener("click", function () {
        if (sNum == 1) {
            sNum = 7;
        }
        else {
            sNum--;
        }
        myImg.setAttribute("src", `images/main_banner${sNum}.png`)
    })
})