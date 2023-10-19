import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  #computerNumber;

  threeDigitsGenerator() {
    let computerStr = '';

    while (computerStr.length < 3) {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerStr.includes(String(RANDOM_NUM))) {
        computerStr += String(RANDOM_NUM);
      }
    }

    return Number(computerStr);
  }

  assignComputerNumber() {
    this.#computerNumber = this.threeDigitsGenerator();
  }

  isValidInput(input) {
    const STR_USER_INPUT = String(input);
    const SET_USER_INPUT = new Set([...STR_USER_INPUT]);

    if (/^[1-9]{3}$/.test(STR_USER_INPUT) && SET_USER_INPUT.size === 3) {
      return true;
    }

    return false;
  }

  calculateStrikesAndBalls(userInput, computerValue) {
    const USER_INPUT_ARRAY = [...String(userInput)];
    const COMPUTER_VALUE_ARRAY = [...String(computerValue)];
    const STRIKE = USER_INPUT_ARRAY.filter((v, i) => v === COMPUTER_VALUE_ARRAY[i]).length;
    const BALL = COMPUTER_VALUE_ARRAY.filter((v, i) => (v !== USER_INPUT_ARRAY[i]) && USER_INPUT_ARRAY.includes(v)).length;

    return { STRIKE, BALL };
  }

  async play() {}
}

export default App;
