import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
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
  }

  displayGameStartMessage() {
    const gameStartMessage = '숫자 야구 게임을 시작합니다.';
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
    let playerNumber = playerInput.split('').map((number) => parseInt(number));

    return playerNumber;
  }

  evaluateGameResult(answerNumber, playerNumber) {
    let computerPickNumbers = answerNumber;
    let playerPickNumbers = playerNumber;

    let strike = 0;
    let ball = 0;
    let nothing = '낫싱';

    for (let i = 0; i < 3; i++) {
      if (playerPickNumbers[i] === computerPickNumbers[i]) {
        strike++;
      }
      if (
        playerPickNumbers[i] === computerPickNumbers[(i + 1) % 3] ||
        playerPickNumbers[i] === computerPickNumbers[(i + 2) % 3]
      ) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      Console.print(nothing);
    } else if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike === 0 && ball > 0) {
      Console.print(`${ball}볼`);
    } else if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
    }

    return { strike, ball };
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
