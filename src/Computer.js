import { Random } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';
import { NUMBER_LENGTH } from './Constants.js';

class Computer {
  constructor() {
    this.answerNumbers = [];
    this.isOut = false;
  }

  generateRandomNumbers(length) {
    this.answerNumbers = [];
    while (this.answerNumbers.length < length) {
      const number = Random.pickNumberInRange(1, 9).toString();
      if (!this.answerNumbers.includes(number)) {
        this.answerNumbers.push(number);
      }
    }
  }

  checkAnswer(playerAnswer) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < NUMBER_LENGTH; i++) {
      if (this.answerNumbers[i] === playerAnswer[i]) strike++;
      else if (this.answerNumbers.includes(playerAnswer[i])) ball++;
    }

    if (strike > 0 && ball > 0) Console.print(`${ball}볼 ${strike}스트라이크`);
    else if (ball > 0) Console.print(`${ball}볼`);
    else if (strike > 0) Console.print(`${strike}스트라이크`);
    else Console.print('낫싱');

    if (strike === NUMBER_LENGTH) this.isOut = true;
  }
}

export default Computer;
