import { MissionUtils } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';
import { ERROR_MESSAGE, MESSAGE, resultMessage } from './Message.js';

class Game {
  async start() {
    await MissionUtils.Console.print(MESSAGE.GAME_START);
    this.computerNumber = this.getComputerNumber();
    await this.playGame();
  }

  //컴퓨터의 임의의 3자리 숫자 생성 함수
  getComputerNumber() {
    const COMPUTER_NUMBER = new Set();
    while (COMPUTER_NUMBER.size < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      COMPUTER_NUMBER.add(RANDOM_NUMBER);
    }
    return Array.from(COMPUTER_NUMBER);
  }

  //게임 진행 함수
  async playGame() {
    this.playerNumber = await this.getPlayerNumber();
    this.validatePlayerNumber();
    this.result = this.calculateResult();
    await MissionUtils.Console.print(this.result);
    if (this.result === MESSAGE.THREE_STRKIE) {
      await MissionUtils.Console.print(MESSAGE.CORRECT_NUMBER);
      await this.askForRestart();
    } else if (this.result !== MESSAGE.THREE_STRKIE) await this.playGame();
  }

  //사용자의 3자리 숫자를 입력받는 함수
  async getPlayerNumber() {
    const PLAYER_NUMBER = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_NUMBER);
    return PLAYER_NUMBER;
  }

  //사용자가 입력한 숫자가 적절한지 검사하는 함수
  validatePlayerNumber() {
    doValidate(this.playerNumber);
  }

  //게임 결과값을 계산하는 함수
  calculateResult() {
    let strike = 0;
    let ball = 0;
    [...this.playerNumber].forEach((num, i) => {
      if (num * 1 === this.computerNumber[i]) {
        strike += 1;
      } else if (this.computerNumber.includes(num * 1)) {
        ball += 1;
      }
    });

    if (strike === 3) {
      return MESSAGE.THREE_STRKIE;
    } else if (strike > 0 || ball > 0) {
      return resultMessage(ball, strike);
    }
    return MESSAGE.NOTHING;
  }

  async askForRestart() {
    const CHECK_RESTART = await MissionUtils.Console.readLineAsync(MESSAGE.RESTART);
    if (CHECK_RESTART === '1') {
      await this.playNewGame();
    } else if (CHECK_RESTART !== '2') {
      throw new Error(ERROR_MESSAGE.INPUT_ONE_OR_TWO);
    }
  }

  async playNewGame() {
    this.computerNumber = this.getComputerNumber();
    await this.playGame();
  }
}

export default Game;
