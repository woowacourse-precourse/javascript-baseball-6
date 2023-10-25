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

  validation() {
    if (hasNaNArray(this.guessNumberArray)) {
      throw new CustomError(EXCEPTION_CASE.NUMBER_FORMAT_EXCEPTION);
    }
    if (isWrongLength(this.guessNumberArray, GAME_INFO.GUESS_NUMBER_LENGTH)) {
      throw new CustomError(EXCEPTION_CASE.LENGTH_EXCEPTION);
    }
    if (
      hasOutOfRangeArray(
        this.guessNumberArray,
        GAME_INFO.MIN_NUMBER,
        GAME_INFO.MAX_NUMBER
      )
    ) {
      throw new CustomError(EXCEPTION_CASE.RANGE_EXCEPTION);
    }
    if (hasSameNumberArray(this.guessNumberArray)) {
      throw new CustomError(EXCEPTION_CASE.DUPLICATION_EXCEPTION);
    }
  }

  async inputGuessNumber() {
    try {
      this.guessNumberArray = Array.from(
        await Console.readLineAsync("숫자를 입력해주세요 : ")
      ).map(Number);
      this.validation();
    } catch (e) {
      if (e.name === "CustomError") {
        console.log(e.message);
      }
    }
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

  async getResult() {
    await this.inputGuessNumber();

    const strike = this.getStrike();
    const ball = this.getBall();

    if (strike === GAME_INFO.GUESS_NUMBER_LENGTH) {
      console.log(`${GAME_INFO.GUESS_NUMBER_LENGTH}스트라이크`);
      return true;
    }
    if (ball > 0 && strike > 0) {
      console.log(`${ball}볼 ${strike}스트라이크`);
      return false;
    }
    if (ball > 0) {
      console.log(`${ball}볼`);
      return false;
    }
    if (strike > 0) {
      console.log(`${strike}스트라이크`);
      return false;
    }

    console.log("낫싱");
    return false;
  }
}

export default GuessNumber;
