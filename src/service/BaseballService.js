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

  get answer() {
    return this.#answer;
  }

  get submittedCorrectly() {
    return this.#submittedCorrectly;
  }

  init() {
    this.setRandomAnswer();
    this.#submittedCorrectly = null;
  }

  setRandomAnswer() {
    const randomNumbers = new Set();
    while (randomNumbers.size < TargetBalls.BALL_QUANTITY) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(TargetBall.MIN, TargetBall.MAX);
      randomNumbers.add(randomNumber);
    }
    this.#answer = AnswerBalls.of([...randomNumbers]);
  }

  #getGameResult({ strike, ball }) {
    const isNothing = !strike && !ball;
    const result = isNothing ? MESSAGE.nothing : MESSAGE.score(strike, ball);
    return result;
  }

  computeScore(submit) {
    const submittedBalls = SubmittedBalls.of(submit);
    submittedBalls.targetBalls.balls.forEach((ball, index) => {
      if (this.#answer.match(ball, index)) {
        submittedBalls.increaseStrike();
        return;
      }
      if (this.#answer.contains(ball)) {
        submittedBalls.increaseBall();
      }
    });
    this.#setSubmittedCorrectly(submittedBalls);
    return this.#getGameResult(submittedBalls.score);
  }

  #setSubmittedCorrectly(submit) {
    if (submit.score.strike === TargetBalls.BALL_QUANTITY) {
      this.#submittedCorrectly = submit;
    }
  }

  isEnd() {
    return this.#submittedCorrectly !== null;
  }
}
