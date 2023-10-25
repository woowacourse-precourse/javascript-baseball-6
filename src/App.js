import { Console, MissionUtils } from '@woowacourse/mission-utils';

import { message, result, NUM_LOWER_LIMIT, NUM_UPPER_LIMIT } from './Constants.js';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.playProcess();
  }

  async playProcess() {
    const numbers = await this.generateNumbers();

    while (true) {
      const [answer, messageCode] = await this.testUserGuess(numbers);
      Console.print(messageCode);
      if (answer) break;
    }

    await this.askEndPrompt();
  }

  async generateNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(NUM_LOWER_LIMIT, NUM_UPPER_LIMIT);
      if (!numbers.includes(newNumber)) numbers.push(newNumber);
    }
    return numbers;
  }

  async getUserGuess() {
    try {
      const userGuess = await Console.readLineAsync(message.REQUEST_GUESS_INPUT);
      this.checkUserGuessValidity(userGuess);
      return userGuess;
    } catch (error) {
      Console.print(message.ERROR);
    }
  }

  async checkUserGuessValidity(userGuess) {
    if (isNaN(userGuess)) {
      throw new Error();
    } else if (String(userGuess).length !== 3) {
      throw new Error();
    } else if (String(userGuess) !== [...new Set(String(userGuess).split(''))].join('')) {
      throw new Error();
    } else if (String(userGuess).split('').includes('0')) {
      throw new Error();
    }
  }

  async testUserGuess(numbers) {
    let userGuess = await this.getUserGuess();

    let ball = 0;
    let strike = 0;

    const userGuessArray = String(userGuess).split('').map(Number);

    for (let i = 0; i < userGuessArray.length; i++) {
      if (numbers.includes(userGuessArray[i]) && numbers.indexOf(userGuessArray[i]) === i) {
        strike += 1;
      } else if (numbers.includes(userGuessArray[i]) && numbers.indexOf(userGuessArray[i]) !== i) {
        ball += 1;
      }
    }

    if (ball === 0 && strike === 0) {
      return [false, result.NOTHING];
    } else if (ball === 1 && strike === 0) {
      return [false, result.BALL_1];
    } else if (ball === 2 && strike === 0) {
      return [false, result.BALL_2];
    } else if (ball === 3 && strike === 0) {
      return [false, result.BALL_3];
    } else if (ball === 0 && strike === 1) {
      return [false, result.STRIKE_1];
    } else if (ball === 0 && strike === 2) {
      return [false, result.STRIKE_2];
    } else if (ball === 0 && strike === 3) {
      return [true, result.STRIKE_3];
    } else if (ball === 1 && strike === 1) {
      return [false, result.BALL_1_STRIKE_1];
    } else if (ball === 1 && strike === 2) {
      return [false, result.BALL_1_STRIKE_2];
    } else if (ball === 2 && strike === 1) {
      return [false, result.BALL_2_STRIKE_1];
    }
  }

  async askEndPrompt() {
    try {
      const userEndChoice = await Console.readLineAsync(message.REQUEST_END_INPUT);

      if (userEndChoice == 1) {
        await this.playProcess();
      } else if (userEndChoice == 2) {
        Console.print(message.END);
      } else {
        throw new Error();
      }
    } catch (error) {
      Console.print(message.ERROR);
    }
  }
}

const app = new App();
app.play();

export default App;
