import { Console } from "@woowacourse/mission-utils";

class View {
  printGameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  printErrorMessage(message) {
    Console.print(message);
  }

  readLineInput(message) {
    return Console.readLineAsync(message);
  }

  printHint(ball, strike) {
    ball !== 0 && strike !== 0 ? Console.print(`${ball}볼 ${strike}스트라이크`) : "";

    ball === 0 && strike !== 0 ? Console.print(`${strike}스트라이크`) : "";

    ball !== 0 && strike === 0 ? Console.print(`${ball}볼`) : "";

    ball === 0 && strike === 0 ? Console.print(`낫싱`) : "";
  }
}

export default View;
