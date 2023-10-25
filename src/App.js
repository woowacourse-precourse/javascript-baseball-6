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
    this.checkAnswer(userNumbers);
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

  async checkAnswer(userNumbers) {
    const { ball, strike } = userNumbers.reduce(
      (acc, element, index) => {
        if (this.answer[index] === element) acc.strike++;
        else if (this.answer.includes(element)) acc.ball++;
        return acc;
      },
      { ball: 0, strike: 0 }
    );

    this.printResult(ball, strike);

    if (strike !== 3) {
      await this.userChoice();
    } else {
      this.gameEnd();
    }
  }

  printResult(ball, strike) {
    let resultMessage = '';

    if (strike === 3) {
      resultMessage = '3스트라이크';
    } else {
      const ballMessage = ball > 0 ? `${ball}볼` : '';
      const strikeMessage = strike > 0 ? `${strike}스트라이크` : '';

      resultMessage =
        [ballMessage, strikeMessage].filter(Boolean).join(' ') || '낫싱';
    }

    Console.print(resultMessage);
  }

  gameEnd() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }
}

export default App;
