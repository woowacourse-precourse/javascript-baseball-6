import { throwError, printMessage, readLineAsync } from "./utils/index.js";
import { GUIDE, GAME_SETTING, ERROR_MESSAGE, SCORE } from "./utils/constants.js";
import BaseBallGame from "./model/BaseballGame.js";

const { STRIKE, BALL, NOTHING } = SCORE;
const { CORRECT, INPUT_NUMBER, RESTART, START } = GUIDE;
const { HEADER, NOT_LENGTH, NOT_NUMBER, NOT_RANGE, NOT_RESTART_OR_END, NOT_UNIQUE } = ERROR_MESSAGE;
const { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, MAX_INPUT_LENGTH, END_NUMBER, RESTART_NUMBER } =
  GAME_SETTING;

class App {

  isPlaying;
  baseballGame;

  gameSetting = {
    min: MIN_RANDOM_NUMBER,
    max: MAX_RANDOM_NUMBER,
    maxInputLength: MAX_INPUT_LENGTH,
  };

  async play() {
    try {
      this.start();
      printMessage(START);
      const baseballGame = this.baseballGame;

      while (this.isPlaying) {
        const numbers = await this.getUserNumbers();
        const { strike, ball } = baseballGame.calculateStrikeBall(numbers);
        const message = this.generateScoreMessage(strike, ball);

        printMessage(message);

        if (strike !== this.gameSetting.maxInputLength) {
          continue;
        }

        printMessage(CORRECT);

        const isRestart = await this.confirmRestart();

        this.restart(isRestart);
      }
    } catch (e) {
      this.end();
      throwError(`${HEADER} ${e.message}`);
    }
  }


  start() {
    this.baseballGame = new BaseBallGame();
    this.isPlaying = true;
    this.baseballGame.init(this.gameSetting);
  }

  restart(isRestart) {
    if (isRestart) {
      this.baseballGame.init(this.gameSetting);
    }

    this.isPlaying = isRestart;
  }

  end() {
    this.isPlaying = false;
    this.baseballGame = null;
  }

  async getUserNumbers() {
    const input = (await readLineAsync(INPUT_NUMBER)).trim();

    this.validateInput(input);

    return input.split("").map(Number);
  }

  async confirmRestart() {
    const input = await readLineAsync(RESTART);
    const restartNumber = Number(input);

    throwError(
      NOT_RESTART_OR_END,
      restartNumber !== RESTART_NUMBER && restartNumber !== END_NUMBER,
    );

    return restartNumber === RESTART_NUMBER;
  }

  validateInput(input) {
    const splittedInput = input.split("");
    const set = new Set(splittedInput);
    const { maxInputLength, min, max } = this.gameSetting;

    throwError(NOT_NUMBER, isNaN(Number(input)));
    throwError(NOT_LENGTH, input.length !== maxInputLength);
    throwError(NOT_UNIQUE, set.size !== maxInputLength);

    throwError(
      NOT_RANGE,
      splittedInput.filter((number) => Number(number) < min || Number(number) > max).length > 0,
    );

    return true;
  }

  generateScoreMessage(strike, ball) {
    const messages = [];

    if (ball > 0) {
      messages.push(`${ball}${BALL}`);
    }

    if (strike > 0) {
      messages.push(`${strike}${STRIKE}`);
    }

    if (strike === 0 && ball === 0) {
      messages.push(NOTHING);
    }

    return messages.join(" ");
  }
}

export default App;