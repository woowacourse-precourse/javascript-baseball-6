import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer;
  }
  async play() {
    this.answer = this.randomNumbersArray();

    Console.print('숫자 야구 게임을 시작합니다.');
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 :');

    this.checkUserInput(userInput);


  }

  randomNumbersArray() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  checkUserInput(userInput) {
    if (userInput.length > 3) {
      throw Error('3자리의 수를 입력해주세요');
    }
  }
}

const app = new App();
app.play();

export default App;
