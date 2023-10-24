import { Console, Random } from '@woowacourse/mission-utils';

class App {
  GAME_OPTIONS = {
    RESTART_GAME: '1',
    END_GAME: '2',
  };

  ERROR_MESSAGE = {
    INCORRECT_FORMAT_NUMBER: '[ERROR] 숫자가 잘못된 형식입니다.',
  };

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let isGameStarting = true;
    while (isGameStarting) {
      const computerNumber = this.pickRandomNumber();
      let isCorrectAnswer = false;

      while (!isCorrectAnswer) {
        const userSelectedNumber = await this.getUserNumber();
        const { strikeCounter, ballCounter } = this.calculateBallAndStrike(
          computerNumber,
          userSelectedNumber
        );

        const resultString = this.getResultString(ballCounter, strikeCounter);
        Console.print(resultString);

        if (strikeCounter === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          isCorrectAnswer = true;
        }
      }

      const isGameRestarting = await this.restartGame();
      if (!isGameRestarting) {
        isGameStarting = false;
      }
    }
  }

  pickRandomNumber() {
    let randomNumber = '';
    while (randomNumber.length < 3) {
      const newRandomNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(newRandomNumber)) {
        randomNumber += newRandomNumber;
      }
    }
    return randomNumber;
  }

  async getUserNumber() {
    const userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!this.isValidNumber(userNumber)) {
      throw new Error(this.ERROR_MESSAGE.INCORRECT_FORMAT_NUMBER);
    }
    return userNumber;
  }

  isValidNumber(num) {
    const numArray = num.split('');
    const numToSet = new Set(numArray);
    if (numArray.length !== 3) return false;
    if (numArray.length !== numToSet.size) return false;
    return true;
  }

  calculateBallAndStrike(num1, num2) {
    let strikeCounter = 0;
    let ballCounter = 0;
    for (let numberIndex = 0; numberIndex <= num2.length - 1; numberIndex++) {
      const targetNumber = num2[numberIndex];
      const targetIndexInNum1 = num1.indexOf(targetNumber);
      if (targetIndexInNum1 === numberIndex) {
        ++strikeCounter;
        continue;
      }
      if (targetIndexInNum1 !== -1) {
        ++ballCounter;
      }
    }
    return { strikeCounter, ballCounter };
  }

  getResultString(ballCounter, strikeCounter) {
    let gameResult = '';
    if (ballCounter !== 0) {
      gameResult += `${ballCounter}볼 `;
    }
    if (strikeCounter !== 0) {
      gameResult += `${strikeCounter}스트라이크`;
    }
    if (gameResult.length === 0) {
      gameResult += '낫싱';
    }
    return gameResult.trim();
  }

  async restartGame() {
    const gameController = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    if (gameController === this.GAME_OPTIONS.RESTART_GAME) return true;
    if (gameController === this.GAME_OPTIONS.END_GAME) return false;
    throw new Error(this.ERROR_MESSAGE.INCORRECT_FORMAT_NUMBER);
  }
}

export default App;
