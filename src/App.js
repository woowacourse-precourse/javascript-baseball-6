import { Console } from '@woowacourse/mission-utils';

import { generateRandomNumber } from './generateRandomNumber';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    try {
      this.computerNumber = generateRandomNumber();
      await this.userInputCheck();
    } catch (e) {
      throw new Error(`[ERROR] ${e}`);
    }
  }

  // 2. 유저, 입력 받기(123 => [1, 2, 3])
  async userInput() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요: ');
    return this.changeNumArr(userInput);
  }

  changeNumArr(number) {
    return number.split('').map(Number);
  }

  // 3. 유효성 검사 (1~9 숫자 3개 입력 가능)
  userInputValidation(nums) {
    const inputStr = nums.join('');
    const regex = /^[1-9]{3}$/;
    return regex.test(inputStr);
  }

  async userInputCheck() {
    this.userNumber = await this.userInput();
    const isValidationSuccess = this.userInputValidation(this.userNumber);
    if (isValidationSuccess) await this.compareResult();
    else throw new Error('숫자가 잘못된 형식입니다.');
  }

  // 4. 컴퓨터와 유저의 숫자 서로 비교.
  checkResult(computerNumber, userNumber) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === userNumber[i]) {
        strike++;
      } else if (computerNumber.includes(userNumber[i])) {
        ball++;
      }
    }

    // 5. 결과 출력
    this.printResult(ball, strike);
    return strike === 3;
  }

  // 5-1. 결과 출력
  printResult(ball, strike) {
    let result = '';
    if ((ball & strike) === 0) result = '낫싱 ';
    if (ball > 0) result += ball + '볼 ';
    if (strike > 0) result += strike + '스트라이크';
    Console.print(result);
  }

  async compareResult() {
    const isSuccess = this.checkResult(this.computerNumber, this.userNumber);
    if (isSuccess) {
      // 6. 게임 종료 or 초기화
      return this.finishGame();
    } else {
      return this.userInputCheck();
    }
  }

  // 6-1. 게임 종료
  finishGame() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.checkResetGame();
  }

  // 6-2. 게임 초기화 / 종료 선택
  async checkResetGame() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const isGameRestart = await Console.readLineAsync('');
    if (isGameRestart === '1') return this.play();
    else if (isGameRestart !== '2') return this.checkResetGame();
  }
}

const app = new App();
app.play();

export default App;
