import Random from "/node_modules/@woowacourse/mission-utils/src/random.js";

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    console.log(computer);
  }
}

export default App;
