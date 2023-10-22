import { MissionUtils } from "@woowacourse/mission-utils"
import { MAX_LENGTH, outputMessage } from "./constants/Message.js";

class Computer {
  constructor() {
    this._answer = [];
    this._strikeArray = [];
    this._ballArray = [];
  }

  createRandomNumber() {
    while (this._answer.length < MAX_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this._answer.includes(number)) {
        this._answer.push(number);
      }
    }
  }

  gradingUserInput(userInput) {
    this._strikeArray = Array(9).fill(0);
    this._ballArray  = Array(9).fill(0);

    for (let i = 0; i < MAX_LENGTH; i++) {
      this.#checkStrikeAndBall(userInput, i);
    }

    const ballCount = this.#getTotalBall();
    const strikeCount = this.#getTotalStrike();

    // 모두 맞힌 경우
    if (strikeCount === 3) {
      return this.#gameWin();
    }

    // 아닌 경우 힌트 생성
    return this.#getHint(strikeCount, ballCount);
  }

  #checkStrikeAndBall(userInput, index) {
    const strikeIndex = this.#strikeCheck(this._answer[index], userInput[index]);

    if (strikeIndex !== -1) {
      this.#pushResultToStrikeArray(strikeIndex);
    }

    if (strikeIndex === -1) {
      this.#pushResultToBallArray(this._answer[index], userInput[index]);
    }

  }

  #strikeCheck(_answer, userInput) {
    if (_answer === userInput) {
      return _answer;
    }

    return -1;
  }

  #pushResultToStrikeArray(strikeIndex) {
    ++this._strikeArray[strikeIndex - 1]
  }

  #pushResultToBallArray(_answer, userInput) {
    ++this._ballArray[_answer - 1];
    ++this._ballArray[userInput - 1];
  }

  #getTotalBall() {
    return this.#numOfTargetFromArray(this._ballArray, 2);
  }

  #getTotalStrike() {
    return this.#numOfTargetFromArray(this._strikeArray, 1);
  }

  #numOfTargetFromArray(array, target) {
    const targetArray = array.filter(element => element === target);
    return targetArray.length;
  }

  #gameWin() {
    return outputMessage.STRIKE_OUT;
  }

  #getHint(strikeCount, ballCount) {
    if (strikeCount === 0 && ballCount === 0) {
      return outputMessage.NOTHING;
    }

    if (strikeCount === 0 && ballCount === 1) { 
      return outputMessage.ONE_BALL;
    }

    if (strikeCount === 0 && ballCount === 2) {
      return outputMessage.TWO_BALL;
    }

    if (strikeCount === 0 && ballCount === 3) {
      return outputMessage.THREE_BALL;
    }

    if (strikeCount === 1 && ballCount === 0) {
      return outputMessage.ONE_STRIKE;
    }

    if (strikeCount === 1 && ballCount === 1) {
      return outputMessage.ONE_BALL_ONE_STRIKE;
    }

    if (strikeCount === 1 && ballCount === 2) {
      return outputMessage.ONE_BALL_TWO_STRIKE;
    }

    if (strikeCount === 2 && ballCount === 0) {
      return outputMessage.TWO_STRIKE;
    }

    if (strikeCount === 2 && ballCount === 1) {
      return outputMessage.ONE_BALL_TWO_STRIKE;
    }
  }
}

export default Computer
