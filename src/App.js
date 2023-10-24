import { Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const number = String(Random.pickNumberInRange(1, 9));
      if(!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log(computer);
  }
}

const app = new App();
app.play();

export default App;
