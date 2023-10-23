import { MissionUtils } from "@woowacourse/mission-utils";
import throwInvalidInputErrorMessage from "./throwInvalidInputErrorMessage.js";
import CheckInputValidation from "./checkInputValidation.js";

async function parseInputToArray() {
  try {
    const INPUT = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    const IS_INPUT_VALID = await CheckInputValidation(INPUT);

    if (IS_INPUT_VALID) {
      const VALID_INPUT_ARRAY = INPUT.split("").map((item) => parseInt(item));
      return VALID_INPUT_ARRAY;
    } else {
      const FAIL_TO_PARSE_INPUT = "입력 값이 유효성 검사를 통과하지 못했습니다";
      throw FAIL_TO_PARSE_INPUT;
    }
  } catch (error) {
    throwInvalidInputErrorMessage(error);
  }
}

export default parseInputToArray;
