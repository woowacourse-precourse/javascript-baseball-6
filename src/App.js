import { Console, MissionUtils } from "@woowacourse/mission-utils";

let userInput = "";
let strike = 0;
let ball = 0;

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
class App {
  async play() {
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
  }
}

export default App;
