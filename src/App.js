import { Console, Random } from "@woowacourse/mission-utils";

class App {
  calculateResult(computer, userGuess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userGuess[i] === computer[i]) {
        strikes++;
      } else if (computer.includes(userGuess[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) {
      return '낫싱';
    } else {
      return `${balls ? `${balls}볼 ` : ''}${strikes ? `${strikes}스트라이크` : ''}`;
    }
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const computer = this.generateComputerNumber();
    const userGuess = await this.getUserGuess();
    console.log(computer)
    const result = this.calculateResult(computer, userGuess);

    Console.print(`숫자를 입력해주세요 : ${userGuess}`)

    Console.print(result);
  }

   /* 컴퓨터 숫자고르기 */
   generateComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  /* 사용자 값 받기 */
  async getUserGuess() {
    while (true) {
      const userGuess = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if (this.isValidGuess(userGuess)) {
        return userGuess;
      } else {
        throw new Error('[ERROR]서로 다른 수로 이루어진 3자리의 수를 입력해주세요.');
      }
    }
  }

  isValidGuess(guess) {
    return /^[1-9]{3}$/.test(guess) && new Set(guess).size === 3;
  }

  calculateResult(computer, userGuess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userGuess[i] === computer[i]) {
        strikes++;
      } else if (computer.includes(userGuess[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) {
      return '낫싱';
    } else {
      return `${balls ? `${balls}볼 ` : ''}${strikes ? `${strikes}스트라이크` : ''}`;
    }
  }
}

const app = new App();
app.play();

export default App;
