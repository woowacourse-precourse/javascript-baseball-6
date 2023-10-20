import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const number = this.getRandomNumber();
    MissionUtils.Console.print("숫자 야구를 시작합니다.");
    const inputNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  }
  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();

export default App;
