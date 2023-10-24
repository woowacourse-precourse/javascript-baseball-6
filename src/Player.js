import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import { inputValidator, playAgainInputValidator } from './utils/inputValidator.js';

class Player {
  /**
   * @type {[number, number, number]}
   */
  #playerNumber;

  async startGame() {
    this.computer = new Computer();
    await this.getUserInput();
  }

  async getUserInput() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    inputValidator(userInput);
    this.handlePlayerNumbers(userInput);
  }

  handlePlayerNumbers(userAns) {
    this.#playerNumber = userAns.split('').map(Number);
    this.requestBallCount();
  }

  requestBallCount() {
    const [ballCountMessage, strike] = this.computer.checkBallCount(this.#playerNumber);
    Console.print(ballCountMessage);
    if (strike === 3) {
      this.playAgain();
    } else {
      this.getUserInput();
    }
  }

  async playAgain() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const userInput = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );

    playAgainInputValidator(userInput);

    if (userInput === '1') {
      this.startGame();
    } else {
      return;
    }
  }
}

export default Player;
