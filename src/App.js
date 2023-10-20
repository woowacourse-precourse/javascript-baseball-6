import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    const COM_NUMBER = this.createNumber();
    let userNumber = this.userNumber();
  }

  createNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER.join("");
  }

  userNumber() {
    try {
      const USERINPUT = MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      return USERINPUT;
    } catch (error) {
      console.error("숫자만 입력해주세요 : ", error);
    }
  }
}

const app = new App();
app.play();

export default App;
