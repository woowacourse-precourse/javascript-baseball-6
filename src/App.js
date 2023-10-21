import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    function makeAnswer() {
      const computer = new Set();
      while(computer.size < 3) {
        computer.add(Random.pickNumberInRange(1, 9));
      }

      return [...computer];
    }

    makeAnswer();
    userInput();
  }
}

const app = new App();
app.play();

export default App;
