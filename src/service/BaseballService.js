import { MissionUtils } from '@woowacourse/mission-utils';
import { AnswerBalls, SubmittedBalls, TargetBall, TargetBalls } from '../domain/index.js';
import { MESSAGE } from '../constants/message.js';

export class BaseballService {
  #answer;

  #submittedCorrectly = null;

  constructor() {
    this.init();
  }

  static of() {
    return new BaseballService();
  }

  getAnswer() {
    return this.#answer;
  }

  getSubmittedCorrectly() {
    return this.#submittedCorrectly;
  }

  init() {
    this.#setRandomAnswer();
    this.#submittedCorrectly = null;
  }

  /**
   * 랜덤한 AnswerBalls를 생성 후 answer에 설정합니다.
   */
  #setRandomAnswer() {
    const randomNumbers = new Set();
    while (randomNumbers.size < TargetBalls.BALL_QUANTITY) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(TargetBall.MIN, TargetBall.MAX);
      randomNumbers.add(randomNumber);
    }
    this.#answer = AnswerBalls.of([...randomNumbers]);
  }

  /**
   * score를 기반으로 한 결과 메세지를 반환합니다.
   * @param {{
   *  strike: number,
   *  ball: number,
   * }} score
   * @returns {MESSAGE.nothing | MESSAGE.score}
   */
  #getGameResult({ strike, ball }) {
    const isNothing = !strike && !ball;
    const result = isNothing ? MESSAGE.nothing : MESSAGE.score(strike, ball);
    return result;
  }

  /**
   * submittedBalls에 대한 ball의 스트라이크, 볼 여부를 판별하고 submittedBalls의 score에 반영합니다.
   * @param {{
   *  submittedBalls: SubmittedBalls,
   *  ball: TargetBall,
   *  index: string,
   * }} param
   */
  #computeCurrentBall({ submittedBalls, ball, index }) {
    if (this.#answer.match(ball, index)) {
      submittedBalls.increaseStrike();
      return;
    }
    if (this.#answer.contains(ball)) {
      submittedBalls.increaseBall();
    }
  }

  /**
   * 점수를 계산 후 결과 메세지를 반환합니다.
   * @param {SubmittedBalls} submit
   * @returns {string}
   */
  computeScore(submit) {
    const submittedBalls = SubmittedBalls.of(submit);
    submittedBalls
      .getTargetBalls()
      .getBalls()
      .forEach((ball, index) => {
        this.#computeCurrentBall({
          submittedBalls,
          ball,
          index,
        });
      });
    this.#setSubmittedCorrectly(submittedBalls);
    return this.#getGameResult(submittedBalls.getScore());
  }

  /**
   * 정답을 맞춘 공인지 판별 후 submittedCorrectly에 설정합니다.
   * @param {SubmittedBalls} submit
   */
  #setSubmittedCorrectly(submit) {
    if (submit.getScore().strike === TargetBalls.BALL_QUANTITY) {
      this.#submittedCorrectly = submit;
    }
  }

  /**
   * submittedCorrectly에 답안이 존재한다면 게임이 종료됨을 전달합니다.
   * @returns {boolean}
   */
  isEnd() {
    return this.#submittedCorrectly !== null;
  }
}
