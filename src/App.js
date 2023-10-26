import { Console, MissionUtils } from '@woowacourse/mission-utils';

import MESSAGES from './message.js';
import feedback from './feedback/feedback.js';
import isError from './validation.js';

class App {
  constructor() {
    this.computer = [];
    this.player = [];
  }
  async gameStart() {
    let correct = true;
    await this.createRandomNumber();
    while (correct) {
      await this.getPlayerNumber();
      await isError(this.player);
      correct = await feedback(this.computer, this.player);
    }
    await this.gameOver();
  }
  async reStart() {
    this.computer = [];
    this.gameStart();
  }
  async gameOver() {
    Console.print(MESSAGES.correctNumber);
    let rePlay = Number(await Console.readLineAsync(MESSAGES.reStart));
    if (rePlay === 1) this.reStart();
    else if (rePlay !== 2) throw new Error(MESSAGES.errorMessage);
  }
  async getPlayerNumber() {
    this.player = [...(await Console.readLineAsync(MESSAGES.inputNumber))];
  }
  async createRandomNumber() {
    while (this.computer.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(random)) this.computer.push(random);
    }
  }
  async startMessage() {
    Console.print(MESSAGES.gameStart);
  }
  async play() {
    this.startMessage();
    await this.gameStart();
  }
}

const app = new App();
app.play();

export default App;
