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
    const stringNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const numbers = [];
    try {
      if (stringNumbers.length !== 3) {
        throw new Error('3자리 숫자를 입력해주세요');
      }
      stringNumbers.split('').map((number) => {
        if (isNaN(number)) {
          throw new Error('숫자를 입력해주세요');
        } else if (numbers.includes(Number(number))) {
          throw new Error('중복되지 않은 숫자를 입력해주세요');
        } else {
          numbers.push(Number(number));
        }
      });
    } catch (error) {
      console.log(error.message);
      return false;
    }

    this.numbers = numbers;
  }
}
class App extends User {
  async play() {
    const computer = new User();
    const user = new User();
    computer.setRandomNumber();
    user.setInputNumbers();
  }
}
const app = new App();
app.play();
export default App;
