// 쇼트핸드에 대해 알아보자!!
// -> 객체의 속성명과 설정할 변수명이 같으면 생략 가능!

// 속성명과 변수명이 같은 경우
const name = "김민주";
const age = "19";

// user 객체 정의(속성은 name과 age)
// const user = {
//     name: name,
//     age: age,
// };
// console.log(user);

// 속성명과 변수명이 같은 경우 예제
const user = {
    name,
    age,
};
console.log(user);