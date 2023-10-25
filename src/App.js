import { MissionUtils, Console } from "@woowacourse/mission-utils";

const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const INPUT_MESSAGE = '숫자를 입력해주세요 : ';
const THREE_STRIKE_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const RETRY_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
const ERROR_MESSAGE = '[ERROR]숫자가 잘못된 형식입니다.'
const NOTHING = '낫싱';
const BALL = '볼';
const STRIKE = '스트라이크';

class App {
  constructor (){
    this.answerNumber = this.makeAnsNumber();
  }
  async play() {
    Console.print(`${START_MESSAGE}`);

    while (true) {
      // 숫자를 입력받고 볼, 스트라이크 판정하는 부분.
      let inputNumber = await this.makeInputNumber();
      if (!inputNumber) break;
      let [strike, ball] = this.checkNumber(this.answerNumber, inputNumber);
      if (strike === 0 && ball === 0) Console.print(`${NOTHING}`);
      else if (strike === 0) Console.print(ball + `${BALL}`);
      else if (ball === 0) Console.print(strike + `${STRIKE}`);
      else Console.print(ball + `${BALL}` + ' ' + strike + `${STRIKE}`);
      
      // 3스트라이크인 경우
      if (strike === 3) {
        Console.print(`${THREE_STRIKE_MESSAGE}`);

        let retryNumber = await this.inputRetry();
        if (retryNumber === 1) {
          this.answerNumber = this.makeAnsNumber();
        }
        else break;
      }
    }
  }

  
// 사용자에게 수를 입력받는 메서드
  async makeInputNumber() {
    
    let inputNumber = await Console.readLineAsync(`${INPUT_MESSAGE}`);
    this.checkInputNumber(inputNumber);
    inputNumber = [...inputNumber].map(el => +el);
    return inputNumber;
  }

// 사용자 수에서 error를 찾는 메서드
  checkInputNumber(inputNumber) {
    if (inputNumber.length !== 3 || isNaN(inputNumber)) throw new Error(`${ERROR_MESSAGE}`);

  }

// 리트라이 할 것인지 묻는 메서드
  async inputRetry() {
    let message = await Console.readLineAsync(`${RETRY_MESSAGE}`);
    this.checkRetryNumber(message);
    return +message;
   
  }

// 리트라이 할 것인지 묻는 메서드의 error
  checkRetryNumber(inputNumber) {
    if (inputNumber.length !== 1 || isNaN(inputNumber) ||
    inputNumber < 0 || inputNumber > 2 
    ) throw new Error(`${ERROR_MESSAGE}`);
  }

  // 정답 수 배열 만들기.
  makeAnsNumber() {
    const numberArr = [];
    while (numberArr.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) {
        numberArr.push(number);
      }
    }
    return numberArr;
  }

  // 스트라이크, 볼 체크
  checkNumber(answerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;
    inputNumber.map((num) => {
      let idx = inputNumber.indexOf(num);
      if (answerNumber.includes(num)) {
        if (answerNumber[idx] === num) strike++;
        else ball++;
      }
    })
    return [strike, ball];
  }

}
const baseball = new App();
baseball.play();
export default App;
