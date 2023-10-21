import { MissionUtils } from '@woowacourse/mission-utils';
import { generateRandomBallNumber } from './Ball.js';
// 스트링를 입력 받으면 해당 값의 결과를 출력
const answer = generateRandomBallNumber();

/**
 * input을 answer와 비교한 후 Strike, Ball 개수 반환
 * @param {String} input 
 * @returns {[Number, Number]} Strike, Ball 개수
 */

const getResult = (input) => {
  const countStrike = [...input].filter((num, i) => ~~num === answer[i]).length;
  const countBall = [...input].filter(el => answer.includes(~~el)).length;
  return [countStrike, countBall];
};
