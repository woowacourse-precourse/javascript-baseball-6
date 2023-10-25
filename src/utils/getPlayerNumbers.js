import { MissionUtils } from '@woowacourse/mission-utils';
import validate from './validate.js';
import { ERROR_MESSAGE } from '../constants.js';

export default async function getPlayerNumbers() {
  const playerNumbers = await MissionUtils.Console.readLineAsync(
    '숫자를 입력해주세요 : '
  );

  if (validate(playerNumbers)) {
    return +playerNumbers;
  } else {
    throw new Error(ERROR_MESSAGE);
  }
}
