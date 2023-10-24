import BaseballModel from '../model/baseballModel.js';
import BaseballView from '../view/baseballView.js';

class BaseballController {
  constructor() {
    this.model = new BaseballModel();
    this.view = new BaseballView();
  }

  async play() {
    const CONTINUE_GAME = '1';
    const EXIT_GAME = '2';
    this.view.startGame();
    this.model.resetBaseballData();

    while (true) {
      const User_INPUT = await this.view.getUserInput();
      this.checkUserInput(User_INPUT);
      this.model.setUserInput(User_INPUT);
      const STRIKE = this.model.getStrike();
      const BALL = this.model.getBall();
      this.view.result(STRIKE, BALL);

      if (STRIKE === this.model.count) {
        const NUMBER = await this.view.gameClear();
        if (NUMBER === CONTINUE_GAME) {
          this.model.resetBaseballData();
        } else if (NUMBER === EXIT_GAME) {
          break;
        } else {
          throw new Error(`[ERROR] 입력된 값이 1또는 2가 아닙니다.`);
        }
      }
    }
    return;
  }

  checkUserInputType(userInput) {
    return Number.isNaN(+userInput);
  }
  checkUserInputDuplicate(userInput) {
    return [...new Set(userInput.split(''))].length !== this.model.count;
  }
  checkUserInputLength(userInput) {
    return userInput.length !== this.model.count;
  }

  checkUserInput(userInput) {
    if (this.checkUserInputType(userInput)) {
      this.view.errorMessage('숫자가 잘못된 형식입니다.');
    } else if (this.checkUserInputLength(userInput)) {
      this.view.errorMessage(`입력된 숫자가 ${this.model.count}개가 아닙니다.`);
    } else if (this.checkUserInputDuplicate(userInput)) {
      this.view.errorMessage('중복된 숫자가 있습니다.');
    }
  }
}

export default BaseballController;
