import { Console } from '@woowacourse/mission-utils';

function checkResult(computerNumber, userNumber) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < computerNumber.length; i++) {
    if (computerNumber[i] === userNumber[i]) {
      strike++;
    } else if (computerNumber.includes(userNumber[i])) {
      ball++;
    }
  }
  printResult(ball, strike);
  return strike === 3;
}

function printResult(ball, strike) {
  let result = '';
  if ((ball & strike) === 0) result = '낫싱 ';
  if (ball > 0) result += ball + '볼 ';
  if (strike > 0) result += strike + '스트라이크';
  Console.print(result);
}

export { checkResult };
