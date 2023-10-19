import { Console } from "@woowacourse/mission-utils";

class App {
  ANSWER_LENGTH = 3;
  answer = "425";

  async play() {
    this.printStartMessage();
    this.playOneLoop();
  }

  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async playOneLoop() {
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!this.isNumberIsValid(number)) {
      throw Error("[Error]");
    }

    Console.print(this.isNothing(number));
  }

  isNumberIsValid(number) {
    function isOnlyNumbersExceptZero(number) {
      for (const eachNumber of number) {
        if (!"123456789".includes(eachNumber)) return false;
      }

      return true;
    }

    const isSameAsAnswerLength = number.length === ANSWER_LENGTH;
    return isSameAsAnswerLength && isOnlyNumbersExceptZero(number);
  }

  isNothing(number) {
    for (const eachNumber of number) {
      if (this.answer.includes(eachNumber)) return false;
    }

    return true;
  }
}

// 콘솔 테스팅 용도
new App().play();

export default App;
