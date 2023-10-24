import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { GameMessage, ErrorMessage } from "./constant.js";

class App {
  async play() {
    // 1-1. 게임 시작 문구 출력
    Console.print(GameMessage.START_GAME);
    const computer = gameStart();
    await gameProgress(computer);
    gameEnd();
  }
}

// 1. 게임 시작
const gameStart = () => {
  // 1-2. 컴퓨터의 랜덤값 생성
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

// 2. 게임 진행
const gameProgress = async (computer) => {
  console.log("computer: ", computer);
  // 2-1. 사용자의 입력값 받기
  const input = await Console.readLineAsync(GameMessage.USER_INPUT);
  const user = [...input];

  // 2-1-(1). 예외처리
  validation(user);

  // 2-2. 컴퓨터의 랜덤값과 사용자의 입력값 비교
  let ball = 0;
  let strike = 0;
  for (let i in user) {
    if (computer.includes(Number(user[i]))) {
      if (Number(user[i]) === computer[i]) {
        strike++;
      } else ball++;
    }
  }

  // 2-3. 결과 문구 출력
  if (strike === 3) {
    Console.print(`3스트라이크`);
    return;
  } else {
    let hint = "";
    if (ball === 0 && strike === 0) {
      hint += "낫싱";
    } else {
      if (ball !== 0) {
        hint += `${ball}볼 `;
      }
      if (strike !== 0) {
        hint += `${strike}스트라이크`;
      }
    }
    Console.print(hint.trim());
    await gameProgress(computer);
  }
};

// 3. 게임 종료
const gameEnd = async () => {
  // 3-1. 게임 종료 문구 출력
  Console.print(GameMessage.END_GAME);
  // 3-2. 게임 재시작 여부 입력값 받기
  const input = await Console.readLineAsync(GameMessage.RESTART_GAME);
  if (input === "1") {
    const computer = gameStart();
    await gameProgress(computer);
    gameEnd();
  } else if (input === "2") {
    return;
  }
  // 3-3. 예외 처리
  else {
    throw new Error(ErrorMessage.INVALID_RESTART);
  }
};

// 사용자 입력값에 대한 예외 처리
const validation = (user) => {
  const answer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // 공백 여부
  if (user.includes(" ")) {
    throw new Error(ErrorMessage.INVALID_SPACE);
  }
  // 숫자
  for (let i of user) {
    if (!answer.includes(i)) {
      throw new Error(ErrorMessage.INVALID_ZERO);
    }
  }
  // 길이
  if (user.length !== 3) {
    throw new Error(ErrorMessage.INVALID_LENGTH);
  }
  // 서로 다른 숫자
  let check = [];
  for (let i of user) {
    if (check.includes(i)) {
      throw new Error(ErrorMessage.INVALID_PATTERN);
    } else {
      check.push(i);
    }
  }
};

const app = new App();
app.play();

export default App;
