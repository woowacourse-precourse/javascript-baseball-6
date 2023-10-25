import { Console } from "@woowacourse/mission-utils";
import NumberBaseballValidator from "./NumberbaseballValidator.js";

class NumberBaseballConsole {
  #validator;
  #STRIKE = "스트라이크";
  #BALL = "볼";
  #NOTHING = "낫싱";
  #START = "숫자 야구 게임을 시작합니다.";
  #NUMBERS_QUERY = "숫자를 입력해주세요 : ";
  #RESTART_QUERY;
  #END;
  #NUMBERS_ERROR;
  #RESTART_ERROR;
  constructor(startInclusive, endInclusive, count, restartNumber, endNumber) {
    this.#validator = new NumberBaseballValidator(1, 9, 3, 1, 2);
    this.#RESTART_QUERY = `게임을 새로 시작하려면 ${restartNumber}, 종료하려면 ${endNumber}를 입력하세요.`;
    this.#END = `${count}개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    this.#NUMBERS_ERROR = `[ERROR] ${startInclusive}부터 ${endInclusive}까지의 서로 다른 ${count}개의 숫자를 입력하세요.`;
    this.#RESTART_ERROR = `[ERROR] ${restartNumber}과 ${endNumber} 중 하나를 입력하세요.`;
  }

  print({ strike, ball }) {
    if (strike && ball)
      Console.print(ball + this.#BALL + " " + strike + this.#STRIKE);
    else if (strike) Console.print(strike + this.#STRIKE);
    else if (ball) Console.print(ball + this.#BALL);
    else Console.print(this.#NOTHING);
  }

  printStartMessage() {
    Console.print(this.#START);
  }

  async askNumbers() {
    const answer = await Console.readLineAsync(this.#NUMBERS_QUERY);
    const array = [...answer].map(Number);
    if (!this.#validator.validate(array)) throw new Error(this.#NUMBERS_ERROR);
    return array;
  }

  printEndMessage() {
    Console.print(this.#END);
  }

  async askRestart() {
    const answer = await Console.readLineAsync(this.#RESTART_QUERY);
    const number = Number(answer);
    if (!this.#validator.validateRestart(number))
      throw new Error(this.#RESTART_ERROR);
    return number;
  }
}

export default NumberBaseballConsole;
