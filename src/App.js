import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answerNumber = '';
    this.playerInput = '';
  }
  // 랜덤 숫자 생성 메서드
  setAnswerNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.answerNumber = numbers.join('');
  }
}

export default App;
