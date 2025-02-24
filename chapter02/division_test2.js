// 추출한 속성에 별명 지정
const myProfile = {
    name: "김민주",
    age: 19
};

// 콜론으로 다른 변수명을 이용
const {name: newName, age: newAge} = myProfile;

const message = `내 이름은 ${newName}입니다. 나이는 ${newAge}세 입니다.`;
console.log(message);