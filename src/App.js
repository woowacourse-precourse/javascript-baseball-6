import { MissionUtils } from '@woowacourse/mission-utils';

function printMessage(message) {
  MissionUtils.Console.print(message);
}

class App {
  static computerNumber = '';

  static generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    App.computerNumber = computer.join('');
  }

  constructor() {
    App.generateRandomNumber(); // 클래스 메소드 호출
    this.attempts = 0;
  }

  async play() {
    printMessage('숫자 야구 게임을 시작합니다.');
    await this.playRound();
  }

  async playRound() {
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

    if (userInput === '2') {
      printMessage('게임을 종료합니다.');
      return;
    }

    if (userInput.length !== 3 || !/^[1-9]{3}$/.test(userInput)) {
      throw new Error('[ERROR] 잘못된 입력입니다. 1부터 9까지 서로 다른 3자리의 숫자를 입력하세요.');
    }

    this.attempts += 1;
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i += 1) {
      const userDigit = userInput.charAt(i);
      const computerDigit = App.computerNumber.charAt(i);

      if (userDigit === computerDigit) {
        strikes += 1;
      } else if (App.computerNumber.includes(userDigit)) {
        balls += 1;
      }
    }

    if (strikes === 3) {
      printMessage('3스트라이크');
      printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      printMessage(`총 시도 횟수: ${this.attempts}`);
      const choice = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ');

      if (choice === '1') {
        App.generateRandomNumber();
        this.attempts = 0;
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
