// filter에 대해 알아보자!!

// filter함수를 이용해 홀수만 추출하기
// 배열 정의
// const numArr = [1,2,3,4,5];

// 홀수(2로 나누어 나머지가 1)만 추출
// const newNumArr = numArr.filter((num)=>{
//     return num %2 ===1;
// });

// console.log(newNumArr);

// for문의 index를 이용해 요소를 순서대로 추출
// 인덱스를 다루어보자~~
// const nameArr = ["김민주", "수민", "우영"];
// // 정의한 index를 이용
// for(let index=0; index<nameArr.length; index++){
//     console.log(`${index +1}번째는 ${nameArr[index]}입니다.`);
// }

// map 함수의 인수를 이용해 요소 순서대로 추출
// const nameArr = ["김민주", "수민", "우영"];
// nameArr.map((name,index)=>console.log(`${index+1}번째는 ${name}입니다.`));

// map을 이용한 사양 구현 예
const nameArr = ["김민주", "수민", "우영"];

const newNameArr = nameArr.map((name)=>{
    if(name === "김민주"){
        return name;
    } else{
        return `${name}님`;
    }
});
console.log(newNameArr);