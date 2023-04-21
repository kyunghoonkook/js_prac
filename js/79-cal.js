window.addEventListener("load", function () {
    //왼쪽버튼
    let leftBtn = document.querySelector(".prevBtn");
    //오른쪽버튼
    let rightBtn = document.querySelector(".nextBtn");

    //시스템에서 오늘의 날짜 정보 얻어오기
    let date = new Date();
    //년도
    let year = date.getFullYear();
    //월
    let month = date.getMonth();
    //일
    let today = date.getDate();
    //각 달 마지막 날짜를 저장할 배열만들기 
    let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    //달력함수 만들기
    function makeCal() {
        //이번달 1일의 정보 알아오기
        let firstDay = new Date(year, month, 1);
        //이번달 1일의 요일 정보
        let thisFirst = firstDay.getDay(); //0 = 일 1 = 월
        //윤달
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            lastDay[1] = 29;
        }
        //달력에 들어갈 숫자
        let num = 1;
        //달력의 줄 수 계산
        let row = Math.ceil((thisFirst + lastDay[month]) / 7);
        //제목출력하기
        document.querySelector(".monthTitle").innerHTML = `${year}년 ${month + 1}월`;
        //달력 출력할 테이블 변수 만들기
        let calTable = "<table>";
        //제목 줄 넣기
        calTable += "<tr>";
        calTable += "<th>일</th>";
        calTable += "<th>월</th>";
        calTable += "<th>화</th>";
        calTable += "<th>수</th>";
        calTable += "<th>목</th>";
        calTable += "<th>금</th>";
        calTable += "<th>토</th>";
        calTable += "</tr>";
        //줄
        for (i = 1; i <= row; i++) {
            calTable += "<tr>";
            //칸
            for (j = 1; j <= 7; j++) {
                if (j <= thisFirst && i == 1 || num > lastDay[month]) {
                    calTable += "<td></td>"
                }
                else {
                    if (num == today) {
                        calTable += `<td class="on">${num}</td>`
                    }
                    else{
                        calTable += `<td>${num}</td>`;
                    }
                   
                    num++;
                }
            }
            calTable += "</tr>";
        }
        calTable += "</table>";
        document.querySelector(".cal").innerHTML = calTable;
    }

    makeCal();

    //다음달 버튼을 클릭하면 년도, 현재년도, 월 + 1 
    rightBtn.addEventListener("click", function () {
        date = new Date(year, month + 1, today);
        year = date.getFullYear();
        month = date.getMonth();
        makeCal();
    })
    leftBtn.addEventListener("click", function () {
        date = new Date(year, month - 1, today);
        year = date.getFullYear();
        month = date.getMonth();
        makeCal();
    })

})