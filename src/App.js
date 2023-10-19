import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumberArray = this.setComputerNumber();

    const userNumberArray = await this.getUserNumber();
  }

  setComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async getUserNumber() {
    try {
      const user = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해 주세요 : "
      );
      if (isNaN(user)) {
        throw new Error("숫자를 입력해주세요");
      }
      if (user > 999 || user < 100) {
        throw new Error("세자리 숫자를 입력해주세요");
      }
      const numberArray = user.toString().split("").map(Number);
      const checkArray = [...new Set(numberArray)];
      if (checkArray.length != 3) {
        throw new Error("서로다른 수를 입력해주세요");
      }
      return numberArray;
    } catch (error) {
      MissionUtils.Console.print(`에러발생 ${error}`);
    }
  }
}

const app = new App();
app.play();

export default App;
