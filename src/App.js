import { MissionUtils } from '@woowacourse/mission-utils';
import { gameMessage } from './constants/gameMessage';
import { inputNumberError } from './constants/errorMessage';

class App {
  async play() {
    let computerNumber = await this.getComputerNumber();
    let userAnswer = 1;

    await MissionUtils.Console.print(gameMessage.GAME_START);

    while (userAnswer === 1) {
      const inputNumber = await this.getInputNumber();
      const { strike, ball } = this.getGameResult(computerNumber, inputNumber);
      await this.printGameResult(strike, ball);

      if (strike === 3) {
        userAnswer = await this.getInputContinueNumber();

        if (userAnswer === 1) {
          computerNumber = await this.getComputerNumber();
        }
      }
    }
  }

  async getComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = await MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    
    return computer;
  }

  async getInputNumber() {
    const inputNumber = await MissionUtils.Console.readLineAsync(gameMessage.INPUT_NUMBER_ASK);
    
    if (inputNumber.length > 3) {
      throw new Error(inputNumberError.LENGTH_ERROR);
    }

    if (isNaN(inputNumber)) {
      throw new Error(inputNumberError.NOT_NUMBER_ERROR);
    }

    return inputNumber;
  }

  async getInputContinueNumber() {
    await MissionUtils.Console.print(gameMessage.GAME_CONTINUE_ASK);
    const inputNumber = await MissionUtils.Console.readLineAsync();

    if (inputNumber === '1' || inputNumber === '2') {
      return Number(inputNumber);
    }

    throw new Error(inputNumberError.CONTINUE_NUMBER_ERROR);
  }

  getGameResult(computerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < inputNumber.length; i++) {
      const computerNumberIndex = computerNumber.indexOf(Number(inputNumber[i]));
      if (i === computerNumberIndex) {
        strike++;
      } else if (computerNumberIndex !== -1) {
        ball++;
      }
    }

    return { strike, ball };
  }

  async printGameResult(strike, ball) {
    if (strike === 3) {
      await MissionUtils.Console.print(gameMessage.STRIKE);
      await MissionUtils.Console.print(gameMessage.SUCCESS_GAME);
    } else if (ball === 0 && strike === 0) {
      await MissionUtils.Console.print(gameMessage.NOTHING);
    } else {
      await MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

export default App;
