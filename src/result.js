import { Console } from "@woowacourse/mission-utils";

export default function getResult(answer, number) {
  let strike = getStrikeCount(answer, number);
  let ball = getBallCount(answer, number);

  printResult(strike, ball);

  if (strike === 3)
    return 1;
  return 0;
}

function printResult(strike, ball) {
  let str = '';
  if (strike === 0 && ball === 0)
    str += '낫싱'
  if (ball > 0)
    str += ball + '볼 '
  if (strike > 0)
    str += strike + '스트라이크'
  Console.print(str);
}

const getStrikeCount = (answer, number) => {
  let cnt = 0;
  number.forEach((num, idx) => {
    if (num === answer[idx])
      cnt++;
  })
  return cnt;
}

const getBallCount = (answer, number) => {
  let cnt = 0;
  number.forEach((num, idx) => {
    if (answer.includes(num) && answer.indexOf(num) !== idx)
      cnt++;
  })
  return cnt;
}