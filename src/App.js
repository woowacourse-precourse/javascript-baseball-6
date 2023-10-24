import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let isStartGame = true;
    while (isStartGame) {
      const computerNumber = this.pickRandomNumber();
      let isCorrectAnswer = false;

      while (!isCorrectAnswer) {
        const userSelectedNumber = await this.getUserNumber();
        const { strikeCounter, ballCounter } = this.compareNumber(
          computerNumber,
          userSelectedNumber
        );

        let resultString = '';

        if (ballCounter !== 0) {
          resultString += `${ballCounter}볼 `;
        }

        if (strikeCounter !== 0) {
          resultString += `${strikeCounter}스트라이크`;
        }

        if (resultString.length === 0) {
          resultString += '낫싱';
        }

        Console.print(resultString.trim());

        if (strikeCounter === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          isCorrectAnswer = true;
        }
      }

      const isGameRestarting = await this.restartGame();

      if (!isGameRestarting) {
        isStartGame = false;
      }
    }
  }

  async getUserNumber() {
    const userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!this.isValidNumber(userNumber)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return userNumber;
  }

  async restartGame() {
    const gameOptions = {
      RESTART_GAME: '1',
      END_GAME: '2',
    };
    const gameController = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    if (gameController === gameOptions.RESTART_GAME) return true;
    if (gameController === gameOptions.END_GAME) return false;
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
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

  isValidNumber(num) {
    const numArray = num.split('');
    const numToSet = new Set(numArray);
    if (numArray.length !== 3) return false;
    if (numArray.length !== numToSet.size) return false;
    return true;
  }

  compareNumber(num1, num2) {
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
}

export default App;
