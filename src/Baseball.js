import { MissionUtils } from '@woowacourse/mission-utils';
const MSG_GAME_START = '숫자 야구 게임을 시작합니다.';
const MSG_GAME_OVER = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const MSG_GAME_RESTART = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
const MSG_ENTER_THE_NUMBER = '숫자를 입력해주세요 : ';
const ERROR_MSG_INPUT_NUMBER = '[ERROR] 숫자가 잘못된 형식입니다.';
const VALUE_RESTART_GAME = '1';
const VALUE_END_GAME = '2';
const VALUE_MAX_GAME_INPUT_DIGIT = 3;
const RANDOM_NUMBER_RANGE_FROM = 1;
const RANDOM_NUMBER_RANGE_TO = 9;
const USER_INPUT_RANGE_FROM = '1';
const USER_INPUT_RANGE_TO = '9';

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
      MissionUtils.Console.print(this.makeGameResultString(strikeBallCount));
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
  async getUserInput(gameOver) {
    try {
      const userinput = await MissionUtils.Console.readLineAsync(
        MSG_ENTER_THE_NUMBER
      );
      if (!gameOver && this.checkInputGamePlaying(userinput)) {
        return userinput;
      } else if (gameOver && this.checkInputGameOver(userinput)) {
        return userinput;
      }
      throw new Error(ERROR_MSG_INPUT_NUMBER);
    } catch (error) {
      throw error;
    }
  }

  checkInputGamePlaying(userinput) {
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

  checkInputGameOver(userinput) {
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

    for (let i = 0; i < this.#computerRandomNumber.length; i++) {
      if (this.#computerRandomNumber.charAt(i) === userInput.charAt(i)) {
        strikeCount += 1;
      } else if (this.#computerRandomNumber.includes(userInput.charAt(i))) {
        ballCount += 1;
      }
    }
    return { strikeCount, ballCount };
  }

  makeGameResultString({ strikeCount, ballCount }) {
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
