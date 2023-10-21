import { MissionUtils } from '@woowacourse/mission-utils';
import { generateRandomBallNumber } from './Ball.js';

const answer = generateRandomBallNumber();

/**
 * input을 answer와 비교한 후 Strike, Ball 개수 반환
 * @param {String} input
 * @returns {[Number, Number]} Strike, Ball 개수
 */

const getResult = (input) => {
  const countBall = [...input].filter((el) => answer.includes(~~el)).length;
  const countStrike = [...input].filter((num, i) => ~~num === answer[i]).length;
  return [countBall, countStrike];
};

/**
 * 입력 값과 정답 비교 후 결과 반환
 * @param {String} input 
 * @returns {String} 결과
 */
const resultMessage = (input) => {
    let resultText = [];
  const [ball, strike] = getResult(input);
  if(ball === 0 && strike ===0) resultText.push('낫싱');
  if(ball) resultText.push(`${ball}볼`);
  if(strike) resultText.push(`${strike}스트라이크`);
  return resultText.join(' ');
};

console.log(answer);
console.log(getResult("246"));
console.log(resultMessage("246"));