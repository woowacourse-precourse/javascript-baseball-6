import { MissionUtils } from '@woowacourse/mission-utils';

export default class App {
  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  calculateResult(targetNumberArr, userGuessArr) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < targetNumberArr.length; i++) {
      if (targetNumberArr[i] === userGuessArr[i]) {
        strikeCount++;
      } else if (targetNumberArr.includes(userGuessArr[i])) {
        ballCount++;
      }
    }

    return { strikeCount , ballCount };
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const targetNumber = this.generateRandomNumber();
      const targetNumberArr = targetNumber.split('');

      while (true) {
        const userGuess = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        if (!/^(?!.*(.).*\1)[1-9]{3}$/.test(userGuess)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
        
        const userGuessArr = userGuess.split('');
        const result = this.calculateResult(targetNumberArr, userGuessArr);

        if (result.strikeCount  === targetNumber.length) {
          MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        } else if (result.ballCount === 0 && result.strikeCount === 0) {
          MissionUtils.Console.print('낫싱');
        } else if (result.ballCount === 0) {
          MissionUtils.Console.print(`${result.strikeCount}스트라이크`);
        } else if (result.strikeCount === 0) {
          MissionUtils.Console.print(`${result.ballCount}볼`);
        } else {
          MissionUtils.Console.print(`${result.ballCount}볼 ${result.strikeCount}스트라이크`);
        }
      }

      const choice = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

      if (choice === '1') {
        continue;
      } else if (choice === '2') {
        break;
      } else {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    }
    
  }
}

// const app = new App();
// app.play();
