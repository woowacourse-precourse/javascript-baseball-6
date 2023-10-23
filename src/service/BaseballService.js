import { MissionUtils } from '@woowacourse/mission-utils';
import { AnswerBalls, SubmittedBalls, TargetBall, TargetBalls } from '../domain';

export class BaseballService {
  #answer;

  #submittedCorrectly = null;

  constructor() {
    this.setRandomAnswer();
  }

  get answer() {
    return this.#answer;
  }

  get submittedCorrectly() {
    return this.#submittedCorrectly;
  }

  setRandomAnswer() {
    const randomNumbers = new Set();

    while (randomNumbers.size < TargetBalls.BALL_QUANTITY) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(TargetBall.MIN, TargetBall.MAX);
      randomNumbers.add(randomNumber);
    }

    this.#answer = AnswerBalls.of([...randomNumbers]);
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
    return submittedBalls.score;
  }

  #setSubmittedCorrectly(submit) {
    if (submit.score.strike === TargetBalls.BALL_QUANTITY) {
      this.#submittedCorrectly = submit;
    }
  }

  isEnd() {
    if (this.#submittedCorrectly === null) {
      return false;
    }
    return true;
  }
}
