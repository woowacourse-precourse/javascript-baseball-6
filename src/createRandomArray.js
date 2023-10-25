import { MissionUtils } from '@woowacourse/mission-utils';

function createRandomArray(count) {
  const array = [];

  while (array.length < count) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!array.includes(randomNum)) {
      array.push(randomNum);
    }
  }

  return array;
}

export default createRandomArray;
