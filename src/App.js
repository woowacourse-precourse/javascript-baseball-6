import { printMessage, readLineAsync, isValidInput } from './utils';
import { MESSAGE, SCORE, SETTING, GAME_STATUS, ERROR_MESSAGE } from './constants';
import { Game } from './Game';

const { START, INPUT_NUMBER, CORRECT, RETRY } = MESSAGE
const { SIZE, RESTART_NUMBER, EXIT_NUMBER } = SETTING;
const { STRIKE } = SCORE;

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
        isValidInput(input);
        const num = input.split('').map(Number);
        
        const score = this.game.compareScore(num);
        const scoreMessage = this.game.getScoreMessage(score);
        printMessage(scoreMessage);

        if (score.get(STRIKE) === SIZE) {
          printMessage(CORRECT);
          const input = await readLineAsync(RETRY);
          this.retry(input);
        }
      }
    } catch (error) {
      this.end(error);
    }
  }

  /**
   * @description 게임을 시작하는 함수
   * - 게임 인스턴스를 생성
   * - 게임 상태를 시작으로 변경
   */
  start() {
    this.game = new Game();
    this.game.status = GAME_STATUS.START;
  }

  /**
   * @param {string} input: 사용자가 입력한 문자
   * @description 게임을 재시작 혹은 종료할지 판별하는 함수
   * - RESTART_NUMBER: 게임 재시작
   * - EXIT_NUMBER: 게임 종료
   * - 그 외 숫자 입력 시 예외 발생
   * @throws {Error} 입력값이 유효하지 않을 때
   */
  retry(input) {
    input = Number(input);
    if (input === RESTART_NUMBER) {
      this.start();
    } else if (input === EXIT_NUMBER) {
      this.end();
    } else {
      throw new Error(ERROR_MESSAGE.NOT_RETRY_NUMBER);
    }
  }

  /**
   * @param {null | Error} 
   * - null: 정상 종료했을 때
   * - Error: 에러 발생했을 때
   * @description 게임을 종료하는 함수
   * - 게임 상태를 종료로 변경
   * - 에러가 발생했다면 에러 throw
   * @throws {Error} 에러 발생했을 떄
   */
  end(error) {
    this.game.status = GAME_STATUS.END;
    if (error) {
      throw new Error(error);
    }
  }
}

export default App;
