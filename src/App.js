import { MissionUtils } from "@woowacourse/mission-utils"

const INTRO_SENTENCE = "숫자 야구 게임을 시작합니다.";
const INPUT_NUMBERS_SENTENCE = "숫자를 입력해주세요 : ";
const NOTHING_TEXT = "낫싱";
const STRIKE_TEXT = "스트라이크";
const BALL_TEXT = "볼";
const SUCCESS_SENTENCE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const REPLAY_QUESTION_SENTENCE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
const INVALID_CHARATER_ERROR_MESSAGE = "[ERROR] 1부터 9 사이의 숫자 이외의 값을 입력했습니다.";
const INVALID_INPUT_LENGTH_ERROR_MESSAGE = "[ERROR] 입력값의 길이가 잘못됐습니다.";
const DUPLICATED_NUMBER_ERROR_MESSAGE = "[ERROR] 중복된 숫자를 입력했습니다.";
const REPLAY_INPUT_ERROR_MESSAGE = "[ERROR] 1 또는 2 이외의 값을 입력했습니다.";

const NUMBER_LENGTH = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const REPLAY = "1";
const EXIT = "2";

class App {
  constructor() {
    this.computer = [];
    this.user = [];
    this.success = false;
    this.isPlaying = true;
  }

  async play() {
    MissionUtils.Console.print(INTRO_SENTENCE);

    while(this.isPlaying) {
      this.initStage();

      while(!this.success) {
        await this.requestPredictedNumbers();
    
        const { strike, ball } = this.calculateResult();
        this.printResultMessage({ strike, ball });
  
        if (this.checkSuccess(strike)) {
          this.success = true;
          this.printSuccessMessage();
        }
      }
    
      await this.requestReplay();
    }
  }

  setComputer() {
    const numbers = [];

    while (numbers.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.computer = [...numbers];
  }

  async requestPredictedNumbers() {
    const text = await MissionUtils.Console.readLineAsync(INPUT_NUMBERS_SENTENCE);

    if (!this.checkValidCharacters(text)) {
      throw new Error(INVALID_CHARATER_ERROR_MESSAGE);
    } else if (!this.checkValidLength(text)) {
      throw new Error(INVALID_INPUT_LENGTH_ERROR_MESSAGE);
    } else if (!this.checkAllNumbersUnique(text)) {
      throw new Error(DUPLICATED_NUMBER_ERROR_MESSAGE);
    }

    const numbers = this.toUniqueNumbers(text);

    this.user = [...numbers];
  }

  checkValidCharacters(text) {
    const pattern = /^[0-9]*$/;

    return pattern.test(text);
  }

  checkValidLength(text) {
    return text.length === NUMBER_LENGTH;
  }

  checkAllNumbersUnique(text) {
    const uniqueNumbers = this.toUniqueNumbers(text);

    return uniqueNumbers.length === NUMBER_LENGTH;
  }

  toUniqueNumbers(text) {
    const numbers = [
      ...new Set(
        text
          .split("")
          .map((character) => parseInt(character))
      )
    ];

    return numbers;
  }

  calculateResult() {
    const result = this.user.reduce((result, userNumber, index) => {
      const { strike, ball } = result;

      const matchedIndex = this.computer.findIndex((computerNumber) => userNumber === computerNumber);

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

    return result;
  }

  printResultMessage({ strike, ball }) {
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

  checkSuccess(strike) {
    return strike === NUMBER_LENGTH;
  }

  printSuccessMessage() {
    MissionUtils.Console.print(SUCCESS_SENTENCE);
  }

  async requestReplay() {
    const text = await MissionUtils.Console.readLineAsync(REPLAY_QUESTION_SENTENCE);

    if (!this.validateReplay(text)) {
      throw new Error(REPLAY_INPUT_ERROR_MESSAGE);
    }

    this.isPlaying = text === REPLAY;
  }

  validateReplay(text) {
    return text === REPLAY || text === EXIT;
  }

  initStage() {
    this.setComputer();
    this.user = [];
    this.success = false;
  }
}

export default App;
