import BaseballModel from './Model/baseballModel.js';
import BaseballView from './View/baseballView.js';
import {GAMEOVER, CONTINUE, RESTART} from './Util/constant.js';

class App {
  constructor() {
    this.printStartMessage();
  }
  
  printStartMessage() {
    BaseballView.displayMessage('숫자 야구 게임을 시작합니다.');
  }
  
  async play() {
    await this.start();
  }
  
  async start() {
    this.model = new BaseballModel();
    await this.guessNumber();
  }

  async guessNumber() {
    await this.model.getUserInputNumber();
    const status = this.model.checkMatchingNumber();
    if (status === GAMEOVER) {
      await this.askRestartOrExit();
    } else if (status === CONTINUE) {
      await this.guessNumber();
    }
  }

  async askRestartOrExit() {
    const status = await this.model.getUserInputForRestartOrExit();
    if (status === GAMEOVER) {
      return ;
    } else if (status === RESTART) {
      await this.start();
    }
  }
}

export default App;
