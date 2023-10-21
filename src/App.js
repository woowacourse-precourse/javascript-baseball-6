import { Random } from "@woowacourse/mission-utils";

class Computer {
  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
}

class App {
  async play() {
    const com = new Computer();
    console.log(com.createAnswer());
  }
}

export default App;

const app = new App();
app.play();