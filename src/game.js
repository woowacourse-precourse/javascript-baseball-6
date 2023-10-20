import { MissionUtils } from '@woowacourse/mission-utils';
import getComputerNumbers from './utils/getComputerNumbers.js';
import getPlayerNumbers from './utils/getPlayerNumbers.js';

export default function game() {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  getComputerNumbers();
  getPlayerNumbers();
}
