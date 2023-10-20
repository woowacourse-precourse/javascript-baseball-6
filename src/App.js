import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  async play() {
    try {
      const game = new NumberBaseball();

      await game.run();
    } catch (err) {
      throw err;
    }
  }
}

class NumberBaseball {
  constructor() {
    this.computer = null;
  }

  // 게임 시작
  async run() {
    try {
      this.init();
    } catch (err) {}
  }

  // 게임 초기화
  init() {
    this.computer = this.getRandomAnswer();
  }

  // 컴퓨터 정답 랜덤하게 생성
  getRandomAnswer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  // 유효값 검증
  validateInput(input) {
    // 숫자로 변환
    const validInput = new Set([...input].map(Number).filter((n) => n));

    if (input.length !== 3 || validInput.size !== 3) {
      return false;
    }

    return true;
  }
}

export default App;

const app = new App();
app.play();
