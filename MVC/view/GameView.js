import { Console } from "@woowacourse/mission-utils";
class GameView {
  async readUserInput() {
    return await Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  async readReplayInput() {
    return await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
  }
  printGameWin() {
    return Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
  printGameOver() {
    return Console.print("게임 종료");
  }
}

export default GameView;
