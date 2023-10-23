import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {}

  #makeRandomNumber() {
    let result = "";

    while (true) {
      if (result.length >= 3) break;

      const random = Random.pickNumberInRange(1, 9);
      if (!result.includes(random)) result += random;
    }

    return result;
  }
}

const app = new App();
app.play();

export default App;
