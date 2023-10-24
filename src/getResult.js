import { Console } from "@woowacourse/mission-utils";

const getResult = (computer, user) => {
  let ball = 0;
  let strike = 0;
  let result = "";

  computer.forEach((number, index) => {
    if (number === user[index]) {
      strike++;
    } else if (computer.includes(user[index])) {
      ball++;
    }
  });

  if (ball > 0 && strike > 0) {
    result = `${ball}볼 ${strike}스트라이크`;
  } else if (ball > 0) {
    result = `${ball}볼`;
  } else if (strike > 0) {
    result = `${strike}스트라이크`;
    if (strike === 3) {
      Console.print("3스트라이크");
      return true;
    }
  } else {
    result = "낫싱";
  }
  
  Console.print(result);
  return false;
};

export { getResult };