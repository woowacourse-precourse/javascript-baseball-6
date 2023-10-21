import { Random, Console } from "@woowacourse/mission-utils";

//겹치지 않는 숫자 생성하기
export function makeRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    let newNumber = Random.pickNumberInRange(1, 9);
    if (computer.indexOf(newNumber) == -1) {
      computer.push(newNumber);
    }
  }
  return computer;
}

//숫자가 정답인지 체크하기
export function checkNumber(computer, user) {
  let result = {
    ball: 0,
    strike: 0,
  };
  const userArr = [...user].map((num) => parseInt(num));
  userArr.map((num, idx) => {
    if (computer[idx] === num) {
      result.strike++;
    } else if (computer.includes(num)) {
      result.ball++;
    }
  });
  makeText(result);
  return result;
}

//텍스트 생성하기
function makeText(result) {
  const { ball, strike } = result;
  let answer = [];
  if (ball > 0) {
    answer.push(`${ball}볼`);
  }
  if (strike > 0) {
    answer.push(`${strike}스트라이크`);
  }
  if (ball == 0 && strike == 0) {
    answer.push("낫싱");
  }
  Console.print(answer.join(" "));
}
