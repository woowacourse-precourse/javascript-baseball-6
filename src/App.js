import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor(
    input,
    answer,
    strikeCount,
    ballCount,
    proceeding = true,
    restart = false
  ) {
    this.input = input;
    this.answer = answer;
    this.strikeCount = strikeCount;
    this.ballCount = ballCount;
    this.proceeding = proceeding;
    this.restart = restart;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.getNumber();
    while (this.gameContinue === 0) await this.inputNumber();
  }

  async getNumber() {
    const answerSet = new Set();

    while (answerSet.size !== 3) {
      answerSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    this.answer = Array.from(answerSet).join("");
    this.restart = false;
    return this.answer;
  }

  async inputNumber() {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.strikeCount = 0;
    this.ballCount = 0;
      await this.settingNumber(number);
    if (!number) {
      throw new Error("[Error] 숫자 입력이 들어오지 않았습니다.");
      return;
    }
  }
  async settingNumber(number) {
    const [a, b, c] = number.split("").map(Number);
    if (a === b || b === c || c === a) {
      throw new Error("[Error] 숫자는 서로 중복될 수 없습니다.");
    }

    if (number < 0) {
      throw new Error("[Error] 숫자는 음수일 수 없습니다.");
      return;
    }

    if (number.length !== 3) {
      throw new Error("[ERROR] 숫자는 3자리 수여야 합니다.");
      return;
    }

    if (!/^\d{3}$/.test(number)) {
      throw new Error("[ERROR] 입력은 숫자 형식이어야 합니다.");
      return;
    }

    this.input = number;
    await Console.print(this.isIncluded());
  }

  async strike(inputArr, answerArr) {
    const isStrike = answerArr.map((item, index) => {
      return item === inputArr[index];
    });
    this.strikeCount = isStrike.filter((x) => x).length;
    return this.strikeCount;
  }

  async ball(inputArr, answerArr) {
    const isBall = answerArr.map((item, index) => {
      return inputArr.includes(item) && item !== inputArr[index];
    });

    this.ballCount = isBall.filter((x) => x).length;
    return this.ballCount;
  }
  async consoleOutput(strikeCount, ballCount) {
    const BALL = `${ballCount}볼`;
    const STRIKE = `${strikeCount}스트라이크`;
  }
    }
  }
}

const app = new App();
// app.play().then((answer) => Console.print(answer));
app.play();

export default App;
