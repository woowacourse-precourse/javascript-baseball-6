import { MissionUtils } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';

class Game {
  async start() {
    await MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.getComputerNumber();
    await this.playGame();
  }

  //컴퓨터의 임의의 3자리 숫자 생성 함수
  getComputerNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      computer.add(number);
    }
    return Array.from(computer);
  }

  //게임 진행 함수
  async playGame() {
    this.playerNumber = await this.getPlayerNumber();
    this.validatePlayerNumber();
    this.result = this.calculateResult();
    await MissionUtils.Console.print(this.result);
    if (this.result === '3스트라이크') {
      await MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.askForRestart();
    } else if (this.result !== '3스트라이크') await this.playGame();
  }

  //사용자의 3자리 숫자를 입력받는 함수
  async getPlayerNumber() {
    const number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    return number;
  }

  //사용자가 입력한 숫자가 적절한지 검사하는 함수
  validatePlayerNumber() {
    doValidate(this.playerNumber);
  }

  //게임 결과값을 계산하는 함수
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

  async askForRestart() {
    const checkRestart = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    if (checkRestart === '1') {
      await this.playNewGame();
    } else if (checkRestart !== '2') {
      throw new Error('[ERROR] 1 혹은 2를 입력하세요.');
    }
  }

  async playNewGame() {
    this.computerNumber = this.getComputerNumber();
    await this.playGame();
  }
}

export default Game;
