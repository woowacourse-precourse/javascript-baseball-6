import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.numberLength = 3;
    this.computerNum = this.generateComputerNumber();
  }

  // async play() {
  //   Console.print('\n숫자 야구 게임을 시작합니다.');

  //   while (true) {
  //     const userNum = await this.getUserNumber(); // 사용자 숫자
  //     if (userNum === null) {
  //       Console.print('게임이 종료되었습니다.');
  //       break;
  //     }

  //     const { strikes, balls } = this.compareNumbers(userNum); // 두 숫자 비교해서 strike와 ball 개수 세기

  //     const isGameEnded = await this.checkResult(strikes, balls);
  //     if (isGameEnded) {
  //       // 비교 결과 확인후 출력, 이때 게임 종료 옵션(2)을 선택했다면 종료
  //       break;
  //     }
  //   }

  //   return null;
  // }
  async play() {
    Console.print('\n숫자 야구 게임을 시작합니다');

    let isGameEnded = false;

    while (!isGameEnded) {
      const userNum = await this.getUserNumber(); // 사용자 숫자
      if (userNum === null) {
        Console.print('게임이 종료되었습니다.');
        break;
      }

      const { strikes, balls } = this.compareNumbers(userNum); // 두 숫자 비교해서 strike와 ball 개수 세기
      isGameEnded = await this.checkResult(strikes, balls);
    }

    return null;
  }

  generateComputerNumber() {
    const startInclusive = 1;
    const endInclusive = 9;
    const computerNumbers = new Set();

    while (computerNumbers.size < this.numberLength) {
      const number = Random.pickNumberInRange(startInclusive, endInclusive);
      computerNumbers.add(number);
    }

    const computerNum = [...computerNumbers].join('');
    return computerNum;
  }

  async getUserNumber() {
    try {
      const userInput = await Console.readLineAsync('3자리 숫자를 입력하세요 (1~9): ');
      const userNum = userInput ? userInput.trim() : '';

      if (userNum === null) {
        return null;
      }

      this.validateUserInput(userNum);
      return userNum;
    } catch (error) {
      Console.print('에러 발생: ' + error.message);
      return null;
    }
  }

  validateUserInput(userNum) {
    if (userNum.length !== this.numberLength) {
      throw new Error('[ERROR] 숫자는 3자리여야 합니다.');
    }

    if (!/^[1-9]{3}$/.test(userNum)) {
      throw new Error('[ERROR] 1부터 9까지의 숫자로만 입력해야 합니다.');
    }

    const userNumbersSet = new Set(userNum.split(''));

    if (this.numberLength !== userNumbersSet.size) {
      throw new Error('[ERROR] 중복된 숫자를 입력하면 안됩니다.');
    }
  }

  compareNumbers(userNum) {
    let strikes = 0;
    let balls = 0;

    const computerNumbersSet = new Set(this.computerNum.split(''));
    const userNumbersSet = new Set(userNum.split(''));

    for (const digit of userNumbersSet) {
      if (computerNumbersSet.has(digit)) {
        if (this.computerNum.indexOf(digit) === userNum.indexOf(digit)) {
          strikes++;
        } else {
          balls++;
        }
      }
    }

    return { strikes, balls };
  }

  async checkResult(strikes, balls) {
    if (strikes === this.numberLength) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      const option = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

      if (option === '2') {
        Console.print('게임이 종료되었습니다.');
        return true;
      }
      this.computerNum = this.generateComputerNumber(this.numberLength);
      Console.print('\n숫자 야구 게임을 시작합니다.');
      return false;
    }

    if (strikes > 0 || balls > 0) {
      Console.print(`${strikes}스트라이크 ${balls}볼`);
    } else {
      Console.print('낫싱');
    }

    return false;
  }
}

export default App;

const app = new App();
app.play();
