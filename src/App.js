import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let shouldExit = false;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (shouldExit === false) {
      let computer = this.generateComputerArray();
      while (true) {
        let human = await this.processInput();
        if (this.isValidInput(human) === false) {
          throw new Error("[ERROR]");
        }
        if (this.compareNumberArray(human, computer)) {
          break;
        }
      }
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      shouldExit = await this.getExitInput();
    }
  }

  generateComputerArray() {
    const isGenerated = new Array(10).fill(false);
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (isGenerated[number] === false) {
        computer.push(number);
        isGenerated[number] = true;
      }
    }
    return computer;
  }

  async processInput() {
    let numberArray = [];
    const userNumberInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    numberArray = Array.from(userNumberInput).map(Number);
    return numberArray;
  }

  isValidInput(numberArray) {
    const numberCount = new Array(10).fill(0);
    if (numberArray.length !== 3) {
      // 길이 검사
      return false;
    }
    for (const num of numberArray) {
      // 숫자인지 검사
      if (isNaN(num)) {
        return false;
      }
      // 중복 수 검사
      numberCount[num]++;
      if (numberCount[num] === 2) {
        return false;
      }
    }
    return true;
  }

  async getExitInput() {
    let eixtInput = " ";
    eixtInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (eixtInput === "1") {
      return false;
    } else if (eixtInput === "2") {
      return true;
    } else {
      throw new Error("[ERROR]");
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
