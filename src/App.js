import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.playing();
  }

  async playing() {
    const computerNumberArray = this.setComputerNumber();

    while (true) {
      const answer = await this.checkNumber(computerNumberArray);
      if (answer === 1) {
        break;
      }
    }

    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.restartOrExit();
  }

  setComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  async getUserNumber() {
    const user = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해 주세요 : '
    );

    if (isNaN(user)) {
      throw new Error('숫자를 입력해주세요');
    }

    const numberArray = user.toString().split('').map(Number);

    if (numberArray.length !== 3) {
      throw new Error('[ERROR] 세자리 숫자를 입력해주세요');
    }

    numberArray.forEach((number) => {
      if (number === 0) {
        throw new Error('[ERROR] 1부터 9까지의 숫자만 입력해주세요');
      }
    });

    const checkArray = [...new Set(numberArray)];

    if (checkArray.length < 3) {
      throw new Error('[ERROR] 서로 다른 수를 입력해주세요');
    }

    return numberArray;
  }

  async checkNumber(computerNumberArray) {
    const userNumberArray = await this.getUserNumber();
    const ballCheckArray = [];
    const gameState = {
      continue: 0,
      end: 1,
    };
    let strikeCount = 0;
    let ballCount = 0;

    computerNumberArray.forEach((computerNumber, i) => {
      if (computerNumber === userNumberArray[i]) {
        strikeCount += 1;
      } else {
        ballCheckArray.push(userNumberArray[i]);
      }
    });

    if (strikeCount === 3) {
      MissionUtils.Console.print('3스트라이크');
      return gameState.end;
    }

    ballCheckArray.forEach((ballCheck) => {
      if (computerNumberArray.includes(ballCheck)) {
        ballCount += 1;
      }
    });

    if (strikeCount === 0 && ballCount === 0) {
      MissionUtils.Console.print('낫싱');
      return gameState.continue;
    }

    if (strikeCount !== 0 && ballCount !== 0) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      return gameState.continue;
    }

    MissionUtils.Console.print(
      strikeCount ? `${strikeCount}스트라이크` : `${ballCount}볼`
    );
    return gameState.continue;
  }

  async restartOrExit() {
    const choice = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );

    if (choice === '1') {
      this.play();
    } else if (choice === '2') {
      MissionUtils.Console.print('게임을 종료합니다.');
    } else {
      throw new Error('[ERROR] 1또는 2를 입력해주세요');
    }
  }
}

export default App;
