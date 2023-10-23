import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.isEnd = false;
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    const game = new NumberBaseball();

    while (!this.isEnd) {
      try {
        await game.run();
      } catch (err) {
        throw err;
      }

      this.isEnd =
        (await MissionUtils.Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
        )) === '1'
          ? false
          : true;
    }
  }
}

class NumberBaseball {
  constructor() {
    this.computer = null;
  }

  // 게임 시작
  async run() {
    this.init();

    let strike = null;
    let ball = null;

    while (strike !== 3) {
      const userInput = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      this.validateInput(userInput);

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

      MissionUtils.Console.print(message.trim());
    }

    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
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
