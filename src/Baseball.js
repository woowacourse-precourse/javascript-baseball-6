import { MissionUtils } from '@woowacourse/mission-utils';
import {
  MSG_GAME_START,
  MSG_GAME_OVER,
  MSG_GAME_RESTART,
  MSG_ENTER_THE_NUMBER,
  ERROR_MSG_INPUT_NUMBER,
  VALUE_RESTART_GAME,
  VALUE_END_GAME,
  VALUE_MAX_GAME_INPUT_DIGIT,
  RANDOM_NUMBER_RANGE_FROM,
  RANDOM_NUMBER_RANGE_TO,
  USER_INPUT_RANGE_FROM,
  USER_INPUT_RANGE_TO,
} from './constants.js';

class Baseball {
  #computerRandomNumber;

  constructor() {
    MissionUtils.Console.print(MSG_GAME_START);
    this.makeRandomNumber();
  }

  async gameStart() {
    let isPlaying = true;
    while (isPlaying) {
      const userInput = await this.getUserInput(false);
      const strikeBallCount = this.calcStrikeBallCount(userInput);
      MissionUtils.Console.print(
        Baseball.makeGameResultString(strikeBallCount)
      );
      if (strikeBallCount.strikeCount === VALUE_MAX_GAME_INPUT_DIGIT) {
        isPlaying = await this.checkGameOver();
      }
    }
  }
  async checkGameOver() {
    MissionUtils.Console.print(MSG_GAME_OVER);
    MissionUtils.Console.print(MSG_GAME_RESTART);
    const userInput = await this.getUserInput(true);
    if (userInput === VALUE_RESTART_GAME) {
      this.makeRandomNumber();
      return true;
    } else {
      return false;
    }
  }
  async getUserInput(isGameOver) {
    try {
      const userinput = await MissionUtils.Console.readLineAsync(
        MSG_ENTER_THE_NUMBER
      );
      if (!isGameOver && Baseball.checkInputGamePlaying(userinput)) {
        return userinput;
      } else if (isGameOver && Baseball.checkInputGameOver(userinput)) {
        return userinput;
      }
      throw new Error(ERROR_MSG_INPUT_NUMBER);
    } catch (error) {
      throw error;
    }
  }

  static checkInputGamePlaying(userinput) {
    if (userinput.length !== VALUE_MAX_GAME_INPUT_DIGIT) {
      return false;
    }
    const set = new Set();
    for (let c of userinput) {
      if (USER_INPUT_RANGE_FROM <= c && c <= USER_INPUT_RANGE_TO) {
        set.add(c);
      }
    }
    if (set.size === VALUE_MAX_GAME_INPUT_DIGIT) {
      return true;
    }
    return false;
  }

  static checkInputGameOver(userinput) {
    if (userinput === VALUE_RESTART_GAME || userinput === VALUE_END_GAME) {
      return true;
    }
    return false;
  }

  makeRandomNumber() {
    const computer = [];
    while (computer.length < VALUE_MAX_GAME_INPUT_DIGIT) {
      const number = MissionUtils.Random.pickNumberInRange(
        RANDOM_NUMBER_RANGE_FROM,
        RANDOM_NUMBER_RANGE_TO
      );
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#computerRandomNumber = [...computer].join('');
  }

  calcStrikeBallCount(userInput) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < VALUE_MAX_GAME_INPUT_DIGIT; i++) {
      if (this.#computerRandomNumber.charAt(i) === userInput.charAt(i)) {
        strikeCount += 1;
      } else if (this.#computerRandomNumber.includes(userInput.charAt(i))) {
        ballCount += 1;
      }
    }
    return { strikeCount, ballCount };
  }

  static makeGameResultString({ strikeCount, ballCount }) {
    if (strikeCount === 0 && ballCount === 0) {
      return `낫싱`;
    } else if (strikeCount !== 0 && ballCount === 0) {
      return `${strikeCount}스트라이크`;
    } else if (strikeCount === 0 && ballCount !== 0) {
      return `${ballCount}볼`;
    } else if (strikeCount !== 0 && ballCount !== 0) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  }
}
export default Baseball;
