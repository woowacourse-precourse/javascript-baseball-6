import { MissionUtils } from '@woowacourse/mission-utils';

export default function getComputerNumbers() {
  let computerNumbers = '';

  while (computerNumbers.length !== 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computerNumbers.includes(number)) {
      computerNumbers += number;
    }
  }

  return +computerNumbers;
}
