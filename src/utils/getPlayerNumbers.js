import { MissionUtils } from '@woowacourse/mission-utils';
import validate from './validate.js';

export default async function getPlayerNumbers() {
  const playerNumbers = await MissionUtils.Console.readLineAsync(
    '숫자를 입력해주세요 : '
  );

  if (!validate(playerNumbers)) {
    throw new Error('[Error] 입력 값이 잘못된 형식입니다. 게임을 종료합니다.');
  }
}
