"use strict";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      while (true) {
        const answer = await generateAnswer();
        let isGameEnd = false;

        while (!isGameEnd) {
          const userInput = await getInputs();
          const result = await getResult(userInput, answer);
          isGameEnd = await printResult(result.strike, result.ball);
        }

        const restartInput = await getRestartInput();
        if (restartInput === 2) {
          break;
        }
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

// 결과 출력 함수
async function printResult(strike, ball) {
  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print("낫싱");
    return false;
  } else if (strike === 3) {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return true;
  } else {
    let message = "";
    if (ball > 0) {
      message += `${ball}볼`;
    }
    if (strike > 0) {
      if (ball > 0) {
        message += " ";
      }
      message += `${strike}스트라이크`;
    }
    MissionUtils.Console.print(message);
  }

  return false;
}

// 게임 로직 함수
async function getResult(input, answer) {
  const result = {
    strike: 0,
    ball: 0,
  };

  input.forEach((num, index) => {
    if (answer.includes(num)) {
      if (answer.indexOf(num) === index) {
        result.strike += 1;
      } else {
        result.ball += 1;
      }
    }
  });

  return result;
}

// 답을 생성하는 함수
async function generateAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

// 인풋 받는 함수
async function getInputs() {
  const input = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (input.length !== 3) {
    throw new Error("[ERROR] 3자리 숫자를 입력해주세요.");
  }

  if (input.split("").some((num) => isNaN(num))) {
    throw new Error("[ERROR] 숫자만 입력해주세요.");
  }

  return input.split("").map((num) => parseInt(num));
}

async function getRestartInput() {
  const input = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  if (input.length !== 1) {
    throw new Error("[ERROR] 1자리 숫자를 입력해주세요.");
  }

  if (isNaN(input)) {
    throw new Error("[ERROR] 숫자만 입력해주세요.");
  }

  if (parseInt(input) !== 1 && parseInt(input) !== 2) {
    throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
  }

  return parseInt(input);
}

// app 객체 생성후 실행
// const app = new App();
// app.play();

export default App;
