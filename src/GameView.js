import { Console } from "@woowacourse/mission-utils";

class GameView {
  printStartGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async getPlayerGuess() {
    const inputNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return inputNumbers;
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

  async askRegame() {
    const choice = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
    );
    if (choice === "2") {
      Console.print("게임을 종료합니다.");
      return true;
    }
    if (choice === "1") {
      return false;
    }
    throw new Error("[ERROR]");
  }

  printRestartGame() {
    Console.print("게임을 다시 시작합니다.");
  }
}
export default GameView;
