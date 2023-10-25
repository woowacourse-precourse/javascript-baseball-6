import { Console } from "@woowacourse/mission-utils";

class IOManager {
  constructor() {
    this.ANSWER_LENGTH = 3;
    this.NUMBER_NOT_VALID_MESSAGE = "숫자가 잘못된 형식입니다.";
  }

  throwError(msg = "") {
    if (msg !== "") msg = ` ${msg}`;
    throw new Error(`[ERROR]${msg}`);
  }

  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  printEndMessage() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
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

  async askReplay() {
    const WANT_REPLAY = "1";
    const END_GAME = "2";

    const response = await Console.readLineAsync(
      `게임을 새로 시작하려면 ${WANT_REPLAY}, 종료하려면 ${END_GAME}를 입력하세요. : `
    );

    if (response !== WANT_REPLAY && response !== END_GAME)
      this.throwError(this.NUMBER_NOT_VALID_MESSAGE);
    return response === WANT_REPLAY;
  }

  isSameAsAnswerLength(number) {
    return number.length === this.ANSWER_LENGTH;
  }

  isNumberIsValid(number) {
    return this.isSameAsAnswerLength(number) && this.isNonZeroDigits(number);
  }

  isNonZeroDigits(number) {
    for (const eachNumber of number) {
      if (!"123456789".includes(eachNumber)) return false;
    }

    return true;
  }

  async askNumber() {
    const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

    console.log(number);

    if (!this.isNumberIsValid(number))
      this.throwError(this.NUMBER_NOT_VALID_MESSAGE);

    return number;
  }
}

export default IOManager;
