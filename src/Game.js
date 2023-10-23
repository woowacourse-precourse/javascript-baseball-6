import { MissionUtils } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';

class Game {
  async start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.getComputerNumber();
    await this.playGame();
  }

  getComputerNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  async playGame() {
    try {
      this.playerNumber = await this.getPlayerNumber();
      this.validatePlayerNumber();
      this.result = this.calculateResult();
      MissionUtils.Console.print(this.result);
    } catch (err) {
      throw new Error(`[ERROR] ${err}`);
    }
  }

  async getPlayerNumber() {
    const number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    return number;
  }

  validatePlayerNumber() {
    doValidate(this.playerNumber);
  }

  calculateResult() {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (parseInt(this.playerNumber[i], 10) === this.computerNumber[i]) {
        strike += 1;
      } else if (this.computerNumber.includes(parseInt(this.playerNumber[i], 10))) {
        ball += 1;
      }
    }

    if (strike === 3) {
      return '3스트라이크';
    } else if (strike > 0 || ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
    return '낫싱';
  }
}

export default Game;
