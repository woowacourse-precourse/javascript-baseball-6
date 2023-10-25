import { Random, Console } from "@woowacourse/mission-utils";

const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const printResult = (strike, ball) => {
  let result = "낫싱";

  if (strike !== 0 && ball === 0) {
    result = `${strike}스트라이크`;
  }
  if (strike === 0 && ball !== 0) {
    result = `${ball}볼`;
  }
  if (strike !== 0 && ball !== 0) {
    result = `${ball}볼 ${strike}스트라이크`;
  }

  Console.print(result);
};

export { generateRandomNumber, printResult };
