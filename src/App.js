import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let computer = this.generateRandomNumber();
    let human = await this.getUserNumberInput();

    // 기능 test용(나중에 지울 것)
    console.log(computer);
    console.log(human);
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

  async getUserNumberInput() {
    try {
      const userNumberInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      const numberArray = Array.from(userNumberInput).map(Number);
      return numberArray;
    } catch (error) {
      console.log(error);
    }
  }
}

const app = new App();
app.play();

export default App;
