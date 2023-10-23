import { MissionUtils } from "@woowacourse/mission-utils";
import throwInvalidInputErrorMessage from "./throwInvalidInputErrorMessage.js";

async function handleInput() {
  // 입력값 유효성 검증 기능
  async function checkInputIsNumber(inputText) {
    try {
      const REGEX_NUMBER = /^[1-9]{3}$/;
      const INPUT_IS_VALID = REGEX_NUMBER.test(inputText);
      if (INPUT_IS_VALID) {
        const SPLITED_TEXT = inputText.split("").map((item) => parseInt(item));
        return SPLITED_TEXT;
      } else {
        const ERROR_MESSAGE = "입력값이 3자리의 숫자가 아닙니다";
        throwInvalidInputErrorMessage(ERROR_MESSAGE);
      }
    } catch (error) {
      if (error) {
        throw error;
      }
    }
  }

  // 입력값 내 중복 값 검증 기능
  async function checkInputHasDuplicate(validInput) {
    try {
      for (
        let checkIndex = 0, compareIndex = 1;
        checkIndex < validInput.length;
        checkIndex++, compareIndex++
      ) {
        if (validInput[checkIndex] === validInput[compareIndex]) {
          const ERROR_MESSAGE = "입력값에 중복된 숫자가 존재합니다";
          throwInvalidInputErrorMessage(ERROR_MESSAGE);
        }
      }
      return validInput;
    } catch (error) {
      if (error) {
        throw error;
      }
    }
  }

  try {
    const INPUT = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    const NUMBER_INPUT = await checkInputIsNumber(INPUT);
    const VALID_INPUT = await checkInputHasDuplicate(NUMBER_INPUT);
    return VALID_INPUT;
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default handleInput;
