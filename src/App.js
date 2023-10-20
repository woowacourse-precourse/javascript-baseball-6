import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const game = new NumberBaseball();

      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
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

      while (this.strike !== 3) {
        let strike = null;
        let ball = null;

        const userInput = await MissionUtils.Console.readLineAsync(
          '숫자를 입력해주세요 : '
        );

        [strike, ball] = this.checkStrikeAndBall(userInput);

        let message = '';

        if (ball) {
          message += `${ball}볼`;
        }

        if (strike) {
          message += ` ${strike}스트라이크`;
        }

        if (!ball && !strike) {
          message = '낫싱';
        }
      }
    } catch (err) {
      console.log(err);
    }
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

  // 스트라이크, 볼 개수 확인
  checkStrikeAndBall(input) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (+input[i] === this.computer[i]) {
        strike++;
      } else if (this.computer.includes(+input[i])) {
        ball++;
      }
    }

    return [strike, ball];
  }
}

export default App;

const app = new App();
app.play();
