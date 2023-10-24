import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computerValue = this.getComputerValue();
    this.playGame = true;
  }

  getComputerValue = () => {
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }

    return COMPUTER;
  }

  isValidInput = (userInput) => {
    const INPUT_REGEX = /^[0-9]{3}$/.test(userInput);
    return INPUT_REGEX;
  }

  getUserValue = async () => {
    const USER_INPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');
    
    if (!this.isValidInput(USER_INPUT)) {
      throw new Error('[ERROR] 서로 다른 숫자 3개만 입력 가능합니다.');
    }

    const USER_VALUE = [...USER_INPUT].map((value) => Number(value));
    return USER_VALUE;
  }

  getHint = (userValue) => {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < userValue.length; i++) {
      if (userValue[i] === this.computerValue[i]) {
        strikeCount += 1;
      } else if (this.computerValue.includes(userValue[i])) {
        ballCount += 1;
      }
    }

    if (strikeCount === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return 'restart';
    } else if (strikeCount && ballCount) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    } else if (strikeCount) {
      Console.print(`${strikeCount}스트라이크`);
    } else if (ballCount) {
      Console.print(`${ballCount}볼`);
    } else {
      Console.print('낫싱');
    }
  }

  exitGame = async (userValue) => {
    const RESULT = this.getHint(userValue);

    if (RESULT) {
      const RESTART = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );

      if (RESTART === '1') {
        this.computerValue = this.getComputerValue();
      } else if (RESTART === '2') {
        this.playGame = false;
      } else {
        throw new Error('[ERROR] 1 또는 2의 숫자만 입력해주세요.');
      }
    }
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (this.playGame) {
      const USER_VALUE = await this.getUserValue();
      await this.exitGame(USER_VALUE);
    }
  }
}

export default App;
