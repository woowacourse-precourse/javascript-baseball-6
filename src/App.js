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
  // 볼, 스트라이크 판단 메서드
  calculateBallsAndStrikes() {
    const player = this.playerInput.split('');
    let strike = 0;
    let ball = 0;
    player.forEach((number, index) => {
      if (this.answerNumber.includes(number)) {
        if (this.answerNumber[index] === player[index]) {
          strike++;
        } else {
          ball++;
        }
      }});
    return { ball, strike };
  }
  // 힌트 출력 메서드
  printHintText(ball, strike) {
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else {
      Console.print(`${ball > 0 ? ball + '볼 ' : ''}${strike > 0 ? strike + '스트라이크' : ''}`);
    }
  }
}

export default App;
