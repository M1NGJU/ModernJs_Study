// var를 이용하여 변수 선언의 문제점을 알아보자

// 변수 덮어 쓰기 및 재선언
var val1 = "var 변수";
console.log(val1);

// var 변수는 덮어 쓰기 가능
var val1 = "var 변수 덮어 쓰기";
console.log(val1);