import { Random } from "@woowacourse/mission-utils";

export const createNumber = () => {
  const computer = [];
  for (let i = 0; i < 3; ) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
      i++;
    }
  }
  return computer;
};
