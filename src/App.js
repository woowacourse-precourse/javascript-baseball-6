import { MissionUtils, Console } from "@woowacourse/mission-utils";

const GameStatus = {
  CONTINUE: 1,
  END: 2
};

class App {
  static isValidNumber(number) {
    const pattern = /^[1-9]{3}$/;
    if (pattern.test(number) === false)
      throw new Error('숫자 입력이 올바르지 않습니다.');
  }

  static isSameNumber(number) {
    if (/(.).*\1/.test(number)) {
      throw new Error('중복된 숫자가 있습니다.');
    }
  }
  
  static isValidRestart(input) {
    const pattern = /^[1-2]{1}$/;
    if (pattern.test(input) === false) {
      throw new Error('숫자 입력이 올바르지 않습니다.');
    }
  }

  static generateRandomNumber() {
    let computer = 0;
    const [number1, number2, number3] = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    computer = number1 * 100 + number2 * 10 + number3;
    return computer;
  }

  static printResult(ballCount, strikeCount) {
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

  static IsGameWin(computer, number) {
    let computerStr = computer.toString();
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
    App.printResult(ballCount, strikeCount);
    if (strikeCount === 3) {
      return true;
    } else {
      return false;
    }
  }

  static async play() {
    try {
      Console.print('숫자 야구 게임을 시작합니다.');
      let computer = App.generateRandomNumber();
      while(true) {
        const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
        App.isValidNumber(number);
        App.isSameNumber(number);

        const gameWin = App.IsGameWin(computer, number.toString());
        if (gameWin){
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
          App.isValidRestart(input);
          if (input == GameStatus.END) {
            Console.print('게임을 종료합니다.');
            return;
          }
          computer = App.generateRandomNumber();
        }
      }
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;