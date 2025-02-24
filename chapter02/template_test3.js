// 함수 호출과 계산 실행

// 안녕하세요 를 반환하는 함수
function sayHello(){
    return "안녕하세요";
}

// 월을 나타내는 숫자를 저장한 변수
const month = 1;

// 템플릿 문자열 안에서의 함수 호출 및 곱셈 실행
const message = `여러분 ${sayHello()}! 오늘부터 ${month * 3}월 입니다!`;
console.log(message);