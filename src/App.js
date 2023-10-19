import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

const threeRandomInts = function createThreeRandomIntegers() {
  const result = new Array(3);
  while (result.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!result.includes(number)) {
      result.push(number);
    }
  }

  return result;
}

export default App;
