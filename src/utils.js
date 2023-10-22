import { MissionUtils, Console } from "@woowacourse/mission-utils";

/**
 * @param {string} message - 출력할 메시지
 * @description 사용자에게 메시지를 출력하는 함수
 */
const printMessage = (message) => {
  return Console.print(message);
};

/**
 * @param {string} message - 출력할 메시지
 * @description 사용자에게 메시지를 출력하고 입력을 받는 함수
 * @returns {Promise<string>} 사용자의 입력
 * @example
 * const input = await readLineAsync("숫자를 입력해주세요");
 * console.log(input); // "123"
 */
const readLineAsync = async (message) => {
  return Console.readLineAsync(message);
};

/**
 * @param {number} min - 최소값
 * @param {number} max - 최대값
 * @description min과 max 사이의 랜덤한 숫자를 반환하는 함수
 * @returns {number} 랜덤한 숫자
 * @example
 * const randomNumber = pickNumberInRange(1, 10);
 * console.log(randomNumber); // 7
 */
const pickNumberInRange = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};

/**
 * @param {string} message - 에러 메시지
 * @param {boolean} condition - 에러가 발생할 조건
 * @description condition이 true일 경우, 에러 메시지를 전파하는 함수
 */
const throwError = (message, condition = true) => {
  if (!condition) {
    return;
  }

  throw new Error(message);
};

export { printMessage, readLineAsync, pickNumberInRange, throwError };
