import { Console } from "@woowacourse/mission-utils";

class Screen {
  static printTitle() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  static async inputUserNumbers() {
    const numbers = await Console.readLineAsync("숫자를 입력해주세요 : ");

    return Array.from(numbers, (number) => number * 1);
  }

  static printResult(computer) {
    const { strike, ball } = computer;

    if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (strike === 0 && ball > 0) {
      Console.print(`${ball}볼`);
    }

    if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    }

    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    }
  }
}

export default Screen;
