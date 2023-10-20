import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.generateRandomNumber();
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
}

export default App;
