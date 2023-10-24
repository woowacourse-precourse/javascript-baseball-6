import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constant';

export class Computer {
  #generatedNumber;

  getThreeDigits() {
    return this.#generatedNumber;
  }

  generateThreeDigits() {
    let stringThreeDigits = '';

    while (stringThreeDigits.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!stringThreeDigits.includes(String(randomNumber))) {
        stringThreeDigits += String(randomNumber);
      }
    }

    this.#generatedNumber = Number(stringThreeDigits);
  }
}

export class Player {
  number;
  choice;

  setThreeDigits(num) {
    if (!Validator.isValidPlayerNumber(num)) throw new Error(ERROR_MESSAGE.INVALID_NUMBER);

    this.number = num;
  }

  setChoice(choice) {
    this.choice = choice;
  }
}

export class GameManager {
  evaluatePlayerInput(userInput, computerValue) {
    const userInputArray = Array.from(String(userInput));
    const computerValueArray = Array.from(String(computerValue));
    const strike = userInputArray.filter((v, i) => v === computerValueArray[i]).length;
    const ball = computerValueArray.filter((v, i) => (v !== userInputArray[i]) && userInputArray.includes(v)).length;

    return { strike, ball };
  }
}

export class Validator {
  static validatePlayerChoice(input) {
    return !/^[12]$/.test(input);
  }

  static isThreeDigits(input) {
    return /^[1-9]{3}$/.test(String(input));
  }

  static isValidPlayerNumber(input) {
    const set = new Set(Array.from(String(input)));
    if (this.isThreeDigits(input) && set.size === 3) {
      return true;
    }

    return false;
  }
}