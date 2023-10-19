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

  async play() {}
}

export default App;
