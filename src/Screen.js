import { Console } from "@woowacourse/mission-utils";

class Screen {
  static printTitle() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  static async inputUserNumbers() {
    const numbers = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (numbers.length !== 3 || Number.isNaN(numbers)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

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

  static printGameOver() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  static async askRestart() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const answer = await Console.readLineAsync();

    if (answer !== "1" && answer !== "2") {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    return answer;
  }
}

export default Screen;
