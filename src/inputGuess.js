import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from './constatns/constants.js';

// 플레이어의 추측값 유효성 검사 후 반환
async function inputGuess() {
  let input = '';
  input = await Console.readLineAsync(MESSAGE.GUESS_INPUT);

  /**
   * 입력값 유효성 검증
   * 1. 숫자로 이루어져 있어야 함
   * 2. 세자리 숫자여야 함
   * 3. 서로 다른 숫자여야 함
   * 올바르지 않은 input의 경우 error 예외 발생
   */
  if (Number.isNaN(input) || input.length !== 3 || isDuplicated(input)) {
    throw Error(ERROR.GUESS_FORMAT);
  }

  return input;
}

// str의 구성 문자가 서로 다르면 true, 아니면 false 반환
function isDuplicated(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      return true;
    }
  }

  return false;
}

export default inputGuess;
