// 스프레드 구문으로 요소를 모아보자!

// 요소 모으기
const arr2 = [1,2,3,4,5];

// 분할 대입 시 남은 요소를 '모은다'
const[num1,num2,...arr3] = arr2;

console.log(num1);
console.log(num2);
console.log(arr3);