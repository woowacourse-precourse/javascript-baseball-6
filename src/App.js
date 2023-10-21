import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const computerSelectedNumber = await this.pickRandomNumber();
    const userSelectedNumber = await Console.readLine(
      '숫자를 입력해주세요.',
      (usersInputNumber) => {
        return usersInputNumber;
      }
    );
    const { strikeCounter, ballCounter } = compareNumber(
      computerSelectedNumber,
      userSelectedNumber
    );
  }

  async pickRandomNumber() {
    let randomNumber = '';
    while (randomNumber.length <= 2) {
      const newRandomNumber = await Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(newRandomNumber)) {
        randomNumber += newRandomNumber;
      }
    }
    return Number(randomNumber);
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
      } else {
        ++ballCounter;
      }
    }
    return { strikeCounter, ballCounter };
  }
}

export default App;
