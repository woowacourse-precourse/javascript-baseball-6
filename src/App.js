import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let computer = this.generateRandomNumber();
    let human = await this.getUserNumberInput();

    /* 기능 test용(나중에 지울 것) */
    console.log(computer);
    console.log(human);
    /* ========================= */

    while (this.compareNumberArray(human, computer) === false) {
      human = await this.getUserNumberInput();
    }
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
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

  compareNumberArray(human, computer) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (human[i] === computer[i]) {
        strikeCount++;
      } else if (computer.includes(human[i])) {
        ballCount++;
      }
    }
    MissionUtils.Console.print(this.generateMessage(strikeCount, ballCount));
    if (strikeCount === 3) {
      return true;
    }
    return false;
  }

  generateMessage(strikeCount, ballCount) {
    let message = "";
    if (ballCount) {
      message += `${ballCount}볼`;
    }
    if (strikeCount) {
      if (ballCount) {
        message += " ";
      }
      message += `${strikeCount}스트라이크`;
    }
    if (message.length === 0) {
      message += "낫싱";
    }
    return message;
  }
}

const app = new App();
app.play();

export default App;
