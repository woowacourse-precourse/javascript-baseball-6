import { Console } from '@woowacourse/mission-utils';

const getPlayer = async () => {
  const strPlayer = await Console.readLineAsync('숫자를 입력해 주세요: ');
  let numPlayer = [];

  numPlayer = strPlayer.split('').map(Number);
  if (numPlayer.length !== 3) {
    throw new Error('[ERROR] 3자리 숫자를 입력해 주세요.');
  } else if (numPlayer.some((num) => Number.isNaN(num))) {
    throw new Error('[ERROR] 숫자를 입력해 주세요.');
  } else if (new Set(numPlayer).size !== 3) {
    throw new Error('[ERROR] 중복되지 않은 3자리 숫자를 입력해 주세요.');
  }

  return numPlayer;
};

export { getPlayer };
