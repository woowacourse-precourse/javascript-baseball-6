import { Console } from "@woowacourse/mission-utils";
import CustomError from "./CustomError.js";
import { GAME_INFO } from "./constants/baseballGameInfo.js";
import { EXCEPTION_CASE } from "./constants/exception.js";
import {
  hasNaNArray,
  hasOutOfRangeArray,
  isWrongLength,
  hasSameNumberArray,
} from "./utils/validation.js";
import {
  countMatchNumbersWithPos,
  countMatchNumbers,
} from "./utils/counting.js";

class GuessNumber {
  constructor(correctAnswerArray) {
    this.correctAnswerArray = correctAnswerArray;
    this.guessNumberArray = [];
  }

  async validation() {
    if (hasNaNArray(this.guessNumberArray)) {
      return Promise.reject(
        new CustomError(EXCEPTION_CASE.NUMBER_FORMAT_EXCEPTION)
      );
    }
    if (isWrongLength(this.guessNumberArray, GAME_INFO.GUESS_NUMBER_LENGTH)) {
      return Promise.reject(new CustomError(EXCEPTION_CASE.LENGTH_EXCEPTION));
    }
    if (
      hasOutOfRangeArray(
        this.guessNumberArray,
        GAME_INFO.MIN_NUMBER,
        GAME_INFO.MAX_NUMBER
      )
    ) {
      return Promise.reject(new CustomError(EXCEPTION_CASE.RANGE_EXCEPTION));
    }
    if (hasSameNumberArray(this.guessNumberArray)) {
      return Promise.reject(
        new CustomError(EXCEPTION_CASE.DUPLICATION_EXCEPTION)
      );
    }
  }

  async inputGuessNumber() {
    this.guessNumberArray = Array.from(
      await Console.readLineAsync("숫자를 입력해주세요 : ")
    ).map(Number);
    await this.validation();
    return true;
  }

  getStrike() {
    return countMatchNumbersWithPos(
      this.correctAnswerArray,
      this.guessNumberArray
    );
  }

  getBall() {
    return (
      countMatchNumbers(this.correctAnswerArray, this.guessNumberArray) -
      countMatchNumbersWithPos(this.correctAnswerArray, this.guessNumberArray)
    );
  }

  getResult() {
    const strike = this.getStrike();
    const ball = this.getBall();
    console.log(this.guessNumberArray, this.correctAnswerArray);

    if (strike === GAME_INFO.GUESS_NUMBER_LENGTH) {
      Console.print(
        `${GAME_INFO.GUESS_NUMBER_LENGTH}스트라이크\n${GAME_INFO.GUESS_NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
      return true;
    }
    if (ball > 0 && strike > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      return false;
    }
    if (ball > 0) {
      Console.print(`${ball}볼`);
      return false;
    }
    if (strike > 0) {
      Console.print(`${strike}스트라이크`);
      return false;
    }

    Console.print("낫싱");
    return false;
  }
}

export default GuessNumber;
