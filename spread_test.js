// 스프레드 구문에 대하여 알아보자!

// 배열 준비
// const arr1 = [1,2];
// console.log(arr1);

// 간단한 스프레드 구문
// const arr1 = [1,2];
// console.log(arr1);  // 배열 전개되어 결과 출력
// console.log(...arr1);   //배열 안의 값이 결과로 출력

// 일반적인 함수와 스프레드 구문 비교
const arr1 = [1,2];
const summaryFunc = (num1, num2) => console.log(num1+num2);

// 일반적으로 배열값을 전달하는 경우
// summaryFunc(arr1[0],arr1[1]);

// 스프레드 구문을 이용하는 방법
summaryFunc(...arr1);