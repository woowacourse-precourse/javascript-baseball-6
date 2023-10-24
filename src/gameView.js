import { Console } from "@woowacourse/mission-utils";

export default class GameView {
  printGameStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
  async getUserNumberInput() {
    return await Console.readLineAsync("숫자를 입력해주세요 : ");
  }
}
