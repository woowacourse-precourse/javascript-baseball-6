import { Console } from "@woowacourse/mission-utils";
import Validator from "../validator/Validator.js";
import ValidationError from "../validator/ValidationError.js";
import SETTING from "../constants/setting.js";

const InputView = {
  readGuessNumber: async () => {
    const { SIZE, RANGE: { MIN, MAX } } = SETTING.RULE;
    const guessNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");

    if (!Validator.hasUniqueNumbers(guessNumber)) {
      throw new ValidationError("[ERROR] 숫자가 중복되었습니다. 게임을 종료합니다.");
    }

    if (!Validator.isValidLength(guessNumber, { size: SIZE })) {
      throw new ValidationError(`[ERROR] ${SIZE}자리의 숫자가 아닙니다. 게임을 종료합니다.`);
    }

    if (!Validator.isValidRange(guessNumber, { min: MIN, max: MAX })) {
      throw new ValidationError(`[ERROR] ${MIN}~${MAX} 사이의 숫자가 아닙니다. 게임을 종료합니다.`);
    }

    return Number(guessNumber);
  },
  readRestartAnswer: async () => {
    const { RESTART, EXIT } = SETTING.COMMAND;
    const answer = await Console.readLineAsync(`게임을 새로 시작하려면 ${RESTART}, 종료하려면 ${EXIT}를 입력하세요.\n`);

    if (!Validator.isExitOrRestart(answer, { restart: RESTART, exit: EXIT })) {
      throw new ValidationError(`[ERROR] ${RESTART} 또는 ${EXIT}를 입력하지 않았습니다. 게임을 종료합니다.`);
    }

    return Number(answer);
  }
};

export default InputView;