import { MissionUtils } from '@woowacourse/mission-utils';
import { message, result, NUM_LOWER_LIMIT, NUM_UPPER_LIMIT } from './Constants.js';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.playProcess();
  }

  async playProcess() {
    const numbers = this.generateNumbers();

    while (true) {
      const answer = await this.testUserGuess(numbers);
      if (answer) break;
    }

    MissionUtils.Console.print(message.END);
    await this.askUserEndChoice();
  }

  generateNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(NUM_LOWER_LIMIT, NUM_UPPER_LIMIT);
      if (!numbers.includes(newNumber)) numbers.push(newNumber);
    }
    return numbers;
  }

  // async getUserGuess() {
  //   const userGuess = await MissionUtils.Console.readLineAsync(message.REQUEST_GUESS_INPUT);

  //   if (isNaN(userGuess)) {
  //     throw new Error(message.ERROR);
  //   } else if (String(userGuess).length !== 3) {
  //     throw new Error(message.ERROR);
  //   } else if (String(userGuess) !== [...new Set(String(userGuess).split(''))].join('')) {
  //     throw new Error(message.ERROR);
  //   } else if (String(userGuess).split('').includes('0')) {
  //     throw new Error(message.ERROR);
  //   } else {
  //     return userGuess;
  //   }
  // }

  async getUserGuess() {
    const userGuess = await MissionUtils.Console.readLineAsync(message.REQUEST_GUESS_INPUT);
    return await this.checkUserGuessValidity(userGuess);
  }

  async checkUserGuessValidity(userGuess) {
    if (isNaN(userGuess)) {
      throw new Error(message.ERROR);
    } else if (String(userGuess).length !== 3) {
      throw new Error(message.ERROR);
    } else if (String(userGuess) !== [...new Set(String(userGuess).split(''))].join('')) {
      throw new Error(message.ERROR);
    } else if (String(userGuess).split('').includes('0')) {
      throw new Error(message.ERROR);
    } else {
      return userGuess;
    }
  }

  async testUserGuess(numbers) {
    const userGuess = await this.getUserGuess();

    let ball = 0;
    let strike = 0;

    const userGuessArray = String(userGuess).split('').map(Number);

    for (let i = 0; i < userGuessArray.length; i++) {
      if (numbers.includes(userGuessArray[i]) && numbers[i] === userGuessArray[i]) {
        strike += 1;
      } else if (numbers.includes(userGuessArray[i]) && numbers.indexOf(userGuessArray[i]) !== i) {
        ball += 1;
      }
    }

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print(result.NOTHING);
      return false;
    } else if (ball === 1 && strike === 0) {
      MissionUtils.Console.print(result.BALL_1);
      return false;
    } else if (ball === 2 && strike === 0) {
      MissionUtils.Console.print(result.BALL_2);
      return false;
    } else if (ball === 3 && strike === 0) {
      MissionUtils.Console.print(result.BALL_3);
      return false;
    } else if (ball === 0 && strike === 1) {
      MissionUtils.Console.print(result.STRIKE_1);
      return false;
    } else if (ball === 0 && strike === 2) {
      // return [false, result.STRIKE_2];
      MissionUtils.Console.print(result.STRIKE_2);
      return false;
    } else if (ball === 0 && strike === 3) {
      MissionUtils.Console.print(result.STRIKE_3);
      return true;
    } else if (ball === 1 && strike === 1) {
      MissionUtils.Console.print(result.BALL_1_STRIKE_1);
      return false;
    } else if (ball === 1 && strike === 2) {
      MissionUtils.Console.print(result.BALL_1_STRIKE_2);
      return false;
    } else if (ball === 2 && strike === 1) {
      MissionUtils.Console.print(result.BALL_2_STRIKE_1);
      return false;
    }
  }

  async askUserEndChoice() {
    const userEndChoice = await MissionUtils.Console.readLineAsync(message.REQUEST_END_INPUT);

    if (userEndChoice == 1) {
      this.playProcess();
    } else if (userEndChoice == 2) {
      MissionUtils.Console.print(message.END_ALL);
    } else {
      throw new Error(message.ERROR);
    }
  }
}

export default App;
