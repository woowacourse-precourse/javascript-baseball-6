import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const selectedNumber = await this.pickRandomNumber();
  }

  async pickRandomNumber() {
    let randomNumber = '';
    while (randomNumber <= 2) {
      const newRandomNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(newRandomNumber)) {
        randomNumber += newRandomNumber;
      }
    }
  }
}

export default App;
