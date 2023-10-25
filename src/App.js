import { MissionUtils } from "@woowacourse/mission-utils";
import { initGame, playGame } from "./game";

class App {
  async play() {
    while (true) {
      const answer = await initGame();
      await playGame(answer);

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const restart = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (restart === "2") break;
      if (restart === "1") continue;
    }
  }
}

export default App;
