import { MissionUtils } from '@woowacourse/mission-utils';
import getComputerNumbers from './utils/getComputerNumbers.js';
import getPlayerNumbers from './utils/getPlayerNumbers.js';
import getResult from './utils/getResult.js';

export default async function game() {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  const computerNumbers = getComputerNumbers();
  const playerNumbers = await getPlayerNumbers();
  getResult(computerNumbers, playerNumbers);
}
