/**
 *
 * @param {string} inputStr
 * @returns number[]
 * @description 사용자로부터 입력받은 문자열을 숫자배열로 바꿔 리턴한다
 */
const convertInput = (inputStr) => {
  let result;
  // 공백제거
  result = inputStr.replace(/\s/, "");
  // 문자열을 배열로 변환하고 각 요소를 숫자로 변환
  result = result.split("").map((element) => parseInt(element));
  return result;
};
export default convertInput;
