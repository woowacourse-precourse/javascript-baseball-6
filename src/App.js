import { Console, MissionUtils } from '@woowacourse/mission-utils';

import { message, NUM_LOWER_LIMIT, NUM_UPPER_LIMIT } from './Constants.js';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.generateNumbers();
  }

  async generateNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(NUM_LOWER_LIMIT, NUM_UPPER_LIMIT);
      if (!numbers.includes(newNumber)) numbers.push(newNumber);
    }
    Console.print(numbers);
    await this.getUserGuess();
  }

  async getUserGuess() {
    try {
      const userGuess = await Console.readLineAsync(message.REQUEST_GUESS_INPUT);
      await this.checkUserGuessValidity(userGuess);
      Console.print(`Your number ${userGuess} is a valid input.`);
    } catch (error) {
      Console.print(message.ERROR);
    }
  }

  async checkUserGuessValidity(userGuess) {
    if (isNaN(userGuess)) {
      throw new Error();
    } else if (String(userGuess).length !== 3) {
      throw new Error();
    } else if (userGuess !== [...new Set(String(userGuess).split(''))].join('')) {
      throw new Error();
    }
  }
}

const app = new App();
app.play();
export default App;
