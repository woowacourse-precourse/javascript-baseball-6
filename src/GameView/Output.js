import { Console } from "@woowacourse/mission-utils";

class Output {
  printStartGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  printSuccess() {
    Console.print("3스트라이크");
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  printHint(strikes, balls) {
    if (strikes === 0 && balls === 0) {
      Console.print("낫싱");
    } else {
      Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
  }

  printRestartGame() {
    Console.print("게임을 다시 시작합니다.");
  }
}
export default Output;
