import { printMessage, readLineAsync, isValidAnswerInput, getValidRetryInput } from './utils';
import { MESSAGE, SETTING, GAME_STATUS } from './constants';
import { Game } from './Game';

const { START, INPUT_NUMBER, CORRECT, RESTART } = MESSAGE
const { SIZE, RESTART_NUMBER, EXIT_NUMBER } = SETTING;

class App {
  /**
   * @description 게임을 진행하는 함수
   * - 게임 시작
   * - 사용자에게 입력을 받아 유효성 검사
   * - 검사 통과 후 점수 판정
   * - 정답을 맞추면 게임 재시작 혹은 종료
   */
  async play() {
    printMessage(START);
    this.start();

    try {
      while (this.game.status === GAME_STATUS.START) {
        const input = await readLineAsync(INPUT_NUMBER);
        isValidAnswerInput(input);
        
        const score = this.game.compareScore(input);
        const scoreMessage = this.game.getScoreMessage(score);
        printMessage(scoreMessage);

        if (score.strike === SIZE) {
          printMessage(CORRECT);
          const input = await readLineAsync(RESTART);
          const num = getValidRetryInput(input);
          this.restart(num);
        }
      }
    } catch (error) {
      this.end(error);
    }
  }

  /**
   * @description 게임을 시작하는 함수
   */
  start() {
    this.game = new Game();
    this.game.status = GAME_STATUS.START;
  }

  /**
   * @param {number} num: 사용자가 입력한 숫자
   * @description 게임을 재시작 혹은 종료할지 판별하는 함수
   */
  restart(num) {
    if (num === RESTART_NUMBER) {
      this.start();
    } else if (num === EXIT_NUMBER) {
      this.end();
    }
  }

  /**
   * @param {Error?} error: 발생된 에러
   * @description 게임을 종료하는 함수
   * @throws {Error} 에러 발생했을 때
   */
  end(error) {
    this.game.status = GAME_STATUS.END;
    if (error) {
      throw new Error(error);
    }
  }
}

export default App;
