import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.generateRandomNumber();
    await this.userInputCheck();
  }

  // 1. 컴퓨터가 1~9까지의 랜덤한 숫자 3개를 선택. 단, 숫자는 겹쳐서는 안된다.
  generateRandomNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      computer.add(randomNumber);
    }
    return Array.from(computer);
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
  userInputValidation(numArr) {
    const inputStr = numArr.join('');
    const regex = /^[1-9]{3}$/;
    return regex.test(inputStr);
  }

  async userInputCheck() {
    this.userNumber = await this.userInput();
    const isChecked = this.userInputValidation(this.userNumber);
    if (isChecked) {
      // 4. 옳은 형식일 시, 컴퓨터와 유저의 숫자 서로 비교.
      await this.compareResult;
    } else {
      throw new Error('숫자가 잘못된 형식입니다.');
    }
  }

  // 4-1. 컴퓨터와 유저의 숫자 서로 비교.
  checkResult(computerNumber, userNumber) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === userNumber[i]) {
        strike++;
      } else {
        if (computerNumber.includes(userNumber[i])) {
          ball++;
        }
      }
    }

    // 결과 출력

    return strike === 3;
  }

  async compareResult() {
    const isSuccess = this.checkResult(this.computerNumber, this.userNumber);
    if (isSuccess) {
      // 게임 초기화
    } else {
      this.userInputCheck();
    }
  }
}

const app = new App();
app.play();

export default App;
