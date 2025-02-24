// 인수의 디폴트 값을 알아보자!

// 메시지를 출력하는 함수
// const sayHello = (name) => console.log(`${name}님, 안녕하세요`);
// sayHello("김민주");

// 실행 시 인수가 전달되지 않은 경우
// const sayHello = (name) => console.log(`${name}님, 안녕하세요!`);
// sayHello();

// 디폴트 값 설정
const sayHello = (name = "게스트") => console.log(`${name}님, 안녕하세요!`);
sayHello();

// 디폴트 값을 설정하면 인수가 전달되지 않았을 때 디폴트 값을 불러와 보여줄 수 있다.