import { Console, Random } from "@woowacourse/mission-utils";

class App {
  ANSWER_LENGTH = 3;
  answer = "";

  async play() {
    this.setAnswer();
    this.printStartMessage();
    this.playOneRound();
  }

  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async playOneRound() {
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!this.isNumberIsValid(number)) {
      throw Error("[Error]");
    }

    const { strikeCount, ballCount } = this.getJudgedCountsFor(number);

    this.printRoundResult({ strikeCount, ballCount });
  }

  printRoundResult({ strikeCount, ballCount }) {
    if (ballCount > 0 && strikeCount > 0) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      return;
    }

    if (ballCount === 0 && strikeCount === 0) {
      Console.print("낫싱");
      return;
    }

    if (ballCount > 0) {
      Console.print(`${ballCount}볼`);
      return;
    }

    Console.print(`${strikeCount}스트라이크`);
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
    this.answer = "";
    for (let i = 0; i < this.ANSWER_LENGTH; i++) {
      this.answer += Random.pickNumberInRange(1, 9).toString();
    }
  }
}

// 콘솔 테스팅 용도
new App().play();

export default App;
