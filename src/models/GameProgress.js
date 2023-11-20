import {
  ERROR_MESSAGE,
  RESTART_INPUT_REG_EXP,
  RULE,
} from '../constants/index.js';

class GameProgress {
  #state = 'playing';
  constructor(isWin = undefined, string = undefined) {
    if (isWin) {
      this.#validateRestartKey(string);
      this.#isRestart(string);
    }
  }
  /**
   *
   * @param {"playing"|"restart"|"end"} progress
   */
  setState(progress) {
    this.#state = progress;
  }
  #isRestart(string) {
    const { reStartNumber, endNumber } = RULE;
    switch (Number(string)) {
      case reStartNumber:
        this.setState('restart');
        break;
      case endNumber:
        this.setState('end');
        break;
      default:
        break;
    }
  }
  #validateRestartKey(string) {
    if (!RESTART_INPUT_REG_EXP.test(string))
      throw new Error(ERROR_MESSAGE.gameRestart);
  }

  getState() {
    return this.#state;
  }
}

export default GameProgress;
