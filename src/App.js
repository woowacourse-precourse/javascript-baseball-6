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
    this.settingAnswer();
    await this.numberBaseball();
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

  // 숫자야구게임 로직
  async numberBaseball() {
    let correctAnswer = false;
    while (!correctAnswer) {
      await this.userInput();
      let strike = 0;
      let ball = 0;

      for (let i = 0; i < this.userNum.length; i++) {
        if (this.userNum[i] === this.answer[i]) {
          strike += 1;
        } else if (this.answer.includes(this.userNum[i])) {
          ball += 1;
        }
      }

      //게임 메세지 처리
      let message = '낫싱';
      if (strike === 3) {
        message = '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
        correctAnswer = true;
      } else if (strike > 0) {
        ball > 0
          ? (message = `${ball}볼 ${strike}스트라이크`)
          : `${strike}스트라이크`;
      } else if (ball > 0) {
        message = `${ball}볼`;
      }
      MissionUtils.Console.print(message);
    }
  }
}

const app = new App();
app.play();

export default App;
