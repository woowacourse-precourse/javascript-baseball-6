import BaseballModel from '../model/baseballModel.js';
import BaseballView from '../view/baseballView.js';

class BaseballController {
  constructor() {
    this.model = new BaseballModel();
    this.view = new BaseballView();
    this.count = 3;
  }
  async play() {
    let gamePlayCheck = true;
    this.view.startGame();
    this.resetBaseballData();
    while (gamePlayCheck) {
      while (true) {
        const User_INPUT = await this.view.getUserInput();
        try {
          this.checkUserInput(User_INPUT);
        } catch (error) {
          throw error;
        }
        this.model.setUserInput(User_INPUT);

        const strike = this.model.getStrike();
        const ball = this.model.getBall();
        this.view.result(strike, ball);

        if (strike === this.count) {
          const NUMBER = await this.view.gameClear();
          if (NUMBER === '1') {
            this.resetBaseballData();
            break;
          } else if (NUMBER === '2') {
            gamePlayCheck = false;
            break;
          }
        }
      }
    }
    return;
  }

  checkUserInputType(userInput) {
    return Number.isNaN(+userInput);
  }
  checkUserInputDuplicate(userInput) {
    return [...new Set(userInput.split(''))].length !== this.count;
  }
  checkUserInputLength(userInput) {
    return userInput.length !== this.count;
  }

  checkUserInput(userInput) {
    if (this.checkUserInputType(userInput)) {
      this.view.errorMessage('숫자가 잘못된 형식입니다.');
      return false;
    } else if (this.checkUserInputLength(userInput)) {
      this.view.errorMessage(`입력된 숫자가 ${this.count}개가 아닙니다.`);
      return false;
    } else if (this.checkUserInputDuplicate(userInput)) {
      this.view.errorMessage('중복된 숫자가 있습니다.');
      return false;
    } else {
      return true;
    }
  }
  resetBaseballData() {
    this.model.generateRandomNumber();
    this.model.setUserInput('');
  }
}

export default BaseballController;
