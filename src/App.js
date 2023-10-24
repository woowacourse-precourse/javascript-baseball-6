import {Random, Console} from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    
    while (true) {
      const secretNumber = this.generateRandomNumber();
    
  }
}


  generateRandomNumber() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    for (let i = 0; i < 3; i++) {
      const digit = Random.pickNumberInRange(1, numbers.length) - 1;
      result.push(numbers.splice(digit, 1)[0]);
    }
    return result;
  }
export default App;
