import { Console } from '@woowacourse/mission-utils';

/**
 * @description 사용자에게 메세지를 출력하는 함수
 * @param message
 */
function print(message) {
  Console.print(message);
}

/**
 * @description 사용자에게 메세지를 입력받고, 받은 입력을 출력하는 함수
 * @param message
 * @return {Promise<string>}
 */
function input(message) {
  Console.readLineAsync(message);
}

export { print, input };
