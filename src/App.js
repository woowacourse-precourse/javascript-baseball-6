import { MissionUtils } from '@woowacourse/mission-utils';

function printMessage(message) {
  MissionUtils.Console.print(message);
}

class NumberBaseballGame {
  constructor() {
    this.computerNumber = this.generateRandomNumber();
    this.attempts = 0;
  }

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

  checkGuess(userGuess) {
    if (userGuess.length !== 3 || !/^[1-9]{3}$/.test(userGuess)) {
      throw new Error('[ERROR] 잘못된 입력입니다. 1부터 9까지 서로 다른 3자리의 숫자를 입력하세요.');
    }
    this.attempts++;
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      const userDigit = userGuess.charAt(i);
      const computerDigit = this.computerNumber.charAt(i);

      if (userDigit === computerDigit) {
        strikes++;
      } else if (this.computerNumber.includes(userDigit)) {
        balls++;
      }
    }

    return { strikes, balls };
  }
}

class App {
  constructor() {
    this.game = new NumberBaseballGame();
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.playRound();
  }

  async playRound() {
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

    if (userInput === '2') {
      printMessage('게임을 종료합니다.');
      return;
    }

    const result = this.game.checkGuess(userInput);
    const { strikes, balls } = result;

    if (strikes === 3) {
      printMessage('3스트라이크');
      printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      printMessage(`총 시도 횟수: ${this.game.attempts}`);
      const choice = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ');

      if (choice === '1') {
        this.game = new NumberBaseballGame();
        await this.playRound();
      } else if (choice === '2') {
        printMessage('게임을 종료합니다.');
      }
    } else if (strikes === 0 && balls === 0) {
      printMessage('낫싱');
      await this.playRound();
    } else {
      printMessage(`${balls > 0 ? `${balls}볼 ` : ''}${strikes > 0 ? `${strikes}스트라이크` : ''}`);
      await this.playRound();
    }
  }
}

const app = new App();
app.play();

export default App;
