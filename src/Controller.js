import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "./Game";

class Controller {
  async restart() {
    const game = new Game();

    while (true) {
      const generator = game.generateNumber();
      let answer = "";

      while (answer !== "3스트라이크") {
        answer = await game.process(generator);
        await MissionUtils.Console.print(answer);
      }

      await MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );

      const finish = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (finish === "2") {
        await MissionUtils.Console.print("게임 종료");
        break;
      }
    }
  }
}

export default Controller;
