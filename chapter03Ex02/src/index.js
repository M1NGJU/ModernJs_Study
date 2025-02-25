// 버튼 설정
// 버튼 태그 생성
const buttonEl = document.createElement("button");

// 버튼 라벨 설정
buttonEl.textContent = "버튼";

// 영역 1의 div 태그 얻기
const div1El = document.querySelector(".container");

// div 태그 아래에 button 태그를 추가
div1El.appendChild(buttonEl);