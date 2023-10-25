import { MissionUtils } from '@woowacourse/mission-utils';

const START_MSG = '숫자 야구 게임을 시작합니다.';
const INPUT_PROCESS_MSG = '숫자를 입력해주세요.';
const INPUT_FINISH_MSG = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
const FINISH_MSG = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const ERROR_MSG = '[ERROR] 숫자만 입력해주세요.';

class App {
  constructor() {
    this.isPlay = true;
  }

  getRanNum() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  async process(computer) {
    let strike = 0;
    let ball = 0;

    let number = await MissionUtils.Console.readLineAsync(INPUT_PROCESS_MSG);

    if (number.length !== 3 || !Number(number)) {
      this.isPlay = false;
      MissionUtils.Console.print(ERROR_MSG);
      throw new Error(ERROR_MSG);
    }

    for (let i = 0; i < computer.length; i++) {
      if (computer[i] === Number(number[i])) strike++;
      else if (computer.includes(Number(number[i]))) ball++;
    }

    if (!ball && !strike) return '낫싱';
    if (ball && strike) return `${ball}볼 ${strike}스트라이크`;
    if (ball && !strike) return `${ball}볼`;
    if (!ball && strike) return `${strike}스트라이크`;
  }

  async restart() {
    const computer = this.getRanNum();
    let answer = '';

    while (answer !== '3스트라이크') {
      answer = await this.process(computer);
      await MissionUtils.Console.print(answer);
    }
  }

  async play() {
    MissionUtils.Console.print(START_MSG);

    while (this.isPlay) {
      await this.restart();
      const finish = await MissionUtils.Console.readLineAsync(INPUT_FINISH_MSG);
      this.isPlay = finish === '1';
    }

    await MissionUtils.Console.print(FINISH_MSG);
  }
}

export default App;
