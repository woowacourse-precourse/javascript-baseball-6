import { Console, Random } from "@woowacourse/mission-utils";
import {
  NUMBER_SIZE,
  START_MESSAGE,
  INPUT_MESSAGE,
  END_MESSAGE,
  DECISION_MESSAGE,
  DUPLICATION_ERROR,
  DECISION_ERROR,
  ZERO_INPUT_ERROR,
  FORM_ERROR,
  VALID_INPUT_FORM,
  RESTART,
  EXIT,
  ZERO,
} from "./GameUtils.js";

class App {
  // App 시작 동작
  async play() {
    this.tellStart();
    this.generateRandomNumber();
    await this.continueApp();
  }

  tellStart() {
    Console.print(START_MESSAGE);
  }

  generateRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < NUMBER_SIZE) {
      const createdNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(createdNumber)) {
        randomNumber.push(createdNumber);
      }
    }
    this.generatedNumber = randomNumber;
  }

  // 랜덤값 기반 사용자 입력과 동일할 때까지 동작
  async continueApp() {
    await this.inputNumber();
    const { strike, ball } = this.compareInput();
    this.printResult(strike, ball);
    const result = this.isCorrectAnswer(strike);
    // 정답일 때,
    if (result) {
      const select = await this.handleEndCase();
      if (select === EXIT) {
        return;
      }
      // 다시 시작하면 새로운 랜덤넘버 재생성
      this.generateRandomNumber();
    }
    // 게임 계속 진행
    await this.continueApp();
  }

  // 사용자의 수 입력
  async inputNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE);
    try {
      // 세 자리수 체크
      if (!VALID_INPUT_FORM.test(input)) {
        throw new Error(FORM_ERROR);
      }
      if (input.includes(ZERO)) {
        throw new Error(ZERO_INPUT_ERROR);
      }
      if (new Set(input).size !== NUMBER_SIZE) {
        throw new Error(DUPLICATION_ERROR);
      }
      this.input = input.split("");
    } catch (error) {
      throw error;
    }
  }

  // 스트라이크와 볼의 판별
  compareInput() {
    let strike = 0;
    let ball = 0;
    this.input.forEach((checkNumber, index) => {
      const randomNumber = [...this.generatedNumber];
      if (parseInt(checkNumber) === randomNumber[index]) {
        strike += 1;
      } else if (randomNumber.includes(parseInt(checkNumber))) {
        ball += 1;
      }
    });
    return { strike, ball };
  }

  printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
      return;
    }
    const resultMessage = [];
    if (ball > 0) resultMessage.push(ball + "볼");
    if (strike > 0) resultMessage.push(strike + "스트라이크");
    Console.print(resultMessage.join(" "));
  }

  isCorrectAnswer(strike) {
    if (strike === NUMBER_SIZE) {
      Console.print(END_MESSAGE);
      return true;
    }
    return false;
  }
  async handleEndCase() {
    try {
      const selection = await Console.readLineAsync(DECISION_MESSAGE);
      if (!(selection === RESTART || selection === EXIT)) {
        throw new Error(DECISION_ERROR);
      }
      return selection;
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
