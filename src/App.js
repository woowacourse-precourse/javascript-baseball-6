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
  // 입력값이 검증 메서드
  validateInput(input) {
    let error = new Error();

    if(isNaN(Number(input))) {
      error.name = 'TypeError';
      error.message = '[ERROR] 숫자를 입력해주세요';
      throw error;
    } else if(input.length !== 3) {
      error.name = 'RangeError';
      error.message = '[ERROR] 3자리 숫자를 입력해주세요';
      throw error;
    } else if(input.split('').some((number) => input.indexOf(number) !== input.lastIndexOf(number))) {
      error.name = 'Duplicated Number Error';
      error.message = '[ERROR] 중복되지 않는 숫자를 입력해주세요';
      throw error;
    } else {
      this.playerInput = input;
    }
  } 
}

export default App;
