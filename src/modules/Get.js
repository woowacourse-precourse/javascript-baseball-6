import { Random } from '@woowacourse/mission-utils';

class Get {
  static randomList() {
    const list = [];
    while (list.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!list.includes(number)) list.push(number);
    }
    return list;
  }

  static countsFrom(originList, comparisonList) {
    const counts = { ball: 0, strike: 0 };
    counts.ball = Get.intersectionSize(originList, comparisonList);
    counts.strike = Get.strikeCount(originList, comparisonList);
    counts.ball -= counts.strike;
    return counts;
  }

  static intersectionSize(arrayA = [], arrayB = []) {
    let size = 0;
    arrayB.forEach((number) => {
      if (arrayA.includes(number)) size++;
    });
    return size;
  }

  static strikeCount(originList, comparisonList) {
    let count = 0;
    comparisonList.forEach((number, index) => {
      if (originList.indexOf(number) == index) count++;
    });
    return count;
  }
}

export default Get;