import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumber = this.pickRandomNumber();
    let clearGameFlag = false;
    while (!clearGameFlag) {
      try {
        const userSelectedNumber = await Console.readLineAsync(
          '숫자를 입력해주세요 : '
        );
        if (!this.isValidNumber(userSelectedNumber)) {
          throw new Error('숫자가 잘못된 형식입니다.');
        }
        const { strikeCounter, ballCounter } = this.compareNumber(
          computerNumber,
          userSelectedNumber
        );

        if (strikeCounter === 0 && ballCounter === 0) {
          Console.print('낫싱');
        }

        if (strikeCounter !== 0 && ballCounter !== 0) {
          Console.print(`${ballCounter}볼 ${strikeCounter}스트라이크`);
        }

        if (strikeCounter !== 0) {
          Console.print(`${strikeCounter}스트라이크`);
        }

        if (ballCounter !== 0) {
          Console.print(`${ballCounter}볼`);
        }

        if (strikeCounter === 3) {
          clearGameFlag = true;
        }
      } catch (error) {
        Console.print('[ERROR] 숫자가 잘못된 형식입니다.');
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
    return Number(randomNumber);
  }

  isValidNumber(num) {
    const numArray = String(num).split();
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
    const num1AsString = String(num1);
    const num2AsString = String(num2);
    let strikeCounter = 0;
    let ballCounter = 0;
    for (
      let numberIndex = 0;
      numberIndex <= num2AsString.length - 1;
      numberIndex++
    ) {
      const targetNumber = num2AsString[numberIndex];
      const indexOfTargetNumberInNum1 = num1AsString.indexOf(
        (num) => num === targetNumber
      );
      if (indexOfTargetNumberInNum1 === -1) {
        continue;
      }
      if (indexOfTargetNumberInNum1 === numberIndex) {
        ++strikeCounter;
      }
      ++ballCounter;
    }
    return { strikeCounter, ballCounter };
  }
}

export default App;
