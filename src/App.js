import { Console } from '@woowacourse/mission-utils';
import User from './utils/User';
import Computer from './utils/Computer';
import Control from './utils/Control';
import {
  ErrorMessage,
  GuideText
} from './constant';

export default class App {
  constructor() {
    this.computerNumber = '';
    this.isPlaying = true;
    this.user = new User();
    this.computer = new Computer();
    this.control = new Control(this);
  }

  async play() {
    this.control.startGame();
    this.control.assignComputerNumber();
    
    try {
      while (this.isPlaying) {
        const INPUT = await this.user.getUserChoice();
        const COMPARE_RESULT = this.control.hasThreeStrikes(INPUT);

        if (COMPARE_RESULT) {
          const RESET = await Console.readLineAsync(GuideText.RESTART);

          if (RESET === '1') {
            this.control.assignComputerNumber();
            continue;
          } else if (RESET === '2') {
            this.control.endGame();
          } else {
            throw new Error(ErrorMessage.INVALID_PATTERN);
          }
        }
      }
    } catch (error) {
      Console.print(ErrorMessage.ERROR_WHILE_PLAYING);
      throw error;
    }
  }
}