// 스프레드 요소 복사와 결합을 알아보자!!

// 2개의 배열 준비
// const arr4 = [10,20];
// const arr5 = [30,40];

// arr4의 배열을 복사해 새로운 배열을 생성하자
// const arr6 = [...arr4];

// console.log(arr4);
// console.log(arr6);

// 두 개의 배열 결합
// const arr4 = [10,20];
// const arr5 = [30,40];

// 스프레드 구문을 이용해 결합
// const arr7 = [...arr4,...arr5];

// console.log(arr7);

// 여러 객체의 결합
const obj4 = {val1:10, val2:20};
const obj5 = {val1:30, val2:40};

// 스프레드 구문을 이용해 복사
const obj6 = {...obj4};

console.log(obj6);