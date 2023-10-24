import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_START_MESSAGE } from "./constants/messages.js";
import { isAllCompleted, isRestartGame } from "./game.js";
import { playerInput } from "./player.js";
import { pickNumbers } from "./computer.js";
import { validation } from "./validation.js";

class App {
  async play() {
    MissionUtils.Console.print(GAME_START_MESSAGE);
    let computerPickedNumberArray = pickNumbers();

    while (true) {
      try {
        const playerInputString = await playerInput();
        const playerInputArray = validation(playerInputString);

        if (isAllCompleted(playerInputArray, computerPickedNumberArray)) {
          const playerChoice = await isRestartGame();
          if (playerChoice) {
            computerPickedNumberArray = pickNumbers();
          } else {
            return;
          }
        }
      } catch (error) {
        throw error;
      }
    }
  }
}

export default App;
