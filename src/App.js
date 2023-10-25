import { MissionUtils } from "@woowacourse/mission-utils";
import { CONDITION, OUTPUT_MESSAGE } from "./constants.js";
import Game from "./Game.js";

class App {
  constructor() {
    this.isPlaying = true;
  }

  restart(input) {
    switch (input) {
      case "1":
        this.setIsPlaying(true);
        break;
      case "2":
        this.setIsPlaying(false);
        break;
      default:
        throw new Error("[ERROR] 잘못된 숫자를 입력했습니다.");
    }
  }

  setIsPlaying(boolean) {
    this.isPlaying = boolean;
  }

  print(message) {
    MissionUtils.Console.print(message);
  }

  async play() {
    this.print(OUTPUT_MESSAGE.START);

    while (this.isPlaying) {
      const game = new Game();
      game.setAnswer();

      while (game.getStrikeCount() !== CONDITION.FULL_STRIKE) {
        const userInput = await MissionUtils.Console.readLineAsync(
          OUTPUT_MESSAGE.INPUT
        );
        game.setBaseBallCount(userInput);

        const countMessage = OUTPUT_MESSAGE.COUNT(
          game.getStrikeCount(),
          game.getBallCount()
        );
        this.print(countMessage);

        if (game.getStrikeCount() === CONDITION.FULL_STRIKE && this.isPlaying) {
          this.print(OUTPUT_MESSAGE.END);

          const resetInput = await MissionUtils.Console.readLineAsync(
            OUTPUT_MESSAGE.RESTART
          );

          this.restart(resetInput);
        }
      }
    }
  }
}

export default App;
