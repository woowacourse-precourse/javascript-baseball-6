import { MissionUtils } from "@woowacourse/mission-utils";

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
        const ERROR_TEXT = "[ERROR] 숫자가 잘못된 형식입니다.";
        throw ERROR_TEXT;
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
          const ERROR_TEXT = "[ERROR] 숫자가 잘못된 형식입니다.";
          throw ERROR_TEXT;
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
    process.exit();
  }
}

export default handleInput;
