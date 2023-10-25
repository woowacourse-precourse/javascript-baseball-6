import { Random } from "@woowacourse/mission-utils";

export const createNumber = () => {
  const COMPUTER = [];
  for (let i = 0; i < 3; ) {
    const NUMBER = Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)) {
      COMPUTER.push(NUMBER);
      i++;
    }
  }
  return COMPUTER;
};
