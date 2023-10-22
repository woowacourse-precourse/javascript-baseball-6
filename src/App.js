import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.userNum = '';
    this.answer = [];
  }

  init() {
    this.userNum = '';
    this.answer = [];
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.userInput();
    this.settingAnswer();
  }

  // 유저 입력 처리
  async userInput() {
    this.userNum =
      await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  // 정답 셋팅
  settingAnswer() {
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
