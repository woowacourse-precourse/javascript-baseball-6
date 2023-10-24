import { MissionUtils } from '@woowacourse/mission-utils';
import { Output, ValidTest, Player, Game } from './js';

class App {
  strike = 0;

  ball = 0;

  validTest = new ValidTest();

  output = new Output();

  player = new Player();

  game = new Game();

  /**
   * 오류 시, 오류문을 throw하고 게임을 종료
   * @param {*} errorMessage
   */
  throwError(errorMessage) {
    this.game.over(true);
    throw new Error(errorMessage);
  }

  /**
   * strike, ball 초기화
   */
  resetStrikeAndBall() {
    this.strike = 0;
    this.ball = 0;
  }

  /**
   * 입력한 숫자에 대한 스트라이크,볼 판단
   */
  compareNumbers() {
    this.game.randomNumbers.forEach((v, i) => {
      if (v === this.player.numbers[i]) {
        this.strike += 1;
      } else if (this.player.numbers.includes(v)) {
        this.ball += 1;
      }
    });
  }

  /**
   * 스트라이클, 볼, 낫싱 판단에 따른 결과를 표시
   */
  showGameResult() {
    const isNothing = !this.strike && !this.ball;
    if (this.strike === 3) {
      this.game.win = true;
      this.output.printThreeStrikeMessage();
      this.output.printWinMessage();
      this.output.printGameRestartMessage();
    } else if (isNothing) {
      this.output.printNothingMessage();
    } else {
      const strikeAndBall = `${this.ball ? `${this.ball}볼` : ''} ${
        this.strike ? `${this.strike}스트라이크` : ''
      }`;
      this.output.printMessage(strikeAndBall);
    }
  }

  /**
   * 상황별, 입력한 숫자에 따른 게임 판정
   */
  judgeGame() {
    if (this.game.win) {
      const isRestart = this.player.numbers[0] === 1;
      if (isRestart) {
        this.game.restart();
      } else {
        this.game.over(true);
      }
    } else {
      this.compareNumbers();
      this.showGameResult();
    }
    this.resetStrikeAndBall();
  }

  async play() {
    this.game.start();
    while (this.game.playing) {
      if (!this.win) this.output.printInputMessage();
      try {
        // eslint-disable-next-line
        await this.player.getNumbers();
        this.validTest.test(this.player.numbers, this.game.win);
        this.judgeGame();
      } catch (error) {
        this.throwError(`[Error]:${error}`);
      }
    }
  }
}
export default App;
