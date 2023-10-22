import { MissionUtils } from "@woowacourse/mission-utils";
import errorTexts from "./baseball_error.js";
import gameSettings from "./baseball-game-setting.js";
import randomNumbers from "./RandomNumberGenerator.js";
import matchNumberPositions from "./match-number-positions.js";
import InputValidator from "./input-validator.js";
import checkBaseballResult from "./check-baseball-result.js";
import GameRestartPrompter from "./game-restart-prompter.js";

class App {
  constructor() {
    this.Numbers = [];
  }

  async play() {
    this.Numbers = randomNumbers(gameSettings.ballSize, gameSettings.ballMinSize, gameSettings.ballMaxSize);
    MissionUtils.Console.print(gameSettings.gameStartMassege);
    while (gameSettings.restart) {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(gameSettings.userInput);
      const DIGIT = InputValidator(USER_INPUT, gameSettings.ballSize, gameSettings.ballMinSize, gameSettings.ballMaxSize, errorTexts);
      const { BALLS, STRIKES } = matchNumberPositions(this.Numbers,DIGIT,gameSettings.ballSize);
      const RESULT = checkBaseballResult(BALLS, STRIKES, gameSettings);
      gameSettings.restart = await GameRestartPrompter(RESULT, gameSettings, this, errorTexts);
    }
  }
}

export default App;

const app = new App();
app.play();
