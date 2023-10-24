import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async play() {
    let computer = this.generateRandomNumber();

    // 기능 test용(나중에 지울 것)
    console.log(computer);
  }

  generateRandomNumber() {
    const isGenerated = new Array(9).fill(false);
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (isGenerated[number] === false) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();

export default App;
