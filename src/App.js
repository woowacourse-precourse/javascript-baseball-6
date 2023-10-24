import { Random, Console } from "@woowacourse/mission-utils";
import { NORMAL_MSG, ERROR_MSG, BASEBALL } from "./constants.js";

class App {
  constructor() {
    this.randNum = this.makeRandNum();
  }

  makeRandNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    this.printMsg(NORMAL_MSG.START);
    let ONOFF = 1;
    let userInput = '';
    let ball = 0;
    let strike = 0;

    while(ONOFF == 1) {
      userInput =  await Console.readLineAsync(NORMAL_MSG.INPUT);
      let inputNum = userInput.split('').map(el => Number(el));

      this.checkValidation(userInput, inputNum);

      [ball, strike] = await this.checkStrike(this.randNum, inputNum);

      if(ball == 0 && strike == 0) {
        this.printMsg(BASEBALL.NOTHING);
        continue;
      }

      if(strike == 3) {
        this.printMsg(`${strike}${BASEBALL.STRIKE}`);
        this.printMsg(NORMAL_MSG.END);
        ONOFF = await Console.readLineAsync(NORMAL_MSG.SELECT);
        if(ONOFF == 1) this.randNum = this.makeRandNum();
        if(ONOFF == 2) return;
      }

      if(ball == 0) this.printMsg(`${strike}${BASEBALL.STRIKE}`);

      if(strike == 0) this.printMsg(`${ball}${BASEBALL.BALL}`);

      if(ball !== 0 && strike !== 0) this.printMsg(`${ball}${BASEBALL.BALL} ${strike}${BASEBALL.STRIKE}`);

    }

    if(ONOFF == 2) return;
    
  }

  async checkStrike(ansNum, inputNum) {
    let ball = 0;
    let strike = 0;
    for(let i = 0; i < inputNum.length; i++){
      if(inputNum[i] == ansNum[i]){
        strike++;
        continue;
      }

      if(ansNum.includes(inputNum[i])){
        ball++;
        continue;
      }
    }

    return [ball, strike];
  }

  checkValidation(userInput, inputNum) {
    let set = new Set(inputNum);

    if(!this.isNumber(userInput)) {
      throw new Error(this.makeErrorMsg(ERROR_MSG.NOT_A_NUMBER));
    }

    if(!this.isValidLen(userInput)){
      throw new Error(this.makeErrorMsg(ERROR_MSG.INVALID_LENGTH));
    }
    
    if(set.size < 3) {
      throw new Error(this.makeErrorMsg(ERROR_MSG.DUPLICATE));
    }

    return;
  }

  isNumber(userInput) {
    const regEx = /[^\d1-9]/;
    const isNum = userInput.match(regEx);
    return !isNum;
  }

  isValidLen(userInput) {
    return userInput.length == 3;
  }

  printMsg(str){
    Console.print(str);
    return;
  }

  makeErrorMsg(str){
    return `[ERROR] ${str}`;
  }
}

export default App;
