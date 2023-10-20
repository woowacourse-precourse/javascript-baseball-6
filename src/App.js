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

        const { ballCount, strikeCount } = this.compareNumber(
          input,
          this.randomNumArr
        );
        this.printResult(ballCount, strikeCount);
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

  compareNumber(userNum, computerNumArr) {
    const userNumArr = [...userNum].map((num) => Number(num));

    // 볼: 같은 수가 '다른'자리 에 있어야 한다.
    const ballCount = userNumArr.filter(
      (num, idx) => computerNumArr.includes(num) && computerNumArr[idx] !== num
    ).length;

    // 스트라이크: 같은 수가 같은 자리에 있어야 한다.
    const strikeCount = userNumArr.filter(
      (num, idx) => computerNumArr[idx] === num
    ).length;

    return { ballCount, strikeCount };
  }

  printResult(ball, strike) {
    let message = '';
    if (ball > 0) message += `${ball}볼 `;
    if (strike > 0) message += `${strike}스트라이크`;
    if (ball === 0 && strike === 0) message = '낫싱';

    Console.print(message);

    if (strike === 3) this.finishGame();
    else this.getUserNumber();
  }

  finishGame() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }
}

const app = new App();
app.play();

export default App;
