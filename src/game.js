import { MissionUtils } from '@woowacourse/mission-utils';
import getComputerNumbers from './utils/getComputerNumbers.js';
import getPlayerNumbers from './utils/getPlayerNumbers.js';
import getResult from './utils/getResult.js';
import validate from './utils/validate.js';
import { ERROR_MESSAGE } from './constants.js';

export default async function game() {
  const computerNumbers = getComputerNumbers();

  let result = '';
  while (result !== '3스트라이크') {
    const playerNumbers = await getPlayerNumbers();
    result = getResult(computerNumbers, playerNumbers);
  }

  const input = result === '3스트라이크' && (await enterOption());
  if (input === 1) {
    await game();
  } else {
    return;
  }
}

const enterOption = async () => {
  MissionUtils.Console.print(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
  );
  const input = await MissionUtils.Console.readLineAsync('');
  if (validate(input)) {
    return +input;
  } else {
    throw new Error(ERROR_MESSAGE);
  }
};
