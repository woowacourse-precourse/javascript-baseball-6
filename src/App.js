import { Console, MissionUtils } from '@woowacourse/mission-utils';
class User {
  constructor(numbers) {
    this.numbers = numbers;
  }
  setRandomNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.numbers = numbers;
  }
  async setInputNumbers() {
    const strNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const numbers = [];
    try {
      if (strNumbers.length !== 3) {
        throw new Error('3자리 숫자를 입력해주세요');
      }
      strNumbers.split('').map((strNumber) => {
        const number = Number(strNumber);
        if (Number.isNaN(number)) {
          throw new Error('숫자를 입력해주세요');
        } else if (numbers.includes(number)) {
          throw new Error('중복되지 않은 숫자를 입력해주세요');
        } else {
          numbers.push(number);
        }
      });
    } catch (error) {
      console.log(error.message);
    }

    this.numbers = numbers;
  }
}
class App extends User {
  async play() {
    const computer = new User();
    const user = new User();
    computer.setRandomNumber();
  }
  compareNumbers(computer, user) {
    const initial = {
      strike: 0,
      ball: 0,
    };
    const { strike, ball } = computer.numbers.reduce(({ strike, ball }, number, index) => {
      if (user.numbers[index] === number) {
        strike += 1;
      } else if (user.numbers.includes(number)) {
        ball += 1;
      }
      return { strike, ball };
    }, initial);
    return { strike, ball };
  }
}
const app = new App();
app.play();
export default App;
