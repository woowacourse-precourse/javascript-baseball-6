import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {}

  getRandomNumber() {
    let num = '';
    for (let i = 0; i < 3; i++) {
      num += Random.pickNumberInRange(1, 9);
    }
    return num;
  }
}

const app = new App();
app.getRandomNumber();

export default App;
