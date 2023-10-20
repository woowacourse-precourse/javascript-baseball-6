import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.LENGTH_OF_NUMBER = 3;
  }
  createAnswerNumber() {
    let result = "";
    for (let i = 0; i < this.LENGTH_OF_NUMBER; i++) {
      const number = Random.pickNumberInRange(1, 9);
      result += number.toString();
    }
    return result;
  }

  calculateResult(answerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < inputNumber.length; i++) {
      if (inputNumber[i] === answerNumber[i]) {
        strike += 1;
      } else if (answerNumber.includes(inputNumber[i])) {
        ball += 1;
      }
    }
    return { strike, ball };
  }

  async restart() {
    const restart = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (restart === "1") {
      this.play();
    } else if (restart === "2") {
      Console.print("종료 완료");
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  validateNumber(number) {
    if (isNaN(number) || number.length !== this.LENGTH_OF_NUMBER) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  printResult(strike, ball) {
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    } else if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else {
      Console.print(`${ball ? `${ball}볼 ` : ""}${strike ? `${strike}스트라이크 ` : ""}`);
    }
  }

  async play() {
    const answerNumber = this.createAnswerNumber();
    this.validateNumber(answerNumber);
    Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.validateNumber(inputNumber);
      const { strike, ball } = this.calculateResult(answerNumber, inputNumber);
      this.printResult(strike, ball);
      if (strike === 3) break;
    }
    await this.restart();
  }
}
export default App;
