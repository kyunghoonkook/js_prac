//날짜와 관련된 날짜 객체 사용하기
//시스템에서 제공해주는 날짜관련 객체를 사용할때 
//복합데이터 타입 
var date = new Date();
console.log(date);
//년도,월,일,요일, 시간, 분, 초, 
//년도
var year = date.getFullYear();
console.log(year);

//월
var month = date.getMonth();
console.log(month); //4 0-1월 1-2월 4-5월 4번째달
//일
var theDate = date.getDate();
console.log(theDate); 
//요일
var theDay = date.getDay();
console.log(theDay); //0-일, 1-월 2-화 3-수
switch(theDay){
    case 0 :
        console.log("일요일");
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
}