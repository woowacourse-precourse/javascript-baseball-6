import { Console, Random } from "@woowacourse/mission-utils";

class App {

  async play() {
    Console.print('숫자야구 게임을 시작합니다.');
    Console.print(this.generateRandomNumbers())
  }
  generateRandomNumbers() {
    const differentRandomNumbers = [];
    while (differentRandomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!differentRandomNumbers.includes(number)) {
        differentRandomNumbers.push(number);
      }
    }
    return differentRandomNumbers;
  }
  
}
let app = new App();
app.play();

