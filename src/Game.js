import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_STATUS, SCORE, SETTING } from './constants';

const { SIZE, MIN_NUMBER, MAX_NUMBER } = SETTING;
const { BALL, STRIKE, NOTHING } = SCORE;

export class Game {
  constructor() {
    /** @type {string} */
    this.status = GAME_STATUS.READY;
    /** @type {Array<number>} */
    this.answer = this.generateRandomNumber();
  }

  /**
   * @description 1(MIN_NUMBER) ~ 9(MAX_NUMBER) 사이의 랜덤한 숫자 배열을 반환하는 함수
   * @returns {Array<number>} computer: 길이가 3(SIZE)인 랜덤 숫자 배열
   */
  generateRandomNumber() {
    const computer = [];
    while (computer.length < SIZE) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  /**
   * @param {Array<string>} num: 길이가 3(SIZE)인 사용자가 입력한 문자열 배열
   * @description 사용자가 입력한 숫자와 랜덤 숫자를 비교하여 BALL, STRIKE 정보를 저장하는 함수
   * - 숫자가 있으나 위치가 다른 경우 BALL
   * - 숫자와 위치가 일치한 경우 STRIKE
   * - 아무것도 일치하지 않으면 낫싱 (0볼0스트라이크)
   * @returns {Map<string, number>} score: BALL과 STRIKE 정보를 담은 맵 객체
   */
  compareScore(input) {
    const num = input.split('').map(Number);
    const answer = this.answer;
    let score = new Map();
    score.set(BALL, 0);
    score.set(STRIKE, 0);

    for (let i = 0; i < SIZE; i++) {
      if (num[i] === answer[i]) {
        score.set(STRIKE, score.get(STRIKE) + 1);
      } else if (answer.includes(num[i])) {
        score.set(BALL, score.get(BALL) + 1);
      }
    }

    return score;
  }

  /**
   * @param {Map<string, number>} score: BALL과 STRIKE 정보를 담은 맵 객체
   * @description 저장된 BALL, STRIKE 정보를 출력하기 위한 문자열을 만드는 함수
   * @returns {string} message: 판정결과 문자열
   */
  getScoreMessage(score) {
    let message = []; 
    let ball = score.get(BALL);
    let strike = score.get(STRIKE);

    if (ball > 0) {
      message.push(`${ball}${BALL}`);
    }

    if (strike > 0) {
      message.push(`${strike}${STRIKE}`);
    }

    if (ball === 0 && strike === 0) {
      message.push(`${NOTHING}`);
    }
    
    return message.join(' ');
  }
}
