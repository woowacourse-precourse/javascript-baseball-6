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
}

export default handleInput;
