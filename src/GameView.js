import { Console } from "@woowacourse/mission-utils";

class GameView {
  printStartGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async getPlayerGuess() {
    const inputNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return inputNumbers;
  }
}
