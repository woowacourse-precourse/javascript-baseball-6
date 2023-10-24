import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer;
  }
  async play() {
    this.answer = this.randomNumbersArray();

    Console.print('숫자 야구 게임을 시작합니다.');
    Console.readLine('숫자를 입력해주세요 :', (userInput) => {
    });


  }

  randomNumbersArray() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

}

const app = new App();
app.play();

export default App;
