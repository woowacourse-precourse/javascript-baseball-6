import { Console, Random } from '@woowacourse/mission-utils';

const NUMBER_COUNT = 3;
const GAME_CONTINUE = '1';
const GAME_END = '2';
const ERROR_MESSAGE = '[ERROR] 유효하지 않은 입력입니다.';
const INPUT_PROMPT = '숫자를 입력해주세요 : ';
const CORRECT_ANSWER_PROMPT = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const GAME_START_PROMPT = '숫자 야구 게임을 시작합니다.';
const GAME_RESTART_PROMPT =
  '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
const GAME_END_PROMPT = '게임이 종료되었습니다.';

class App {
  constructor() {
    this.answerNumbers = [];
  }

  initializeAnswerNumbers() {
    this.answerNumbers = [];
    while (this.answerNumbers.length < NUMBER_COUNT) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answerNumbers.includes(number)) {
        this.answerNumbers.push(number);
      }
    }
  }

  async getUserInput() {
    let numbers = await Console.readLineAsync(INPUT_PROMPT);
    if (this.checkValidInput(numbers)) {
      return numbers.split('').map(Number);
    }
    return [];
  }

  checkValidInput(value) {
    if (isNaN(value) || value.length !== 3) {
      throw new Error(ERROR_MESSAGE);
    }

    const numValues = value.split('').map(Number);
    if (
      new Set(numValues).size !== NUMBER_COUNT ||
      numValues.some(num => num === 0)
    ) {
      throw new Error(ERROR_MESSAGE);
    }

    return true;
  }

  calculateStrikesAndBalls(computer, user) {
    let result = { strike: 0, ball: 0 };
    for (let i = 0; i <= NUMBER_COUNT - 1; i++) {
      if (computer.includes(user[i])) {
        result.ball++;
      }

      if (computer[i] === user[i]) {
        result.ball--;
        result.strike++;
      }
    }
    return result;
  }

  printResult(result) {
    const { strike, ball } = result;
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (strike === 3) {
      Console.print(CORRECT_ANSWER_PROMPT);
      return true;
    }

    return false;
  }

  async checkDoAgain() {
    Console.print(GAME_RESTART_PROMPT);
    const doAgain = await Console.readLineAsync('');
    if (doAgain !== GAME_CONTINUE && doAgain !== GAME_END) {
      throw new Error(ERROR_MESSAGE);
    }

    return doAgain === GAME_CONTINUE;
  }

  async play(maxRounds = Infinity) {
    let continueGame = true;
    let roundsPlayed = 0;

    while (continueGame && roundsPlayed < maxRounds) {
      this.initializeAnswerNumbers();
      Console.print(GAME_START_PROMPT);

      let isCorrect = false;

      while (!isCorrect) {
        const userNumber = await this.getUserInput();
        isCorrect = this.printResult(
          this.calculateStrikesAndBalls(this.answerNumbers, userNumber)
        );
      }
      continueGame = await this.checkDoAgain();
      roundsPlayed++;
    }
    Console.print(GAME_END_PROMPT);

    return Promise.resolve();
  }
}

// const app = new App();
// app.play();

export default App;
