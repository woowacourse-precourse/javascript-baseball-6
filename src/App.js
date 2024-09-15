import { Random, Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.isContinue = true;
    this.computerInput = this.generateRandomNum();
  }

  generateRandomNum() {
    const ANSWER = [];
    while (ANSWER.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!ANSWER.includes(NUMBER)) {
        ANSWER.push(NUMBER);
      }
    }
    return ANSWER;
  }

  validateInput(userInput) {
    if (Number.isNaN(Number(userInput))) {
      throw new Error("[ERROR] 숫자 형식이 잘못되었습니다.");
    } else if (userInput.length !== 3) {
      throw new Error("[ERROR] 숫자 길이가 잘못되었습니다.");
    } else if (userInput.includes(0)) {
      throw new Error("[ERROR] 0을 포함하고 있습니다.");
    } else {
      return true;
    }
  }

  calcStrike(userInput, computerInput) {
    return userInput.filter((el, i) => computerInput[i] === el).length;
  }

  calcBall(userInput, computerInput) {
    return userInput.filter(
      (el, i) => computerInput.includes(el) && computerInput[i] !== el
    ).length;
  }

  async selectOption() {
    Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    const CHOICE = await Console.readLineAsync("");
    if (CHOICE === "1") {
      this.computerInput = this.generateRandomNum();
    } else if (CHOICE === "2") {
      this.isContinue = false;
    } else {
      throw new Error("[ERROR] 잘못 입력하였습니다.");
    }
  }

  async printResult(strike, ball) {
    if (strike === 3) {
      await this.selectOption();
    } else if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike > 0) {
      Console.print(`${strike}스트라이크`);
    } else if (ball > 0) {
      Console.print(`${ball}볼`);
    }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (this.isContinue) {
      const USERINPUT = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const IS_VALID = this.validateInput(USERINPUT);

      if (IS_VALID) {
        const INPUT_ARR = USERINPUT.toString().split("").map(Number);
        const STRIKE = this.calcStrike(INPUT_ARR, this.computerInput);
        const BALL = this.calcBall(INPUT_ARR, this.computerInput);
        await this.printResult(STRIKE, BALL);
      }
    }
  }
}

export default App;
