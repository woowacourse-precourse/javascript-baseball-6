import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.numberLength = 3;
    this.computerNum = this.generateComputerNumber(this.numberLength);
  }

  async play() {
    Console.print('\n숫자 야구 게임을 시작합니다.');

    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const userNum = await this.getUserNumber(); // 사용자 숫자
        const { strikes, balls } = this.compareNumbers(userNum); // 두 숫자 비교해서 strike와 ball 개수 세기

        // eslint-disable-next-line no-await-in-loop
        if (await this.checkResult(strikes, balls)) {
          // 비교 결과 확인후 출력, 이때 게임 종료 옵션(2)을 선택했다면 종료
          break;
        }
      } catch (error) {
        Console.print('에러 발생: ' + error.message);
        Console.print('예외 처리로 인해 프로그램이 종료되었습니다.');
        break;
      }
    }
  }

  generateComputerNumber() {
    const startInclusive = 1;
    const endInclusive = 9;
    const computerNumbers = [];

    while (computerNumbers.length < this.numberLength) {
      const number = Random.pickNumberInRange(startInclusive, endInclusive);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }

    if (computerNumbers.length === 3) {
      const computerNum = computerNumbers.join('');
      return computerNum;
    }
  }

  async getUserNumber() {
    let isValidInput = false;
    let userNum;

    // eslint-disable-next-line no-unreachable-loop
    while (!isValidInput) {
      // eslint-disable-next-line no-await-in-loop
      const userInput = await Console.readLineAsync('3자리 숫자를 입력하세요 (1~9): ');
      userNum = userInput.trim();
      const userNumbers = userNum.split('');
      const userNumbersSet = new Set(userNumbers);

      if (
        userNum.length !== this.numberLength ||
        !/^[1-9]{3}$/.test(userNum) ||
        this.numberLength !== userNumbersSet.size
      ) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      } else {
        isValidInput = true;
      }

      return userNum;
    }
  }

  compareNumbers(userNum) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < this.numberLength; i++) {
      const computerDigit = this.computerNum[i];
      const userDigit = userNum[i];

      if (computerDigit === userDigit) {
        strikes++;
      } else if (this.computerNum.includes(userDigit)) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  async checkResult(strikes, balls) {
    if (strikes === this.numberLength) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료합니다.');
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
