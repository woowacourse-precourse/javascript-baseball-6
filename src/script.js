// import { MESSAGE } from "./util/variables";

const Alerts = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "넛팅",
};

const COUNT = {
  STRIKE_COUNT: 0,
  BALL_COUNT: 0,
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
const showResultList = document.querySelector(".result--table");
const showPlayerInputs = document.querySelector(".player--input");
const newChild = document.createElement("li");

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
    return;
    // userInputValue = "";
  }

  //   let strikeCount = 0;
  //   let ballCount = 0;
  const strikes = [];
  const balls = [];

  for (let i = 0; i < 3; i++) {
    if (playerScores[i] === computer[i]) {
      COUNT.STRIKE_COUNT++;
      strikes.push(playerScores[i]);
      newChild.innerHTML = `${strikes.length}스트라이크`;
      showResultList.appendChild(newChild);

      //   showPlayerInputs.innerHTML = `${strikes.length}스트라이크 `;
      //   newChild.innerHTML = `${strikes.length}스트라이크 `;
      console.log(strikes.length, "STRIKES ARRAY");
    } else if (
      computer.includes(playerScores[i]) &&
      !balls.includes(playerScores[i])
    ) {
      COUNT.BALL_COUNT++;
      balls.push(playerScores[i]);
      newChild.innerHTML = `${balls.length}볼`;
      showResultList.appendChild(newChild);
      console.log(balls, "BALLS ARRAY");
    }
  }

  if (strikes.length >= 3) {
    // message.innerHTML = MESSAGE.GAMEWIN;
    console.log(MESSAGE.GAMEWIN);
    return;
  } else {
    // message.innerHTML = `스트라이크: ${strikeCount}, 볼: ${ballCount}`;
    console.log(`스트라이크: ${COUNT.STRIKE_COUNT}, 볼: ${COUNT.BALL_COUNT}`);
  }

  //   for (let i = 0; i < playerScores.length; i++) {
  //     for (let j = 0; j < computer.length; j++) {
  //       const playerScoreOne = playerScores[0];
  //       const playerScoreTwo = playerScores[1];
  //       const playerScoreThree = playerScores[2];

  //       const computerScoreOne = computer[0];
  //       const computerScoreTwo = computer[1];
  //       const computerScoreThree = computer[2];

  //       //   console.log("Player score 1 is ", playerScoreOne);
  //       //   console.log("Computer score 1 is ", computerScoreOne);

  //       let count = 0;
  //       if (playerScoreOne === computerScoreOne) {
  //         count = count + 1;
  //         // console.log("one Strike", count);
  //       } else if (playerScoreTwo === computerScoreThree) {
  //         ("one ball");
  //         count = count + 1;
  //         // console.log("two Strike", count);
  //         console.log(count);
  //       }
  //       //   console.log("playerscore is", playerScore);
  //       //   console.log("computerScore is", computerScore);
  //     }
  //   }
  console.log(playerScores);
  //   message.innerHTML = "";
  //   handleScores();
  // 초기화
  //   userValue.value = "";
  console.log(computer);

  console.log("clicked");
});
