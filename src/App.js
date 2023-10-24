import { Random, Console } from "@woowacourse/mission-utils";
import { NORMAL_MSG, ERROR_MSG, BASEBALL } from "./constants.js";

class App {
  constructor() {
    this.randNum = this.makeRandNum();
  }

  /** 
   * 컴퓨터 랜덤 숫자를 만들어주는 함수
   * @returns {Array<number>} 랜덤 생성한 3자리 숫자 배열 
   */
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

  /**
   * 야구 게임 플레이 하는 함수
   */
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

      [ball, strike] = this.calculateBS(this.randNum, inputNum);

      if(ball == 0 && strike == 0) {
        this.printMsg(BASEBALL.NOTHING);
        continue;
      }

      if(strike == 3) {
        this.printMsg(`${strike}${BASEBALL.STRIKE}`);
        this.printMsg(NORMAL_MSG.END);
        ONOFF = await Console.readLineAsync(NORMAL_MSG.SELECT);
        if(ONOFF == 1) {
          this.randNum = this.makeRandNum();
          continue;
        }
        if(ONOFF == 2) return;
      }

      if(ball == 0) this.printMsg(`${strike}${BASEBALL.STRIKE}`);

      if(strike == 0) this.printMsg(`${ball}${BASEBALL.BALL}`);

      if(ball !== 0 && strike !== 0) this.printMsg(`${ball}${BASEBALL.BALL} ${strike}${BASEBALL.STRIKE}`);

    }

    if(ONOFF == 2) return;
    
  }

  /**
   * 볼&스트라이크 개수 체크하는 함수
   * @param {Array<number>} ansNum 컴퓨터 숫자
   * @param {Array<number>} inputNum 사용자 숫자
   * @returns {[number, number]} 볼&스트라이크 개수를 묶은 숫자 배열
   */
  calculateBS(ansNum, inputNum) {
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

  /**
   * 입력값이 유효한지 확인하는 함수
   * @param {string} userInput 사용자에게 받은 문자열
   * @param {Array<number>} inputNum userInput을 각 자릿수 배열로 만든 것
   */
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

  /**
   * 입력값이 1-9 사이의 숫자인지 체크하는 함수
   * @param {string} userInput 사용자에게 받은 문자열
   * @returns {boolean} 확인 결과에 따른 T/F 값
   */
  isNumber(userInput) {
    const regEx = /[^\d1-9]/;
    const isNum = userInput.match(regEx);
    return !isNum;
  }

  /**
   * 입력값의 길이가 3인지 확인하는 함수
   * @param {string} userInput 사용자에게 받은 문자열
   * @returns {boolean} 확인 결과에 따른 T/F 값
   */
  isValidLen(userInput) {
    return userInput.length === 3;
  }

  /**
   * 인자로 받은 문자열을 print 해주는 함수
   * @param {string} str print할 문자열
   */
  printMsg(str){
    Console.print(str);
    return;
  }

  /**
   * 오류 메시지 prefix 달아주는 함수
   * @param {string} str 오류 메시지 문자열
   * @returns prefix가 추가된 오류 메시지 반환
   */
  makeErrorMsg(str){
    return `[ERROR] ${str}`;
  }
}

export default App;
