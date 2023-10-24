import { Random } from "@woowacourse/mission-utils";

export const generateRandomNum = () => {
  const computer = [];
  while (computer.length < 3) {
    const num = Random.pickNumberInRange(1, 9);
    if (!computer.includes(num)) {
      computer.push(num);
    }
  }
  return computer;
};
