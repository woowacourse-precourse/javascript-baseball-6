import { Random } from '@woowacourse/mission-utils';

class Calculate {
  static randomList() {
    const list = [];
    while (list.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!list.includes(number)) list.push(number);
    }
    return list;
  }

  static counts(originList, checkList) {
    const counts = { ballCount: 0, strikeCount: 0 };
    counts.ballCount = Calculate.sameCount(originList, checkList);
    counts.strikeCount = Calculate.includingCount(originList, checkList);
    counts.ballCount -= counts.strikeCount;
    return counts;
  }

  static sameCount(originList, checkList) {
    let sameElementCount = 0;
    checkList.forEach((number) =>
      originList.includes(number) ? sameElementCount++ : 0
    );
    return sameElementCount;
  }

  static includingCount(originList, checkList) {
    let includingElementCount = 0;
    checkList.forEach((number, index) =>
      (originList.indexOf(number) == index) ? includingElementCount++ : 0
    );
    return includingElementCount;
  }
}

export default Calculate;