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
    await this.playRound();
  }

  async playRound() {
    while (true) {
      await this.startGame();
      if (this.strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const restart = await this.restart();
        if (!restart) break;
      }
    }
  }

  async startGame() {
    await this.getUserInput();
    this.handleException();
    this.checkMatch();
    this.printResult();
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

  printResult() {
    if (this.strike === 0 && this.ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (this.strike !== 0 && this.ball === 0) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    } else if (this.strike === 0 && this.ball !== 0) {
      MissionUtils.Console.print(`${this.ball}볼`);
    } else {
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
  }

  async restart() {
    const number = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );
    if (number !== '1' && number !== '2') {
      throw new Error('[ERROR] 잘못된 입력입니다. 1 또는 2만 입력해주세요.');
    }
    if (number === '1') {
      this.userInput = [];
      this.computer = [];
      this.ball = 0;
      this.strike = 0;
      this.makeRandomNumbers();
      await this.playRound();
    }
  }
}

export default App;
