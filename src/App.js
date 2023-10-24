import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { errorThrow } from "./errorThrow.js";
import { compare } from "./compare.js";

// 게임 종료 시 다시 시작 or 종료 처리하기
const reStart = async () => {
  const START = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (START === "1") {
    return false;
  } else if (START === "2") {
    Console.print("게임을 종료합니다.");
    return true;
  }
};
// 결과 메세지 출력하기
const printMessage = (strike, ball) => {
  if (strike === 0 && ball === 0) {
    Console.print("낫싱");
  } else if (strike === 0) {
    Console.print(`${ball}볼`);
  } else if (ball === 0) {
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    } else {
      Console.print(`${strike}스트라이크`);
    }
  } else {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }
};

class App {
  async play() {
    let stop = false;
    let error = false;

    Console.print("숫자 야구 게임을 시작합니다.");
    while (stop === false && error === false) {
      // 정답 값 랜덤으로 생성하기
      const COMPUTER = [];

      while (COMPUTER.length < 3) {
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9).toString();
        if (!COMPUTER.includes(NUMBER)) {
          COMPUTER.push(NUMBER);
        }
      }
      let strike = 0;
      let ball = 0;
      let userInput = "";
      while (strike < 3) {
        userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
        error = errorThrow(userInput);
        [strike, ball] = compare(COMPUTER, userInput);
        printMessage(strike, ball);
      }
      stop = await reStart();
    }
  }
}

export default App;
