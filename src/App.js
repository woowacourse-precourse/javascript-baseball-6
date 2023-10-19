import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const userInputNumber = await Console.readLineAsync('숫자를 입력해 주세요 : ')
    Console.print(userInputNumber)
  }
}

async function getRandomNumber() {
    const number = []; 
    while (number.length < 3) {
      const tempDigit = Random.pickNumberInRange(1, 9)
      if (!number.includes(tempDigit)) {
        number.push(tempDigit)
      }
    }
    return number
  }

const app = new App();
app.play();


export default App;

