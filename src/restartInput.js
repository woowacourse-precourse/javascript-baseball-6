import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from './constatns/constants.js';

// 정답을 맞춘 경우, 재시작 input을 받고 유효성 검사를 통해 반환
async function restartInput() {
  let input = '';
  Console.print(MESSAGE.END_GAME);
  input = await Console.readLineAsync(MESSAGE.RESTART_INPUT);

  // 올바르지 않은 input 시 error 예외 발생
  if (input !== '1' && input !== '2') {
    throw Error(ERROR.RESTART_FORMAT);  
  }
  
  return input;
}

export default restartInput;
