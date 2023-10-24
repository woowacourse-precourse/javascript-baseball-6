import { MissionUtils } from "@woowacourse/mission-utils"
import { outputMessage } from "./constants/Message.js";
import { 
  BALL_CONDITION,
  COUNT_ONE_DIGIT,
  END_NUMBER,
  INIT_COUNT_NUMBER,
  NUMBER_LENGTH,
  START_NUMBER,
  STRIKE_CONDITION,
  WIN_CONDITION 
} from './constants/Enum.js';

class Computer {
  constructor() {
    this._answer = [];
    this._strikeArray = [];
    this._ballArray = [];
  }

  createRandomNumber() {
    while (this._answer.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(START_NUMBER, END_NUMBER);
      this.#checkIsAlreadyExists(number);
    }
  }

  #checkIsAlreadyExists(randomNumber) {
    if (!this._answer.includes(randomNumber)) {
      this._answer.push(randomNumber);
    }
  }

  gradingUserInput(userInput) {
    this._strikeArray = Array(COUNT_ONE_DIGIT).fill(INIT_COUNT_NUMBER);
    this._ballArray  = Array(COUNT_ONE_DIGIT).fill(INIT_COUNT_NUMBER);

    for (let i = 0; i < NUMBER_LENGTH; i++) {
      this.#checkStrikeAndBall(userInput, i);
    }

    const ballCount = this.#getTotalBall();
    const strikeCount = this.#getTotalStrike();

    // 모두 맞힌 경우
    if (strikeCount === WIN_CONDITION) {
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
    ++this._strikeArray[strikeIndex]
  }

  #pushResultToBallArray(_answer, userInput) {
    ++this._ballArray[_answer];
    ++this._ballArray[userInput];
  }

  #getTotalBall() {
    return this.#numOfTargetFromArray(this._ballArray, BALL_CONDITION);
  }

  #getTotalStrike() {
    return this.#numOfTargetFromArray(this._strikeArray, STRIKE_CONDITION);
  }

  #numOfTargetFromArray(array, target) {
    const targetArray = array.filter(element => element >= target);
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
