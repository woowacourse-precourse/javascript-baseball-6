import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGE from './Constant.js';
class App {
  constructor() {
    this.answer = [];
  }

  async play() {
    Console.print(MESSAGE.START);
    await this.start();
  }
  async start() {
    this.answer = this.getRandomNumber();
    while (true) {
      const userChoice = await Console.readLineAsync(MESSAGE.ASK_INPUT);
      const isValid = this.checkInput(userChoice);
      if (!isValid) {
        throw new Error(MESSAGE.ERROR_CHOICE);
      }
      const [strike, ball] = this.compareWithAnswer(userChoice, this.answer);
      Console.print(this.changeToMessage(strike, ball));
      if (strike === 3) {
        break;
      }
    }
  }
  getRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const pickNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(pickNumber)) {
        randomNumber.push(pickNumber);
      }
    }
    return randomNumber;
  }
  checkInput(input) {
    const inputSet = new Set(input);
    const checkLength = input.length === 3;
    const checkUniqueNumber = inputSet.size === 3;
    const numberValidate = [...input].every((number) => !isNaN(Number(number)));
    return checkLength && checkUniqueNumber && numberValidate;
  }
  compareWithAnswer(userChoice, answer) {
    const choiceArray = userChoice.split('').map((input) => Number(input));
    let [strike, ball] = [0, 0];
    choiceArray.forEach((number, index) => {
      if (answer.indexOf(number) === index) {
        strike += 1;
      } else if (answer.indexOf(number) !== -1) {
        ball += 1;
      }
    });
    return [strike, ball];
  }
  changeToMessage(strike, ball) {
    let resultMessage;
    if (strike > 0 && ball > 0) {
      resultMessage = `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      resultMessage = `${strike}스트라이크`;
    } else if (ball > 0) {
      resultMessage = `${ball}볼`;
    } else {
      resultMessage = '낫싱';
    }
    return resultMessage;
  }
}

const app = new App();
app.play();

export default App;
