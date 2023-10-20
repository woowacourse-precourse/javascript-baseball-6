import { Random, Console } from "@woowacourse/mission-utils";

class App {
  createAnswerNumber() {
    const LENGTH_OF_NUMBER = 3;
    let result = "";
    for (let i = 0; i < LENGTH_OF_NUMBER; i++) {
      const number = Random.pickNumberInRange(1, 9);
      result += number.toString();
    }
    return result;
  }
  async play() {
    console.log(this.createAnswerNumber());
  }
}
export default App;

const app = new App();
app.play();
