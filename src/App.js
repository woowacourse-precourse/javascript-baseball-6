import { MissionUtils } from "@woowacourse/mission-utils";
import errorTexts from "./baseball_error.js";
import gameSettings from "./baseball-game-setting.js";
import randomNumbers from "./random-number-generator.js";
import matchNumberPositions from "./match-number-positions.js";
import InputValidator from "./input-validator.js";
import checkBaseballResult from "./check-baseball-result.js";
import GameRestartPrompter from "./game-restart-prompter.js";

class App {
  constructor() {
    this.Numbers = [];
  }

  async play() {
    let loop = true
    this.Numbers = randomNumbers(gameSettings.ballLength, gameSettings.ballMinSize, gameSettings.ballMaxSize);
    MissionUtils.Console.print(gameSettings.gameStartMassege);
  
    while (loop) {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(gameSettings.userInput);
      const DIGIT = InputValidator(USER_INPUT, gameSettings);
      const { BALLS, STRIKES } = matchNumberPositions(this.Numbers, DIGIT, gameSettings.ballLength);
      const RESULT = checkBaseballResult(BALLS, STRIKES, gameSettings);
      loop = await GameRestartPrompter(RESULT, gameSettings, this, errorTexts);
    }
  }
}

export default App;