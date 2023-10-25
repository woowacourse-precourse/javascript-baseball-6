import { Console } from '@woowacourse/mission-utils';

export default async function() {
  const USER_INPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');

  return USER_INPUT;
}