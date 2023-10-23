import { MissionUtils } from "@woowacourse/mission-utils";
import throwInvalidInputErrorMessage from "./throwInvalidInputErrorMessage.js";
import CheckInputValidation from "./checkInputValidation.js";
import handleError from "./handleError.js";

async function handleInput() {
  try {
    const INPUT = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    const IS_INPUT_VALID = await CheckInputValidation(INPUT);

    if (IS_INPUT_VALID) {
      const VALID_INPUT_ARRAY = INPUT.split("").map((item) => parseInt(item));
      return VALID_INPUT_ARRAY;
    }
  } catch (error) {
    if (error) {
      handleError(error);
    }
  }
}

export default handleInput;
