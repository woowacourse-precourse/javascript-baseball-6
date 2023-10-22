import { Console } from "@woowacourse/mission-utils";

const isStrike = (input, computer) => {
  if (input === computer) {
    return true;
  }
  return false;
};

const isBall = (input, computer) => {
  if (computer.includes(input)) {
    return true;
  }
  return false;
};

const checkStatus = (input, computer, index) => {
  const strikeStatus = isStrike(input, computer[index]);
  if (strikeStatus) return "strike";
  const ballStatus = isBall(input, computer);
  if (ballStatus) return "ball";
  return "nothing";
};

const compareNumber = (computerNumber, userNumber) => {
  const result = {
    strike: 0,
    ball: 0,
    nothing: 0,
  };
  userNumber.forEach((input, index) => {
    const status = checkStatus(input, computerNumber, index);
    result[status] += 1;
  });

  if (result.strike === 3) {
    Console.print("3스트라이크");
    return true;
  } else if (result.nothing === 3) {
    Console.print("낫싱");
  } else if (result.strike === 0) {
    Console.print(`${result.ball}볼`);
  } else if (result.ball === 0) {
    Console.print(`${result.strike}스트라이크`);
  } else if (result.ball && result.strike) {
    Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
  }
  return false;
};

export default compareNumber;
