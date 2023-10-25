import { MissionUtils } from "@woowacourse/mission-utils";

const NUMBER_LENGTH = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const REPLAY = "1";
const EXIT = "2";

const INTRO_MESSAGE = "숫자 야구 게임을 시작합니다.";
const NOTHING_TEXT = "낫싱";
const STRIKE_TEXT = "스트라이크";
const BALL_TEXT = "볼";
const SUCCESS_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const INVALID_CHARATER_ERROR_MESSAGE = "[ERROR] 1부터 9 사이의 숫자 이외의 값을 입력했습니다.";
const INVALID_INPUT_LENGTH_ERROR_MESSAGE = "[ERROR] 입력값의 길이가 잘못됐습니다.";
const DUPLICATED_NUMBER_ERROR_MESSAGE = "[ERROR] 중복된 숫자를 입력했습니다.";

const toUniqueNumbers = (answer) => {
  const numbers = [
    ...new Set(
      answer
        .split("")
        .map((character) => parseInt(character))
    )
  ];

  return numbers;
}

class Computer {
  constructor() {
    this.numbers = [];
    this.result = {
      strike: 0,
      ball: 0,
    };
  }

  selectNumbers() {
    const numbers = [];

    while (numbers.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.numbers = [...numbers];
  }

  getNumbers() {
    return [...this.numbers];
  }

  static validateAnswerLength(answer) {
    return answer.length === NUMBER_LENGTH;
  }

  static validateAnswerCharacter(answer) {
    const pattern = /^[1-9]*$/;

    return pattern.test(answer);
  }

  static validateAnswerUnique(answer) {
    const uniqueNumbers = toUniqueNumbers(answer);

    return uniqueNumbers.length === NUMBER_LENGTH;
  }

  setResult(answer) {
    if (!Computer.validateAnswerLength(answer)) {
      throw new Error(INVALID_INPUT_LENGTH_ERROR_MESSAGE);
    } else if (!Computer.validateAnswerCharacter(answer)) {
      throw new Error(INVALID_CHARATER_ERROR_MESSAGE);
    } else if (!Computer.validateAnswerUnique(answer)) {
      throw new Error(DUPLICATED_NUMBER_ERROR_MESSAGE);
    }

    const userNumbers = toUniqueNumbers(answer);

    const result = userNumbers.reduce((result, userNumber, index) => {
      const { strike, ball } = result;

      const matchedIndex = this.numbers.findIndex((computerNumber) => userNumber === computerNumber);

      if (matchedIndex === index) {
        return {
          ball,
          strike: strike + 1
        };
      } else if (matchedIndex !== -1) {
        return {
          strike,
          ball: ball + 1
        };
      } else {
        return {
          ball,
          strike,
        };
      }
    }, {
      strike: 0,
      ball: 0,
    });

    this.result = result;
  }

  resetResult() {
    this.result = {
      strike: 0,
      ball: 0,
    };
  }

  getResult() {
    return this.result;
  }

  static validateReplayValue(replay) {
    return replay === REPLAY || replay === EXIT;
  }

  static printIntro() {
    MissionUtils.Console.print(INTRO_MESSAGE);
  }

  printResultMessage() {
    const { strike, ball } = this.result;

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print(NOTHING_TEXT);
      return;
    }

    let messages = [];
    if (ball > 0) {
      messages = [...messages, `${ball}${BALL_TEXT}`];
    }
    if (strike > 0) {
      messages = [...messages, `${strike}${STRIKE_TEXT}`];
    }

    const generatedMessage = messages.join(" ");

    MissionUtils.Console.print(generatedMessage);
  }

  printSuccessMessage() {
    if (!this.checkSuccess()) return;
    
    MissionUtils.Console.print(SUCCESS_MESSAGE);
  }

  checkSuccess() {
    return this.result.strike === NUMBER_LENGTH;
  }

  setRound() {
    this.selectNumbers();
    this.resetResult();
  }
}

export default Computer;