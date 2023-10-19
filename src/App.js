import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.ANSWER_LENGTH = 3;
    this.answer = "";
  }

  async play() {
    this.printStartMessage();

    while (true) {
      await this.playAGame();

      const wantReplay = await this.askReplay();
      if (!wantReplay) break;
    }
  }

  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  printEndMessage() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  async askReplay() {
    const WANT_REPLAY = "1";
    const END_GAME = "2";

    const response = await Console.readLineAsync(
      `게임을 새로 시작하려면 ${WANT_REPLAY}, 종료하려면 ${END_GAME}를 입력하세요. : `
    );

    if (response !== WANT_REPLAY && response !== END_GAME) this.throwError();
    return response === WANT_REPLAY;
  }

  async playAGame() {
    this.setAnswer();

    while (true) {
      const isGameEnd = await this.playOneRound();
      if (isGameEnd) break;
    }

    this.printEndMessage();
  }

  async playOneRound() {
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!this.isNumberIsValid(number)) this.throwError();

    const { strikeCount, ballCount } = this.getJudgedCountsFor(number);

    this.printRoundResult({ strikeCount, ballCount });

    return this.isGameEnd(strikeCount);
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

  isNonZeroDigits(number) {
    for (const eachNumber of number) {
      if (!"123456789".includes(eachNumber)) return false;
    }

    return true;
  }

  isSameAsAnswerLength(number) {
    return number.length === this.ANSWER_LENGTH;
  }

  isNumberIsValid(number) {
    return this.isSameAsAnswerLength(number) && this.isNonZeroDigits(number);
  }

  isSameIndexWithAnswer(idx, number) {
    return this.answer[idx] === number[idx];
  }

  getStrikeCount(number) {
    let count = 0;

    for (const idx in number) {
      if (this.isSameIndexWithAnswer(idx, number)) count++;
    }

    return count;
  }

  isAnswerIncludes(number) {
    return this.answer.includes(number);
  }

  getBallCount(number, strikeCount) {
    let count = 0;

    for (const eachNumber of number) {
      if (this.isAnswerIncludes(eachNumber)) count++;
    }

    return count - strikeCount;
  }

  getJudgedCountsFor(number) {
    const strikeCount = this.getStrikeCount(number);
    const ballCount = this.getBallCount(number, strikeCount);
    return { strikeCount, ballCount };
  }

  generateRandomNonZeroDigit() {
    return Random.pickNumberInRange(1, 9).toString();
  }

  setAnswer() {
    this.answer = "";
    for (let i = 0; i < this.ANSWER_LENGTH; i++) {
      this.answer += this.generateRandomNonZeroDigit();
    }
  }

  isGameEnd(strikeCount) {
    return strikeCount === this.ANSWER_LENGTH;
  }

  throwError() {
    throw Error("[ERROR]");
  }
}

export default App;
