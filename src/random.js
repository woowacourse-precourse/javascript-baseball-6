import { Random } from "@woowacourse/mission-utils";

const pickRandomThreeNumbers = () => {
  const RESULT_SIZE = 3;
  const pickedNumbers = new Array(RESULT_SIZE).fill().map((_) => Random.pickNumberInRange(1, 9));

  const isNotDuplicate = new Set(pickedNumbers).size === RESULT_SIZE;
  return isNotDuplicate ? pickedNumbers : pickRandomThreeNumbers();
};

export { pickRandomThreeNumbers };
