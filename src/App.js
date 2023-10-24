import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 1-1. 게임 시작 문구 출력
    Console.print("숫자 야구 게임을 시작합니다.");
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
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
  const user = [...input];

  // 2-1-(1). 예외처리
  inputValidation(user);

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
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  // 3-2. 게임 재시작 여부 입력값 받기
  const input = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (input === "1") {
    const computer = gameStart();
    await gameProgress(computer);
    gameEnd();
  } else if (input === "2") {
    return;
  }
  // 3-3. 예외 처리
  else {
    throw new Error("[ERROR] 1 또는 2를 입력해 주세요.");
  }
};

// 사용자 입력값에 대한 예외 처리
const inputValidation = (user) => {
  const answer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // 공백 여부
  if (user.includes(" ")) {
    throw new Error("[ERROR] 공백이 포함되어 있습니다.");
  }
  // 숫자
  for (let i of user) {
    if (!answer.includes(i)) {
      throw new Error("[ERROR] 1 ~ 9 사이의 숫자만 입력해 주세요.");
    }
  }
  // 길이
  if (user.length !== 3) {
    throw new Error("[ERROR] 3개의 숫자를 입력해 주세요.");
  }
  // 서로 다른 숫자
  let check = [];
  for (let i of user) {
    if (check.includes(i)) {
      throw new Error("[ERROR] 서로 다른 숫자를 입력해 주세요.");
    } else {
      check.push(i);
    }
  }
};

const app = new App();
app.play();

export default App;
