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
}
