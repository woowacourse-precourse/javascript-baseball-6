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

class GuessNumber {
  constructor() {
    this.guessNumberArray = [];
    this.inputGuessNumber();
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
}

export default GuessNumber;
