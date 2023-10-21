import { MissionUtils } from "@woowacourse/mission-utils"; // 우테코 API

class App {

  randomNumber = [];

  setRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.randomNumber = [...computer];
  }

  async play() {
    this.setRandomNumber();
  }


}

const app = new App();
app.play();

export default App;
