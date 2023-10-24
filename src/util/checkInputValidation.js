import throwInvalidInputErrorMessage from "./throwInvalidInputErrorMessage.js";

// 입력값 유효성 검증 기능
async function checkInputIsNumber(inputText) {
  try {
    const REGEX_NUMBER = /^[1-9]{3}$/;
    const INPUT_IS_VALID = REGEX_NUMBER.test(inputText);
    if (INPUT_IS_VALID) {
      return true;
    } else {
      let ERROR_MESSAGE = ``;
      if (inputText.includes("0")) {
        const ZERO_IN_INPUT = "0은 입력할 수 없습니다";
        ERROR_MESSAGE += ZERO_IN_INPUT;
      } else {
        const DEFAULT_ERROR_MESSAGE = "입력값이 3자리의 숫자가 아닙니다";
        ERROR_MESSAGE += DEFAULT_ERROR_MESSAGE;
      }
      return ERROR_MESSAGE;
    }
  } catch (error) {
    throwInvalidInputErrorMessage(error);
    return false;
  }
}

// 입력값 내 중복 값 검증 기능
async function checkInputHasDuplicate(validArray) {
  try {
    const INPUT_SET = new Set(validArray);
    if (INPUT_SET.size !== validArray.length) {
      const ERROR_MESSAGE = "입력값에 중복된 숫자가 존재합니다";
      throw ERROR_MESSAGE;
    } else {
      return true;
    }
  } catch (error) {
    throwInvalidInputErrorMessage(error);
    return false;
  }
}

async function checkInputValidation(input) {
  try {
    const IS_INPUT_NUMBER_AND_LENGTH_IS_THREE = await checkInputIsNumber(input);
    if (IS_INPUT_NUMBER_AND_LENGTH_IS_THREE === true) {
      const INPUT_ARRAY = input.split("").map((item) => parseInt(item));
      const IS_INPUT_HAS_NO_DUPLICATED_NUMBER = await checkInputHasDuplicate(
        INPUT_ARRAY
      );
      const IS_INPUT_VALID = IS_INPUT_HAS_NO_DUPLICATED_NUMBER;
      return IS_INPUT_VALID;
    } else {
      const VALID_ERROR = IS_INPUT_NUMBER_AND_LENGTH_IS_THREE;
      throw VALID_ERROR;
    }
  } catch (error) {
    throwInvalidInputErrorMessage(error);
  }
}

export default checkInputValidation;
