import { Random } from "@woowacourse/mission-utils";

export const RandomNumGenerator = (size) => {
  const randomnum = [];
  while (randomnum.length < size) {
    const number = Random.pickNumberInRange(1, 9);
    if (!randomnum.includes(number)) {
      randomnum.push(number);
    }
  }
  return randomnum;
};
