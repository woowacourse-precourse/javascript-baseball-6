import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.getComputerRandomNumber();
    console.log("컴퓨터 숫자", computer);
    let continueGame = true;
    while (continueGame) {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (this.validateInput(number)) {
        Console.print(number);
      } else {
        Console.print("종료");
        continueGame = false;
      }
    }
  }

  getComputerRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  validateInput(number) {
    if (!this.isThreeNumber(number)) {
      return false;
    }
    if (this.isDuplicate(number)) {
      return false;
    }
    if (!this.isPositive(number)) {
      return false;
    }
    return true;
  }
  isThreeNumber(number) {
    const numStr = String(number);
    return numStr.length === 3 && !isNaN(number);
  }
  isDuplicate(number) {
    const numStr = String(number);
    const setNumber = new Set(number);
    return numStr.length !== setNumber.size;
  }
  isPositive(number) {
    if (number > 0) {
      return true;
    }
    return false;
  }
}

export default App;

const app = new App();
app.play();
