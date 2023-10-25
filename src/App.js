import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computer = [];
    this.userInput = [];
    this.ball = 0;
    this.strike = 0;
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumbers();
    await this.startGame();
  }

  async startGame() {
    await this.getUserInput();
    this.handleException();
    this.checkMatch();
  }

  makeRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    this.computer = computer;
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 : ',
    );
    this.userInput = userInput.split('').map(Number);
  }

  handleException() {
    const filteredNumbers = [];
    if (this.userInput.length !== 3) {
      throw new Error('[ERROR] 세 자리 수를 입력해 주세요.');
    }
    this.userInput.forEach((num) => {
      if (isNaN(num) || num === 0) {
        throw new Error('[ERROR] 1~9 사이의 숫자를 입력해 주세요.');
      }
      if (filteredNumbers.includes(num)) {
        throw new Error('[ERROR] 서로 다른 세 자리 수를 입력해 주세요.');
      }
      filteredNumbers.push(num);
    });
  }

  checkMatch() {
    let ball = 0;
    let strike = 0;
    this.computer.forEach((computerNum, computerIndex) => {
      this.userInput.forEach((userNum, userIndex) => {
        if (computerNum === userNum && computerIndex === userIndex) {
          strike++;
        } else if (computerNum === userNum && computerIndex !== userIndex) {
          ball++;
        }
      });
    });
    this.ball = ball;
    this.strike = strike;
  }
}

export default App;
