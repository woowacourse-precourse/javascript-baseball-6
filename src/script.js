// import { MESSAGE } from "./util/variables";

const Alerts = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "넛팅",
};

const MESSAGE = {
  ERROR: "1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요.",
  GAMEWIN: `3스트라이크
    3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART: "게임을 새로 시작하시겠습니까?",
  START: "숫자 야구 게임을 시작합니다.",
};

const userValue = document.querySelector("#user--input");
const submit = document.querySelector("#user--submit");
const message = document.querySelector(".message");

// 컴퓨터 숫자 자동생성 (라이브러리 사용하기)
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}

// const handleScores = () => {

// };

// 사용자(플레이어) 기능 구현
// 1. 버튼 클릭 시, 새로고침 방지하고 사용자 입력 값 출력하기
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const userInputValue = userValue.value;

  const playerScores = [...userInputValue].map((el) => Number(el));
  if (playerScores.length !== 3) {
    message.innerHTML = MESSAGE.ERROR;
    // userInputValue = "";
  }

  for (let i = 0; i < playerScores.length; i++) {
    for (let j = 0; j < computer.length; j++) {
      const playerScore = playerScores[i];
      const computerScore = computer[j];
      console.log("playerscore is", playerScore);
      console.log("computerScore is", computerScore);
    }
  }
  console.log(playerScores);
  //   message.innerHTML = "";
  //   handleScores();
  // 초기화
  //   userValue.value = "";
  console.log(computer);

  console.log("clicked");
});
