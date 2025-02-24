// 객체 분할 대입의 디폴트값에 대해 알아보자!

// 존재하지 않은 속성을 출력
// name 삭제
// const myProfile = {
//     age: 19,
// };

// // 존재하지 않은 name
// const {name} = myProfile;

// const message = `${name}님, 안녕하세요!`;
// console.log(message);

// 분할 대입 시의 디폴트값을 설정
const myProfile = {
    age: 19,
}

const {name="게스트"} = myProfile;

const message = `${name}님, 안녕하세요!`
console.log(message);