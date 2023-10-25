import { MissionUtils, Console } from "@woowacourse/mission-utils";

const GameStatus = {
  CONTINUE: 1,
  END: 2
};

class App {
  constructor() {
    this.computer = this.generateRandomNumber();
  }

  isValidNumber(number) {
    const pattern = /^[1-9]{3}$/;
    if (pattern.test(number) === false) {
      throw new Error('[ERROR] 숫자 입력이 올바르지 않습니다.');
    }
  }

  isSameNumber(number) {
    if (/(.).*\1/.test(number)) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }
  }

  isValidRestart(input) {
    const pattern = /^[1-2]{1}$/;
    if (pattern.test(input) === false) {
      throw new Error('[ERROR] 숫자 입력이 올바르지 않습니다.');
    }
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer[0] * 100 + computer[1] * 10 + computer[2];
  }

  printResult(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      Console.print('낫싱');
    }
    if (ballCount > 0 && strikeCount === 0) {
      Console.print(`${ballCount}볼`);
    }
    if (ballCount === 0 && strikeCount > 0) {
      Console.print(`${strikeCount}스트라이크`);
    }
    if (ballCount > 0 && strikeCount > 0) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }

  IsGameWin(number) {
    let computerStr = this.computer.toString();
    let numberStr = number.toString();
    let ballCount = 0;
    let strikeCount = 0;
    for (let i = 0; i < 3; ++i) {
      if (computerStr[i] === numberStr[i]) {
        ++strikeCount;
      } else if (computerStr.includes(numberStr[i])) {
        ++ballCount;
      }
    }
    this.printResult(ballCount, strikeCount);
    return strikeCount === 3;
  }

  async play() {
    try {
      Console.print('숫자 야구 게임을 시작합니다.');
      while (true) {
        const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
        this.isValidNumber(number);
        this.isSameNumber(number);
        const gameWin = this.IsGameWin(number);
        if (gameWin) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
          this.isValidRestart(input);
          if (input == GameStatus.END) {
            Console.print('게임을 종료합니다.');
            return;
          }
          this.computer = this.generateRandomNumber();
        }
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
