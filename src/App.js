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

  checkAnswer(answerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < inputNumber.length; i++) {
      if (inputNumber[i] === answerNumber[i]) {
        strike += 1;
      } else if (answerNumber.includes(inputNumber[i])) {
        ball += 1;
      }
    }
    let result = "";
    if (ball !== 0) {
      result += `${ball}볼 `;
    }
    if (strike !== 0) {
      result += `${strike}스트라이크 `;
    }
    if (ball === 0 && strike === 0) {
      result = "낫싱";
    }
    Console.print(result);
    return strike === 3 ? true : false;
  }

  async restart() {
    const restart = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
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

  async play() {
    const answerNumber = this.createAnswerNumber();
    this.validateNumber(answerNumber);
    Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.validateNumber(inputNumber);
      const correct = this.checkAnswer(answerNumber, inputNumber);
      if (correct) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
    await this.restart();
  }
}
export default App;
