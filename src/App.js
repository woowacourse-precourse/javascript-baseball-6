import { MissionUtils } from '@woowacourse/mission-utils';
import { CONTINUE, NUMBER_LENGTH, EXIT } from './Constants.js';
import Message from './Message.js';

class App {
  gameStatus = CONTINUE;

  answer = [];

  userInput = [];

  cntStrike = 0;

  cntBall = 0;

  initAnswer() {
    this.answer = [];
  }

  setAnswer() {
    while (this.answer.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 : ',
    );

    const regexp = new RegExp(`^(?!.*(.).*\\1)[1-9]{${NUMBER_LENGTH}}$`);
    // ^: 문자열의 시작
    // (?!.*(.).*\1): 중복 비허용
    // [1-9]{n}: 1~9 사이 숫자를 n번 반복
    // $: 문자열의 끝

    if (regexp.test(userInput) === false) {
      throw Error('[ERROR] 입력 값이 올바르지 않습니다.');
    }

    this.userInput = Array.from(userInput, (char) => Number(char));
  }

  initCntStrike() {
    this.cntStrike = 0;
  }

  initCntBall() {
    this.cntBall = 0;
  }

  countStrike() {
    for (let i = 0; i < NUMBER_LENGTH; i += 1) {
      if (this.answer[i] === this.userInput[i]) {
        this.cntStrike += 1;
      }
    }
  }

  countBall() {
    for (let i = 0; i < NUMBER_LENGTH; i += 1) {
      const targetNumber = this.userInput[i];
      if (
        this.answer.includes(targetNumber) &&
        this.answer[i] !== targetNumber
      ) {
        this.cntBall += 1;
      }
    }
  }

  async decideGameContinuation() {
    const input = await MissionUtils.Console.readLineAsync(
      `게임을 새로 시작하려면 ${CONTINUE}, 종료하려면 ${EXIT}를 입력하세요.\n`,
    );
    if (input !== CONTINUE && input !== EXIT) {
      throw Error('[ERROR] 입력 값이 올바르지 않습니다.');
    }
    return input;
  }

  init() {
    Message.printGameStart();
    this.setAnswer();
    this.initCntStrike();
    this.initCntBall();
  }

  async play() {
    this.init();

    while (this.gameStatus !== EXIT) {
      this.initCntStrike();
      this.initCntBall();
      await this.getUserInput();
      this.countStrike();
      this.countBall();
      Message.printPlayerGuessResult(this.cntBall, this.cntStrike);

      if (this.cntStrike === NUMBER_LENGTH) {
        Message.printGameOver();
        this.gameStatus = await this.decideGameContinuation();
        if (this.gameStatus === EXIT) {
          break;
        }
        this.initAnswer();
        this.setAnswer();
      }
    }
  }
}

const app = new App();
app.play();

export default App;
