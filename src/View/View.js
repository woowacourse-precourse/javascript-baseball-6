import { Console } from "@woowacourse/mission-utils";

class View {
  printMessage(message) {
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
