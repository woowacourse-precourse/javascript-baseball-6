import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {}

  randomGenerator() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!randomNum.includes(number)) {
        randomNum.push(number);
      }
    }
    return randomNum;
  }
}

export default App;
