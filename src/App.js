import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #answerNumber;

  async play() {}

  getAnswerNumber() {
    return this.#answerNumber;
  }
  makeRandomNumber() {
    let result = "";

    while (true) {
      if (result.length >= 3) break;

      const random = Random.pickNumberInRange(1, 9);
      if (!result.includes(random)) result += random;
    }

    this.#answerNumber = result;
  }
}

const app = new App();
app.play();

export default App;
