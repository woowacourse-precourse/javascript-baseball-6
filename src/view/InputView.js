import { Console } from "@woowacourse/mission-utils";
import Validator from "../validator/Validator.js";
import ValidationError from "../validator/ValidationError.js";

const InputView = {
  readGuessNumber: async () => {
    const guessNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!Validator.hasUniqueNumbers(guessNumber)) {
      throw new ValidationError("숫자가 중복되었습니다. 게임을 종료합니다.");
    }

    if (!Validator.isValidLength(guessNumber, 3)) {
      throw new ValidationError("3자리의 숫자가 아닙니다. 게임을 종료합니다.");
    }

    if (!Validator.isValidRange(guessNumber, 1, 9)) {
      throw new ValidationError("1~9 사이의 숫자가 아닙니다. 게임을 종료합니다.");
    }

    return guessNumber;
  },
  readRestartAnswer: async () => {
    const answer = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

    if (!Validator.isExitOrRestart(answer, 1, 2)) {
      throw new ValidationError("1 또는 2를 입력하지 않았습니다. 게임을 종료합니다.");
    }

    return answer;
  }
};

export default InputView;