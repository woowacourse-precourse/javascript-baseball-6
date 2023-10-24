import { Console } from '@woowacourse/mission-utils';
import setRandomAnswer from './setRandomAnswer.js';
import inputGuess from './inputGuess.js';
import judgeGuess from './judgeGuess.js';
import returnResult from './returnResult.js';
import restartInput from './restartInput.js';

class App {
  #answer;
  #guess;
  #isCorrect;
  #isEnded;
  
  constructor() {
    this.#answer = '';
    this.#guess = '';
    this.#isCorrect = false;
    this.#isEnded = false;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.')
    this.setAnswer();

    while (!this.#isEnded) {
      await this.setGuess();
      this.judgeGuessAndResult(this.#guess, this.#answer);

      if (this.#isCorrect) {
        if (await restartInput() === '2') {
          this.setIsEnded(true);
        } else {
          this.setAnswer();
          this.setIsCorrect(false);
        }
      }
    }
  }

  setAnswer() {
    this.#answer = setRandomAnswer();
  }

  async setGuess() {
    this.#guess = await inputGuess();
  }

  async judgeGuessAndResult(guess, answer) {
    const result = judgeGuess(guess, answer);
    
    if (result.strike === 3) {
      this.setIsCorrect(true);      
    }

    Console.print(returnResult(result));
  }

  setIsCorrect(state) {
    this.#isCorrect = state;
  }

  setIsEnded(state) {
    this.#isEnded = state;
  }
}

export default App;
