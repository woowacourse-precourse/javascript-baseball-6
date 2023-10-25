import { Console } from "@woowacourse/mission-utils";

class GuessNumber {
  constructor() {
    this.guessNumber = "";
    this.inputGuessNumber();
  }

  async inputGuessNumber() {
    this.guessNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
  }
}

export default GuessNumber;
