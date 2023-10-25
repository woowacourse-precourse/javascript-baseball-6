import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answer = [];
  }

  async play() {
    this.gameStartMessage();
    this.generateRandomNumber();
    await this.userChoice();
  }

  gameStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.answer = computer;
  }

  async userChoice() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요: ');
    const userNumbers = userInput.split('').map(Number);

    this.userChoiceValidation(userNumbers);
  }

  userChoiceValidation(userNumbers) {
    if (userNumbers.length !== 3) {
      throw new Error('[ERROR] 3개의 숫자를 입력해주세요!');
    }

    if (!userNumbers.every((num) => num >= 1 && num <= 9)) {
      throw new Error('[ERROR] 입력값은 모두 1부터 9까지의 정수여야 합니다');
    }

    const uniqueNumbers = [...new Set(userNumbers)];
    if (uniqueNumbers.length !== 3) {
      throw new Error('[ERROR] 중복되지 않는 숫자 3개를 입력해주세요');
    }
  }
}

export default App;
