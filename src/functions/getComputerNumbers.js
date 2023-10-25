import { Random } from "@woowacourse/mission-utils";

const getComputerNumbers = () => {
  const numbers = [];
  while (numbers.length < 3) {
    const num = Random.pickNumberInRange(1, 9);
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
};

export default getComputerNumbers;
