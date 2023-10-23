import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  playing = true;

  strike = 0;

  ball = 0;

  success = false;

  userText = '';

  computerNumbers = [];

  sentence = {
    start: '숫자 야구 게임을 시작합니다.',
    end: '게임종료',
    strike: '스트라이크',
    ball: '볼',
    nothing: '낫싱',
    win: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    error: '[ERROR] 숫자가 잘못된 형식입니다.',
  };

  message = {
    type: '',
    text: '',
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

  // 상태 초기화
  resetState() {
    this.playing = true;
    this.success = false;
    this.userText = '';
    this.resetStrikeAndBall();
    this.setComputerNumbers();
  }
  // 메세지 출력
  // eslint-disable-next-line
  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  startGame() {
    this.resetState();
    this.printMessage(this.sentence.start);
  }

  endGame() {
    this.playing = false;
    this.printMessage(this.sentence.end);
  }

  throwError(error) {
    this.playing = false;
    throw new Error(error);
  }

  // input 내용
  async getUserNumbers() {
    try {
      if (!this.success) this.printMessage('숫자를 입력해주세요.');
      const text =
        await MissionUtils.Console.readLineAsync('숫자를 입력해주세요.');
      this.userText = Number(text.replaceAll(' ', ''));
    } catch (error) {
      this.throwError(error);
    }
  }

  // 유효성 검사
  validNumbers() {
    if (this.strike !== 3) {
      return /^[1-9]{3}$/.test(this.userText);
    }
    return /^[1,2]$/.test(this.userText);
  }

  // 스트라이크, 볼 판정
  testStrikeAndBall() {
    const userNumbers = String(this.userText)
      .split('')
      .map(v => Number(v));

    this.computerNumbers.forEach((v, i) => {
      if (v === userNumbers[i]) {
        this.strike += 1;
      } else if (userNumbers.includes(v)) {
        this.ball += 1;
      }
    });
    const isNothing = !this.strike && !this.ball;
    const isThreeStrike = this.strike === 3;
    const strikeAndBall = isThreeStrike
      ? '3스트라이크'
      : `${this.strike ? this.strike + this.sentence.strike : ''} ${
          this.ball ? this.ball + this.sentence.ball : ''
        }`;
    console.log(
      'user',
      this.userText,
      'com',
      this.computerNumbers,
      's',
      this.strike,
      'b',
      this.ball,
    );
    return isNothing ? this.sentence.nothing : strikeAndBall;
  }

  // 판정 결과
  test() {
    if (this.success) {
      const isRestart = this.userText === 1;
      console.log('usetext', this.userText);
      if (isRestart) {
        this.resetState();
      } else {
        this.endGame();
      }
    } else {
      const result = this.testStrikeAndBall();
      this.printMessage(result);
      if (this.strike === 3) {
        this.printMessage(this.sentence.restart);
        this.success = true;
      }
      this.resetStrikeAndBall();
    }
  }

  async run() {
    await this.getUserNumbers();
    const testPass = this.validNumbers();
    if (testPass) {
      this.test();
      if (this.playing) this.run();
    } else {
      this.throwError(this.sentence.error);
    }
  }

  async play() {
    this.startGame();
    this.run();
  }
}
export default App;
