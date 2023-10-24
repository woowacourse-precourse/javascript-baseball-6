import { Random } from "@woowacourse/mission-utils";

const getComputer = () => {
  const COMPUTER = [];

  while (COMPUTER.length < 3) {
    const NUM = Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUM)) {
      COMPUTER.push(NUM);
    }
  }
  return COMPUTER;
};

export { getComputer };
