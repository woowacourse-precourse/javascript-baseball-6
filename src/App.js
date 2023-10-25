import { Console, Random } from '@woowacourse/mission-utils';
import { 
  ASK_CONTINUE_MESSAGE, 
  START_MESSAGE, 
  END_MESSAGE, 
  INPUT_MESSAGE, 
  MAX_PICK_NUMBER, 
  MIN_PICK_NUMBER, 
  RIGHT_DIGIT_NUMBER, 
  TO_BE_CONTINUE,
} from './constant';

class App {
  constructor(){
    this.gameOn = true;
  }

  async play() {
    Console.print(START_MESSAGE);
    while (this.gameOn) {
      await this.singleGame();
      Console.print(END_MESSAGE);
      this.gameOn = await this.askContinue();
    }
  }
  
  async singleGame() {
    const answer = this.makeAnswer();
    let checkResult = { 
      strike: 0, 
      ball: 0, 
      nothing: 0,
    };
    
    while (checkResult.strike !== 3){
      const userInput = await this.receiveInput();
      this.validateUserInput(userInput);
      checkResult = this.checkInputWithAnswer(answer, userInput);
      this.printResult(checkResult);
    }
  }

  makeAnswer() {
    const computer = [];
    while (computer.length < RIGHT_DIGIT_NUMBER) {
      const number = Random.pickNumberInRange(MIN_PICK_NUMBER, MAX_PICK_NUMBER);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async receiveInput() {
    try {
      const userInput = await Console.readLineAsync(INPUT_MESSAGE);
      return userInput;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  checkInputWithAnswer(answer, userInput) {
    const result = {
      strike: 0,
      ball: 0, 
      nothing: 0,
    };
    const userInputArr = userInput.split('');
    let i = 0;
    while (i < 3) {
      if (answer.includes(Number(userInputArr[i]))){
        if (Number(userInputArr[i]) === answer[i]) {
          result.strike += 1;
        } else {
          result.ball += 1;
        }
      } else {
        result.nothing += 1;
      }
      i += 1;
    }
    return result;
  }

  async askContinue() {
    try {
      const response = await Console.readLineAsync(ASK_CONTINUE_MESSAGE);
      return this.isContinue(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  isContinue(res) {
    if (!(res === TO_BE_CONTINUE.yes || res === TO_BE_CONTINUE.no)) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
    return res === TO_BE_CONTINUE.yes;
  }

  validateUserInput(userInput) {
    const formattedValue = Number(userInput);
    
    if (this.wrongType(formattedValue)){
      throw new Error('[ERROR] 숫자 타입이 아닙니다.');
    }
    if (this.hasZero(userInput)){
      throw new Error('[ERROR] 0은 사용할 수 없습니다.');
    }
    if (this.wrongDigitNumber(formattedValue)){
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    if (this.hasSameNumber(formattedValue)) {
      throw new Error('[ERROR] 자릿수 중 같은 값이 존재합니다.');
    }
  }
  
  wrongType(userInput) {
    return isNaN(userInput);
  }
  
  hasZero(userInput) {
    return userInput.includes("0");
  }
  
  wrongDigitNumber(userInput) {
    if (userInput.toString().length !== RIGHT_DIGIT_NUMBER || userInput % 1 !== 0 || userInput < 0){
      return true;
    }
    return false;
  }
  
  hasSameNumber(userInput) {
    userInput = userInput.toString();
    if (userInput[0] === userInput[1] || userInput[1] === userInput[2] || userInput[0] === userInput[2]){
      return true;
    }
    return false;
  }

  printResult(result) {
    let str = '';
    if (result.nothing === RIGHT_DIGIT_NUMBER){
      Console.print('낫싱');
      return;
    }
    if (result.ball !== 0){
      str += `${result.ball}볼 `;
    }
    if (result.strike !== 0){
      str += `${result.strike}스트라이크`;
    }
    Console.print(str);
  }

}

export default App;
