// import { MissionUtils } from "@woowacourse/mission-utils";

const userValue = document.querySelector("#user--input");
const submit = document.querySelector("#user--submit");

// 컴퓨터 숫자 자동생성 (라이브러리 사용하기)
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}

// 사용자(플레이어) 기능 구현
// 1. 버튼 클릭 시, 새로고침 방지하고 사용자 입력 값 출력하기
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(userValue.value);

  userValue.value = "";
  console.log(computer);
  console.log("clicked");
});
