import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.numberLength = 3; // 숫자의 길이
    this.computerNum = this.generateComputerNumber(); // 컴퓨터 숫자
  }

  async play() {
    // 숫자 야구 게임의 메인 함수
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
    // 컴퓨터 숫자 랜덤으로 3자리 생성하기
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
    // 사용자로부터 3자리 숫자 입력받기
    try {
      const userInput = await Console.readLineAsync('3자리 숫자를 입력하세요 (1~9): ');
      const userNum = userInput ? userInput.trim() : '';

      if (userNum === null) {
        throw new Error('[ERROR] 입력이 취소되었습니다.');
      }

      this.validateUserInput(userNum);
      return userNum;
    } catch (error) {
      return Promise.reject(error); // 에러 처리 문구 주의하기!
    }
  }

  validateUserInput(userNum) {
    // 입력받은 값이 유효성 검사, 유효하지 않은 경우 throw로 에러 처리하기
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
    // 컴퓨터 숫자와 사용자 숫자 비교하기
    let strikes = 0;
    let balls = 0;

    const computerNumbersSet = new Set(this.computerNum.split(''));
    const userNumbersSet = new Set(userNum.split(''));

    for (const digit of userNumbersSet) {
      if (computerNumbersSet.has(digit)) {
        if (this.computerNum.indexOf(digit) === userNum.indexOf(digit)) {
          // 숫자가 같고, 같은 자리에 있다면 strike
          strikes++;
        } else {
          // 숫자가 같지만, 다른 자리에 있다면 ball
          balls++;
        }
      }
    }

    return { strikes, balls };
  }

  async checkResult(strikes, balls) {
    // 숫자 비교 후 얻은 strike와 ball의 개수를 기준으로 결과 출력하기
    if (strikes === this.numberLength) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

      const option = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

      if (option === '2') {
        // 정답을 맞힌 후 2 입력 시 완전 종료
        Console.print('게임 종료');
        return true;
      }
      if (option === '1') {
        // 정답을 맞힌 후 1 입력 시 재시작
        this.computerNum = this.generateComputerNumber();
        Console.print('\n숫자 야구 게임을 시작합니다');
        return false;
      }
    }

    if (strikes > 0 || balls > 0) {
      Console.print(`${balls}볼 ${strikes}스트라이크 `); // 출력 양식 잘 맞추기!
    } else {
      Console.print('낫싱');
    }

    return false;
  }
}

export default App;

const app = new App();
app.play();
