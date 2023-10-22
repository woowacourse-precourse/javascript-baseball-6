import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.random = MissionUtils.Random;
    this.console = MissionUtils.Console;
    this.ball = 0;
    this.strike = 0;
  }

  async play() {
    this.console.print("숫자 야구 게임을 시작합니다.");
    const answer = this.makeRandomNum();
    this.console.print(answer);

    while (this.strike < 3) {
      this.ball = 0;
      this.strike = 0;

      const getUserInput = await this.giveQuestion("숫자를 입력해 주세요 : ");
      this.checkInputAndGiveHint(answer, getUserInput);
    }
  }

  makeRandomNum() {
    const nums = [];
    while (nums.length < 3) {
      const num = this.random.pickNumberInRange(1, 9);
      if (!nums.includes(num)) nums.push(num);
    }
    return nums.join("");
  }

  giveQuestion(question) {
    return this.console.readLineAsync(question);
  }

  checkInputAndGiveHint(answer, userInput) {
    for (let i = 0; i < 3; i++) {
      const curAnswer = answer[i];
      const curInput = userInput[i];

      if (curAnswer === curInput) this.strike++;
      else if (answer.includes(curInput)) this.ball++;
    }

    if (this.ball > 0 && this.strike > 0) this.console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    else if (this.ball > 0 && this.strike === 0) this.console.print(`${this.ball}볼`);
    else if (this.ball === 0 && this.strike > 0 && this.strike < 3) this.console.print(`${this.strike}스트라이크`);
    else if (this.strike === 3) this.console.print(`3스트라이크${"\n"}3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    else if (this.strike === 0 && this.ball === 0) this.console.print("낫싱");
  }
}

export default App;

const app = new App();
app.play();