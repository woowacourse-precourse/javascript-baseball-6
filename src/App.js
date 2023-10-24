import { MissionUtils, Console } from '@woowacourse/mission-utils';
const GAME_START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const INPUT_YOUR_NUMBER = '숫자를 입력해주세요 :';
const ERROR_MESSAGE = '[ERROR] 숫자를 잘 못 입력했습니다.';
const WINNING_MASSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const AKS_RESTART_MASSAGE =
  '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
const GAME_RESTART = 1;
const GAME_END = 2;

class App {
  async play() {
    this.displayGameStartMessage();
    let gameRestartOrEnd = GAME_RESTART;
    let answerNumber;

    while (gameRestartOrEnd === GAME_RESTART) {
      answerNumber = this.generateRandomNumbers();
      Console.print(answerNumber);

      while (true) {
        let userInput = await this.promptUserInput();

        let gameResult = this.evaluateGameResult(answerNumber, userInput);

        Console.print(gameResult);

        if (gameResult.includes(3 + '스트라이크')) {
          this.endGameMessage();
          gameRestartOrEnd = await this.askForGameEndOrRestart();
          if (gameRestartOrEnd === GAME_RESTART) {
            answerNumber = this.generateRandomNumbers();
          }
          if (gameRestartOrEnd === GAME_END) {
            break;
          }
        }
      }
    }
  }

  displayGameStartMessage() {
    const gameStartMessage = GAME_START_MESSAGE;
    Console.print(gameStartMessage);
  }

  parseInputToNumber(input) {
    return input.split('').map((number) => parseInt(number));
  }

  isValidRestartInput(restartOrEnd) {
    return (
      restartOrEnd.length === 1 &&
      (restartOrEnd[0] === 1 || restartOrEnd[0] === 2)
    );
  }

  isValidPlayerInput(inputPlayerNumber) {
    return (
      inputPlayerNumber.length !== 3 || new Set(inputPlayerNumber).size !== 3
    );
  }

  generateRandomNumbers() {
    let pickNumbers = [];
    while (pickNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!pickNumbers.includes(number)) {
        pickNumbers.push(number);
      }
    }
    return pickNumbers;
  }

  async promptUserInput() {
    const playerInput = await Console.readLineAsync(INPUT_YOUR_NUMBER);
    const playerNumber = this.parseInputToNumber(playerInput);
    if (this.isValidPlayerInput(playerNumber)) {
      throw new Error(ERROR_MESSAGE);
    }
    return playerNumber;
  }

  countStrike(a, b) {
    let howManyStrike = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        howManyStrike++;
      }
    }
    return howManyStrike;
  }

  countBall(a, b) {
    let howManyball = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.includes(b[i]) && a[i] !== b[i]) {
        howManyball++;
      }
    }
    return howManyball;
  }

  nothing(a, b) {
    if (a.every((val, index) => val !== b[index])) {
      return '낫싱';
    }
  }

  evaluateGameResult(answerNumber, playerNumber) {
    const strike = this.countStrike(answerNumber, playerNumber);
    const ball = this.countBall(answerNumber, playerNumber);

    if (strike === 0 && ball === 0) {
      return this.nothing(answerNumber, playerNumber);
    }

    const resultParts = [];
    if (ball > 0) {
      resultParts.push(`${ball}볼`);
    }
    if (strike > 0) {
      resultParts.push(`${strike}스트라이크`);
    }

    return resultParts.join(' ');
  }

  endGameMessage() {
    Console.print(WINNING_MASSAGE);
  }

  async askForGameEndOrRestart() {
    const playerInput = await Console.readLineAsync(AKS_RESTART_MASSAGE);
    const playerAnswer = this.parseInputToNumber(playerInput);
    if (!this.isValidRestartInput(playerAnswer)) {
      throw new Error(ERROR_MESSAGE);
    }
    return playerAnswer[0]; // 반환값을 숫자로 변경
  }
}

const app = new App();
app.play();

export default App;
