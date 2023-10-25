import { Random, Console } from "@woowacourse/mission-utils";

// 1~9까지 서로 다른 수로 이루어진 세자릿수 생성
export const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  console.log(computer.join(""))
  return computer.join("");
};

export const countBallStrike = (computerNumber, inputNumber) => {
  const computerArray = computerNumber.split("");
  const inputNumberArray = inputNumber.split("");
  let ball = 0;
  let strike = 0;
  let inform = [];

  for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      if (computerArray[computerIndex] === inputNumberArray[userIndex]) {
        if (computerIndex === userIndex) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }

  if (ball !== 0) {
    inform.push(`${ball}볼`);
  } 
  if (strike !== 0) {
    inform.push(`${strike}스트라이크`);
  } 

  let informText = "낫싱";
  if (inform.length > 0) {
    informText = inform.join('');
  }
  Console.print(informText);
};