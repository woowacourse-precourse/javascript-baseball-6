import { MissionUtils } from '@woowacourse/mission-utils';

const NUMBER_LENGTH = 3;

class App {
  answer = [];

  userInput = [];

  cntStrike = 0;

  cntBall = 0;

  setAnswer() {
    while (this.answer.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  async getUserInput() {
    try {
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
    } catch (error) {
      MissionUtils.Console.print(error);
    }
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

  printResult() {
    if (this.cntBall === 0 && this.cntStrike === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }

    if (this.cntBall === 0 && this.cntStrike === 3) {
      MissionUtils.Console.print(
        '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      );
      return;
    }

    if (this.cntBall === 0) {
      MissionUtils.Console.print(`${this.cntStrike}스트라이크`);
      return;
    }

    if (this.cntStrike === 0) {
      MissionUtils.Console.print(`${this.cntBall}볼`);
      return;
    }

    MissionUtils.Console.print(`${this.cntBall}볼 ${this.cntStrike}스트라이크`);
  }

  async play() {
    this.setAnswer();
    await this.getUserInput();
    this.countStrike();
    this.countBall();
    this.printResult();
  }
}

const app = new App();
app.play();

export default App;
