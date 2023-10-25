import CONDITIONS from "../constants/Conditions.js";

/**
 * 입력값의 유효성을 검사하는 함수
 * @param {string} text 입력값
 * @returns {boolean} 유효성 여부
 *
 */
const CHECK_VALIDATION = (text) => {
  // 1. 입력값에 숫자 이외의 문자가 있는지 확인한다.
  // 2. 입력값이 3자리인지 확인한다.
  // 3. 입력값이 1~9 사이의 숫자인지 확인한다.
  if (!CONDITIONS.NUMBER_REGEX.test(text)) {
    return false;
  }

  // 4. 입력값의 각 자리가 서로 다른지 확인한다.
  const numberSet = new Set(text);
  return numberSet.size === CONDITIONS.NUMBER_LENGTH;
};

export default CHECK_VALIDATION;
