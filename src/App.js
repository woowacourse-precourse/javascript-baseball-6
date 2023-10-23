import { printMessage, readLineAsync, generateRandomNumber, isValidInput } from './utils';
import { MESSAGE, SCORE, SETTING, GAME_STATUS, ERROR_MESSAGE } from './constants';

const { START, INPUT_NUMBER, CORRECT, RETRY } = MESSAGE
const { SIZE, RESTART_NUMBER, EXIT_NUMBER } = SETTING;
const { BALL, STRIKE, NOTHING } = SCORE;

class App {
  constructor() {
    this.gameStatus = GAME_STATUS.READY;
    this.answer = null;
  }

  start() {
    this.answer = generateRandomNumber();
    this.gameStatus = GAME_STATUS.START;
  }

  async play() {
    printMessage(START);
    this.start();

    try {
      while (this.gameStatus === GAME_STATUS.START) {
        const input = await readLineAsync(INPUT_NUMBER);
        isValidInput(input);
        const num = input.split('').map(Number);
        
        const score = this.compareScore(num, this.answer);
        const scoreMessage = this.getScoreMessage(score);
        printMessage(scoreMessage);

        if (score.get(STRIKE) === SIZE) {
          printMessage(CORRECT);
          const input = await readLineAsync(RETRY);
          this.isRetry(input);
        }
      }
    } catch (error) {
      this.end(error);
    }
  }

  end(error) {
    this.gameStatus = GAME_STATUS.END;
    if (error) {
      throw new Error(error);
    }
  }

  compareScore(num, answer) {
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

  isRetry(input) {
    input = Number(input);
    if (input === RESTART_NUMBER) {
      this.start();
    } else if (input === EXIT_NUMBER) {
      this.end();
    } else {
      throw new Error(ERROR_MESSAGE.NOT_RETRY_NUMBER);
    }
  }
}

export default App;
