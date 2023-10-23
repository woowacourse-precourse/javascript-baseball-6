import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let isStartGame = true;
    while (isStartGame) {
      const computerNumber = this.pickRandomNumber();
      let isCorrectAnswer = false;
      while (!isCorrectAnswer) {
        const userSelectedNumber = await Console.readLineAsync(
          '숫자를 입력해주세요 : '
        );
        if (!this.isValidNumber(userSelectedNumber)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
        const { strikeCounter, ballCounter } = this.compareNumber(
          computerNumber,
          userSelectedNumber
        );

        if (strikeCounter === 0 && ballCounter === 0) {
          Console.print('낫싱');
          continue;
        }

        if (strikeCounter !== 0 && ballCounter !== 0) {
          Console.print(`${ballCounter}볼 ${strikeCounter}스트라이크`);
          continue;
        }

        if (ballCounter !== 0) {
          Console.print(`${ballCounter}볼`);
          continue;
        }

        Console.print(`${strikeCounter}스트라이크`);

        if (strikeCounter === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          isCorrectAnswer = true;
        }
      }
      const gameToggler = await this.gameController();
      if (gameToggler !== '1' && gameToggler !== '2') {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      if (gameToggler !== '1') {
        isStartGame = false;
        break;
      }
    }
  }

  async gameController() {
    const gameToggle = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    return gameToggle;
  }

  pickRandomNumber() {
    let randomNumber = '';
    while (randomNumber.length <= 2) {
      const newRandomNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(newRandomNumber)) {
        randomNumber += newRandomNumber;
      }
    }
    return randomNumber;
  }

  isValidNumber(num) {
    const numArray = num.split('');
    if (numArray.length !== 3) {
      return false;
    }
    const numToSet = new Set(numArray);
    if (numArray.length !== numToSet.size) {
      return false;
    }
    return true;
  }

  compareNumber(num1, num2) {
    let strikeCounter = 0;
    let ballCounter = 0;
    for (let numberIndex = 0; numberIndex <= num2.length - 1; numberIndex++) {
      const targetNumber = num2[numberIndex];
      const targetIndexInNum1 = num1.indexOf(targetNumber);
      if (targetIndexInNum1 === -1) {
        continue;
      }
      if (targetIndexInNum1 === numberIndex) {
        ++strikeCounter;
        continue;
      }
      ++ballCounter;
    }
    return { strikeCounter, ballCounter };
  }
}

export default App;
