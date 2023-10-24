import MESSAGE from '../constants/messages.js';
import InputHandler from '../utils/inputHandler.js';
import RandomGenerator from '../utils/randomGenerator.js';
import { Console } from '@woowacourse/mission-utils';

class GameController {
  constructor() {
    this.startGame();
  }

  async startGame() {
    Console.print(MESSAGE.GAME.START);
    this.computerNumbers = RandomGenerator.pickRandomNumber(3);
    await this.inputUserNumber();
  }

  async inputUserNumber() {
    await InputHandler.userInput();
  }
}

export default GameController;
