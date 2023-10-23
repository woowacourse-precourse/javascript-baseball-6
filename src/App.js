import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      this.displayGameStartMessage();
      let playAgain = 1;
      let answerNumber;

      while (playAgain === 1) {
        answerNumber = this.generateRandomNumbers();

        while (true) {
          let userInput = await this.promptUserInput();

          if (userInput.length !== 3 || new Set(userInput).size !== 3) {
            throw new Error('[ERROR] 숫자를 잘 못 입력했습니다.');
          }

          let result = this.evaluateGameResult(answerNumber, userInput);
          if (result.strike === 3) {
            Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            playAgain = await this.askForAnotherGame();
            if (playAgain === 1) {
              answerNumber = this.generateRandomNumbers();
            }

            if (playAgain === 2) {
              break;
            }
          }
        }
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  displayGameStartMessage() {
    const gameStartMessage = 'test';
    Console.print(gameStartMessage);
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
    let playerInput = await Console.readLineAsync('숫자를 입력해주세요 :');

    return playerInput;
  }

  makeNumberToString(playerNumber) {
    this.playerNumber = playerNumber
      .split('')
      .map((number) => parseInt(number));
    return playerNumber;
  }

  strike = (a, b) => {
    let howManyStrike = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        howManyStrike++;
      }
    }
    return howManyStrike;
  };
  ball = (a, b) => {
    let ball = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.includes(b[i]) && a[i] !== guess[i]) {
        ball++;
      }
    }
    return ball;
  };

  nothing = (a, b) => {
    if (a.every((val, index) => val !== b[index])) {
      return '낫싱';
    }
  };

  evaluateGameResult(answerNumber, playerNumber) {
    let strike = this.strike(answerNumber, playerNumber);
    let ball = this.ball(answerNumber, playerNumber);
    let nothing = this.nothing(answerNumber, playerNumber);

    if (strike === 0 && ball === 0) {
      return nothing;
    }

    if (strike === 0 || ball !== 0) {
      return `${ball}볼`;
    }

    if (ball === 0 || strike !== 0) {
      return `${strike}스트라이크`;
    }

    return `${ball}볼 ${strike}스트라이크`;
  }

  async askForAnotherGame() {
    let plyerInputOneorTwo = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    let restartOrEnd = plyerInputOneorTwo
      .split('')
      .map((number) => parseInt(number));
    if (
      restartOrEnd.length !== 1 ||
      (restartOrEnd[0] !== 1 && restartOrEnd[0] !== 2)
    ) {
      throw new Error('[ERROR]');
    }
    return restartOrEnd[0]; // 반환값을 숫자로 변경
  }
}

const app = new App();
app.play();

export default App;
