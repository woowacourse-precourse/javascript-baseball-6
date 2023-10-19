import { Console, Random } from "@woowacourse/mission-utils";

class App {
  ANSWER_LENGTH = 3;
  answer = "";

  async play() {
    this.setAnswer();

    Console.print(this.answer);

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

    if (this.isNothing(number)) {
      Console.print("x");
      return;
    }

    const { strikeCount, ballCount } = this.getJudgedCountsFor(number);

    Console.print(strikeCount);
    Console.print(ballCount);
  }

  isNumberIsValid(number) {
    function isOnlyNumbersExceptZero(number) {
      for (const eachNumber of number) {
        if (!"123456789".includes(eachNumber)) return false;
      }

      return true;
    }

    const isSameAsAnswerLength = number.length === this.ANSWER_LENGTH;
    return isSameAsAnswerLength && isOnlyNumbersExceptZero(number);
  }

  isNothing(number) {
    for (const eachNumber of number) {
      if (this.answer.includes(eachNumber)) return false;
    }

    return true;
  }

  getStrikeCount(number) {
    let count = 0;

    for (let idx = 0; idx < this.ANSWER_LENGTH; idx++) {
      if (this.answer[idx] === number[idx]) count++;
    }

    return count;
  }

  getBallCount(number, strikeCount) {
    let count = 0;

    for (const eachNumber of number) {
      if (this.answer.includes(eachNumber)) count++;
    }

    return count - strikeCount;
  }

  getJudgedCountsFor(number) {
    const strikeCount = this.getStrikeCount(number);
    const ballCount = this.getBallCount(number, strikeCount);
    return { strikeCount, ballCount };
  }

  setAnswer() {
    for (let i = 0; i < this.ANSWER_LENGTH; i++) {
      this.answer += Random.pickNumberInRange(1, 9).toString();
    }
  }
}

// 콘솔 테스팅 용도
new App().play();

export default App;
