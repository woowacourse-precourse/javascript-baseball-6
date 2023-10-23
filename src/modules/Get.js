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

  static intersectionSize(originList, comparisonList) {
    let size = 0;
    comparisonList.forEach((number) =>
      originList.includes(number) ? size++ : 0
    );
    return size;
  }

  static strikeCount(originList, comparisonList) {
    let count = 0;
    comparisonList.forEach((number, index) =>
      (originList.indexOf(number) == index) ? count++ : 0
    );
    return count;
  }
}

export default Get;