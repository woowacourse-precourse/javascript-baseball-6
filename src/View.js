import { Console } from "@woowacourse/mission-utils";

export default class GameView {
  printGameStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async getUserNumberInput() {
    return await Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  printScore(score) {
    Console.print(score);
  }

  async getUserRestartInput() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    return await Console.readLineAsync("");
  }
}
