import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.random = MissionUtils.Random;
    this.console = MissionUtils.Console;

    this.ball = 0;
    this.strike = 0;
    this.isPlay = true;
  }

  async play() {
    this.console.print("숫자 야구 게임을 시작합니다.");

    while (this.isPlay) {
      const answer = this.makeRandomNum();
      this.console.print(answer);
  
      while (this.strike < 3) {
        this.ball = 0;
        this.strike = 0;
  
        const getUserInput = await this.giveQuestion("숫자를 입력해 주세요 : ");
        
        this.inputValidation(getUserInput);

        this.checkInputAndGiveHint(answer, getUserInput);
      }

      const restartInput = await this.giveQuestion(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.${"\n"}`);
      if (restartInput === "2") this.isPlay = false;
      else {
        this.strike = 0;
        this.ball = 0;
      }
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

  inputValidation(input) {
    if (!Number(input)) throw new Error("[ERROR]");
    else if (input.length !== 3) throw new Error("[ERROR]");
    else if (input.includes(" ")) throw new Error("[ERROR]");
    else if (input.includes("0")) throw new Error("[ERROR]");
    else if (new Set(input).size !== 3) throw new Error("[ERROR]");
  }
}

export default App;

const app = new App();
app.play();