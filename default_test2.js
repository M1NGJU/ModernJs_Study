// 객체 분할 대입의 디폴트값에 대해 알아보자!

// 존재하지 않은 속성을 출력
// name 삭제
const myProfile = {
    age: 19,
};

// 존재하지 않은 name
const {name} = myProfile;

const message = `${name}님, 안녕하세요!`;
console.log(message);