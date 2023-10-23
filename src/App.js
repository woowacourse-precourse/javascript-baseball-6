import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {}

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  getUserNumber() {}
}

const app = new App();
app.getRandomNumber();

export default App;
