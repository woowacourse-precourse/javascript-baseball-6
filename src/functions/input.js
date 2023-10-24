import { Console } from '@woowacourse/mission-utils';
import InputError from '../errors/input-error';
import validate from '../utils/validator';

/** 숫자 입력을 받아서 반환하는 함수 */
export async function input() {
  const inputString = await Console.readLineAsync('숫자를 입력해주세요 : ');

  const numbers = inputString.split('').map(Number);
  validate(numbers);

  return numbers;
}

/** 계속할지 여부를 묻는 함수 */
export async function askContinue() {
  const inputString = await Console.readLineAsync(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  );

  if (inputString === '1') return true;
  if (inputString === '2') return false;
  throw new InputError('1 또는 2를 입력해주세요.');
}
