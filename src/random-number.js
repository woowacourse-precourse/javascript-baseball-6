import { Random } from '@woowacourse/mission-utils';

export const randomNumber = () => {
  const computer = [];

  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (computer.includes(number)) {
      continue;
    }
    computer.push(number);
  }
  return computer;
};