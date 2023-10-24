import { MissionUtils } from '@woowacourse/mission-utils';
import { Output, ValidTest, MESSAGE } from './js';

class App {
  playing = true;

  strike = 0;

  ball = 0;

  win = false;

  userNumbers = [];

  computerNumbers = [];

  constructor() {
    this.validTest = new ValidTest();

    this.output = new Output();
  }

  /**
   * computerNumbers 값 설정 : 1-9까지의 서로 다른 3가지 숫자로 이루어진 배열
   */
  setComputerNumbers() {
    let array = [];
    while (array.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!array.includes(number) && number) {
        if (array.length) {
          array.push(number);
        } else {
          array = [number];
        }
      }
    }
    this.computerNumbers = array;
  }

  /**
   * 오류 시, 오류문을 throw하고 게임을 종료
   * @param {*} errorMessage
   */
  throwError(errorMessage) {
    this.gameOver(false);
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
   * 속성들 값 재설정
   * @param {*} playing :  this.playing의 값
   * @param {*} resetComputerNumbers  : this.computerNumber 의 값을 재설정 여부
   */
  resetSetting(playing, resetComputerNumbers) {
    this.playing = playing;
    this.userNumbers = [];
    this.win = false;
    this.resetStrikeAndBall();
    if (resetComputerNumbers) this.setComputerNumbers();
  }

  /**
   * 게임 시작
   */
  startGame() {
    this.resetSetting(true, true);
    this.output.printGameStartMessage();
  }

  /**
   * 게임 다시 시작
   */
  restartGame() {
    this.resetSetting(true, true);
  }

  /**
   * 게임 종료
   * @param {*} showMessage  : 게임종료 시, 이에 대한 메세지 표시 여부
   */
  gameOver(showMessage) {
    this.resetSetting(false, false);
    if (showMessage) this.output.printGameOverMessage();
  }

  /**
   * 사용자가 입력한 글자를 가져와 userNumbers 의 값을 변경
   */
  async getUserNumbers() {
    try {
      if (!this.strike === 3) this.output.printInputMessage();
      const text = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT);
      this.userNumbers = text
        .replaceAll(' ', '')
        .split('')
        .map(v => Number(v));
    } catch (error) {
      this.throwError(error);
    }
  }

  /**
   * 입력한 숫자에 대한 스트라이크,볼 판단
   */
  compareNumbers() {
    this.computerNumbers.forEach((v, i) => {
      if (v === this.userNumbers[i]) {
        this.strike += 1;
      } else if (this.userNumbers.includes(v)) {
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
      this.win = true;
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
    this.resetStrikeAndBall();
  }

  /**
   * 상황별, 입력한 숫자에 따른 게임 판정
   */
  judgeGame() {
    if (this.win) {
      const isRestart = this.userNumbers[0] === 1;
      if (isRestart) {
        this.restartGame();
      } else {
        this.gameOver(true);
      }
    } else {
      this.compareNumbers();
      this.showGameResult();
    }
  }

  async play() {
    this.startGame();
    while (this.playing) {
      try {
        // eslint-disable-next-line
        await this.getUserNumbers();
        this.validTest.test(this.userNumbers, this.win);
        this.judgeGame();
      } catch (error) {
        this.throwError(`[Error]:${error}`);
      }
    }
  }
}
export default App;
