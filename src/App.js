import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.randomNumArr = null;
  }

  startGame() {
    this.createRandomNumber();
    this.getUserNumber();
  }

  createRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.randomNumArr = computer;
  }

  getUserNumber() {
    Console.readLineAsync('숫자를 입력해주세요 : ')
      .then((input) => {
        if (!this.isInputValid(input)) {
          throw new Error('[Error] 숫자가 잘못된 형식입니다.');
        }
      })
      .catch((error) => {
        Console.print(error.message);
      });
  }

  isInputValid(userInput) {
    // 1~9 사이의 숫자로 이루어진 3자리 숫자인지 확인 하는 정규 표현식
    const checkOnlyNumRegExp = /^[1-9]{3}$/;

    // 중복되는 숫자가 있는지 확인
    const numSet = new Set(userInput);

    return numSet.size === 3 && checkOnlyNumRegExp.test(userInput);
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }
}

const app = new App();
app.play();

export default App;
