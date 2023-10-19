import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
