import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constatns/constants.js';
import setRandomAnswer from './setRandomAnswer.js';
import inputGuess from './inputGuess.js';
import judgeGuess from './judgeGuess.js';
import resultToString from './resultToString.js';
import restartInput from './restartInput.js';

class App {
  #answer;
  #guess;
  #isCorrect;
  #isEnded;
  
  constructor() {
    this.#answer = [];
    this.#guess = '';
    this.#isCorrect = false;
    this.#isEnded = false;
  }

  // public : 숫자야구 실행
  async play() {
    Console.print(MESSAGE.START_GAME);
    this.#setAnswer();

    while (!this.#isEnded) {
      await this.#setGuess();
      this.#judgeGuessAndResult(this.#guess, this.#answer);

      if (this.#isCorrect) {
        await this.#restartControl();
      }
    }
  }

  // private : 상대방의 임의의 수 선정 
  #setAnswer() {
    this.#answer = setRandomAnswer();
  }

  // private : 플레이어의 추측 입력
  async #setGuess() {
    this.#guess = await inputGuess();
  }

  // private : 플레이어의 추측을 정답과 비교하여 결과 산정
  #judgeGuessAndResult(guess, answer) {
    const result = judgeGuess(guess, answer);
    
    if (result.strike === 3) {
      this.#setIsCorrect(true);      
    }

    Console.print(resultToString(result));
  }

  // private : 정답을 맞춘 상태 변경
  #setIsCorrect(state) {
    this.#isCorrect = state;
  }

  // private : 게임 종료 상태 변경
  #setIsEnded(state) {
    this.#isEnded = state;
  }

  // private : 정답을 맞춘 경우 재시작 혹은 게임 종료 선택
  async #restartControl() {
    if (await restartInput() === '2') {
      this.#setIsEnded(true);
    } else {
      this.#setAnswer();
      this.#setIsCorrect(false);
    }
  }
}

export default App;
