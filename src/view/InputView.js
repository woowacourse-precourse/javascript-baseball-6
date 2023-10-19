import { Console } from '@woowacourse/mission-utils';

export async function getPlayerInput() {
  try {
    return Console.readLineAsync('숫자를 입력해주세요');
  } catch (error) {
    return Console.print(error);
  }
}
