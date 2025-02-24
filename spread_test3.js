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
// const obj4 = {val1:10, val2:20};
// const obj5 = {val1:30, val2:40};

// 스프레드 구문을 이용해 복사
// const obj6 = {...obj4};

// 스프레드 구문을 이용해 결합
// const obj7 = {...obj4, ...obj5};

// console.log(obj6);
// console.log(obj7);

// 등호(=)를 이용해 복사하면 안 되는 이유를 알아보자!

// = 를 이용한 복사 예제
// const arr4 = [10,20];

// =로 복사
// const arr8 = arr4;
// console.log(arr8);

// =로 복사할 때의 예상치 못한 작동을 알아보자
const arr4 = [10,20];

// = 로 복사
const arr8 = arr4;

// arr8의 처음 요소를 100으로 덮어 씀
arr8[0] = 100;

console.log(arr4);
console.log(arr8);

// =으로 복사 시 복사 전의 소스의 배열에도 영향을 주기 때문에 =으로 복사 하면 안됨