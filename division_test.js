// 분할 대입에 대해 알아보자!

//  객체 분할 대입

// 분할 대입 이용
const myProfile = {
    name: "김민주",
    age: 19
};

// 객체 분할 대입
const {name, age} = myProfile;

const message = `내 이름은 ${name}입니다. 나이는 ${age}입니다.`;
console.log(message);