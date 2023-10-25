import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.startGameMessage();
    this.computerNumbers = this.generateRandomNumber();
  }

  startGameMessage = () => {
    Console.print('숫자 야구 게임을 시작합니다.');
  };

  generateRandomNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };

  getNumberInput = async () => {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const isNumeric = !Number.isNaN(parseInt(userInput, 10));
    if (!isNumeric || userInput.length !== 3) {
      throw new Error('[ERROR] 3자리 숫자를 입력해주세요.');
    }
    return userInput;
  };

  calculateResult = (computerNumbers, userInput) => {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computerNumbers.length; i++) {
      if (computerNumbers[i] === parseInt(userInput[i], 10)) {
        strike += 1;
      } else if (computerNumbers.includes(parseInt(userInput[i], 10))) {
        ball += 1;
      }
    }
    return { strike, ball };
  };

  displayResult = (result) => {
    let isGameClear = false;
    if (result.strike === 3) {
      isGameClear = true;
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (result.strike === 0 && result.ball === 0) {
      Console.print('낫싱');
    } else if (result.strike === 0) {
      Console.print(`${result.ball}볼`);
    } else if (result.ball === 0) {
      Console.print(`${result.strike}스트라이크`);
    } else {
      Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
    }
    return isGameClear;
  };

  selectRestart = async () => {
    const userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (userInput.trim() !== '1' && userInput.trim() !== '2') {
      throw new Error('[ERROR] 1 또는 2를 입력해주세요.');
    }
    return userInput.trim();
  };

  restartGame = () => {
    this.startGameMessage();
    this.computerNumbers = this.generateRandomNumber();
  };

  handleGamePlay = async () => {
    try {
      const userInput = await this.getNumberInput();
      const result = this.calculateResult(this.computerNumbers, userInput);
      const isGameClear = this.displayResult(result);
      return isGameClear;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  };

  async play() {
    let isRestart = '1';
    while (isRestart === '1') {
      const isGameClear = await this.handleGamePlay();
      if (isGameClear) {
        isRestart = await this.selectRestart();
        if (isRestart === '1') {
          this.restartGame();
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
