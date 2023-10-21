import { Console, MissionUtils } from "@woowacourse/mission-utils";

let userInput = "";
let strike = 0;
let ball = 0;
let stop = false;
let error = false;

// 정답 값과 입력 값 비교하기
const compare = (COMPUTER, userInput) => {
  strike = 0;
  ball = 0;

  if (COMPUTER[0] === userInput[0]) {
    strike++;
  } else if (userInput.includes(COMPUTER[0])) {
    ball++;
  }
  if (COMPUTER[1] === userInput[1]) {
    strike++;
  } else if (userInput.includes(COMPUTER[1])) {
    ball++;
  }
  if (COMPUTER[2] === userInput[2]) {
    strike++;
  } else if (userInput.includes(COMPUTER[2])) {
    ball++;
  }
};
// 게임 종료 시 다시 시작 or 종료 처리하기
const reStart = async () => {
  strike = 0;
  ball = 0;
  const START = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (START === "1") {
  } else if (START === "2") {
    Console.print("게임을 종료합니다.");
    stop = true;
  }
};
// 잘못된 값 입력 시 예외 처리하기
const errorThrow = (userInput) => {
  if (userInput === null) {
    error = true;
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (userInput.length !== 3) {
    error = true;
    Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    throw new Error("[ERROR]");
  } else if (/^[1-9][1-9][1-9]$/.test(userInput) === false) {
    error = true;
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다..");
  }
};

class App {
  async play() {
    stop = false;
    error = false;

    while (stop === false && error === false) {
      Console.print("숫자 야구 게임을 시작합니다.");
      // 정답 값 랜덤으로 생성하기
      const COMPUTER = [];

      while (COMPUTER.length < 3) {
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9).toString();
        if (!COMPUTER.includes(NUMBER)) {
          COMPUTER.push(NUMBER);
        }
      }
      while (strike < 3) {
        // 유저 입력 값 받기
        userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
        errorThrow(userInput);
        compare(COMPUTER, userInput);

        if (strike === 0 && ball === 0) {
          Console.print("낫싱");
        } else if (strike === 0) {
          Console.print(`${ball}볼`);
        } else if (ball === 0) {
          if (strike === 3) {
            Console.print("3스트라이크");
            Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            break;
          }
          Console.print(`${strike}스트라이크`);
        } else {
          Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      }
      await reStart();
    }
  }
}

export default App;
