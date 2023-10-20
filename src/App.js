import { MissionUtils } from '@woowacourse/mission-utils';

const NUMBER_LENGTH = 3;

class App {
  answer = [];

  userInput = [];

  cntStrike = 0;

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
    } catch (error) {
      console.log(error);
    }
  }

  countStrike() {
    for (let i = 0; i < NUMBER_LENGTH; i += 1) {
      if (this.answer[i] === this.userInput[i]) {
        this.cntStrike += 1;
      }
    }
    console.log(this.cntStrike);
  }

  async play() {
    this.setAnswer();
    await this.getUserInput();
    this.countStrike();
  }
}

const app = new App();
app.play();

export default App;
