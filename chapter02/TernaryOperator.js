// [덤] 삼항 연산자에 대해 알아보자
// 사용 방법 -> 조건 ? 조건이 true일 때 처리 : 조건이 false일 때의 처리

// ?와 :을 이용한 처리 예
// 1은 0보다 크므로 true, 따라서 :의 왼쪽이 설정
// const val1 = 1 >0 ? "true입니다." : "false입니다.";
// console.log(val1);

// 입력값에 대한 메시지 출력
// 수치를 변환해 출력하는 함수
// const printFormattedNum = (num) => {
//     const formattedNum = typeof num === "number"?num.toLocaleString():"숫자를 입력하시오";
//     console.log(formattedNum);
// };
// printFormattedNum(1300);
// printFormattedNum("1300");

// 함수 return부분에 삼항 연산자 이용
// 두 인수의 합이 100을 넘는지 판정하는 함수
const checkSumOver100 = (num1,num2) =>{
    return num1+num2 > 100 ? "100을 넘었습니다." : "허용 범위 안입니다.";
}
console.log(checkSumOver100(50,40));
console.log(checkSumOver100(50,70));