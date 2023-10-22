import { Random, Console } from "@woowacourse/mission-utils";

function pickRandomNumber(array) {
  while (array.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!array.includes(number)) {
      array.push(number);
    }
  }
}

class App {
  async play() {
    let randomArray = [];

    pickRandomNumber(randomArray);
  }
}

export default App;
