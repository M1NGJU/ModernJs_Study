// map에 대해 알아보자~

// 기존 for문
// 배열 정의
// const nameArr = ["김민주", "수민", "우영"];

// // for문을 이용한 배열 처리
// for(let index = 0; index<nameArr.length; index++){
//     console.log(nameArr[index]);
// }

// map함수 이용 방법1
// const nameArr= ["김민주", "수민", "우영"];
// 배열.map()으로 이용
// const nameArr2 = nameArr.map();

// map함수 이용 방법2
// 배열 정의
// const nameArr= ["김민주", "수민", "우영"];
// 배열.map(함수)로 이용한다
// const nameArr2 = nameArr.map(()=>{});

// map함수 이용 방법3
// 배열 정의
// const nameArr = ["김민주", "수민", "우영"];

// 인수(name)에 배열의 값이 설정되고 return으로 반환
// const nameArr2 = nameArr.map((name) =>{
//     return name;
// });
// console.log(nameArr2);

// map함수 이용!!!!!!!!!!!!!
// 배열 준비
const nameArr =["김민주", "수민", "우영"];

// map을 이용한 배열 처리
nameArr.map((name)=> console.log(name));