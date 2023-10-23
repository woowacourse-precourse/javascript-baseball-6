import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  playing = true;

  strike = 0;

  ball = 0;

  win = false;

  userNumbers = [];

  computerNumbers = [];

  sentence = {
    start: '숫자 야구 게임을 시작합니다.',
    end: '게임종료',
    strike: '스트라이크',
    threeStrike: '3스트라이크',
    ball: '볼',
    nothing: '낫싱',
    win: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    error: '[ERROR] 숫자가 잘못된 형식입니다.',
  };

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

  // 스트라이크, 볼 초기화
  resetStrikeAndBall() {
    this.strike = 0;
    this.ball = 0;
  }

  // 메세지 출력
  // eslint-disable-next-line
  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  startGame() {
    this.setComputerNumbers();
    this.printMessage(this.sentence.start);
  }

  restart() {
    this.playing = true;
    this.userNumbers = [];
    this.win = false;
    this.resetStrikeAndBall();
    this.setComputerNumbers();
  }

  endGame(showMessage) {
    this.playing = false;
    this.win = false;
    this.userNumbers = [];
    this.resetStrikeAndBall();
    if (showMessage) this.printMessage(this.sentence.end);
  }

  throwError(error) {
    this.endGame(false);
    this.printMessage(error);
  }

  // input 내용
  async getUserNumbers() {
    try {
      if (!this.strike === 3) this.printMessage('숫자를 입력해주세요.');
      const text =
        await MissionUtils.Console.readLineAsync('숫자를 입력해주세요.');
      this.userNumbers = text
        .replaceAll(' ', '')
        .split('')
        .map(v => Number(v));
    } catch (error) {
      this.throwError(error);
    }
  }

  // 유효성 검사
  validNumbers() {
    const text = this.userNumbers.join('');
    let pass;
    if (!this.win) {
      pass = /^[1-9]{3}$/.test(text);
    } else {
      pass = /^[1,2]$/.test(text);
    }
    if (!pass) throw new Error(this.sentence.error);
  }

  // 스트라이크, 볼 판정
  compareNumbers() {
    this.computerNumbers.forEach((v, i) => {
      if (v === this.userNumbers[i]) {
        this.strike += 1;
      } else if (this.userNumbers.includes(v)) {
        this.ball += 1;
      }
    });
  }

  // 판정 결과 표시
  showJudgment() {
    const isNothing = !this.strike && !this.ball;
    if (this.strike === 3) {
      this.win = true;
      this.printMessage(this.sentence.threeStrike);
      this.printMessage(this.sentence.win);
      this.printMessage(this.sentence.restart);
    } else if (isNothing) {
      this.printMessage(this.sentence.nothing);
    } else {
      const strikeAndBall = `${
        this.ball ? this.ball + this.sentence.ball : ''
      } ${this.strike ? this.strike + this.sentence.strike : ''}`;
      this.printMessage(strikeAndBall);
    }
    this.resetStrikeAndBall();
  }

  // 판정
  test() {
    if (this.win === true) {
      const isRestart = this.userNumbers[0] === 1;
      if (isRestart) {
        this.restart();
      } else {
        this.endGame(true);
      }
    } else {
      this.compareNumbers();
      this.showJudgment();
    }
  }

  async play() {
    this.startGame();
    while (this.playing === true) {
      try {
        // eslint-disable-next-line
        await this.getUserNumbers();
        this.validNumbers();
        this.test();
      } catch (error) {
        throw new Error(`[Error]:${error}`);
      }
    }
  }
}
export default App;
