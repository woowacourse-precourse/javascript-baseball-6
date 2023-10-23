import { Random, Console } from "@woowacourse/mission-utils";

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
    this.printMsg('숫자 야구 게임을 시작합니다.');
    let ONOFF = 1;
    let userInput = '';
    let ball = 0;
    let strike = 0;
    let set = new Set();

    while(ONOFF == 1) {
      userInput =  await Console.readLineAsync('숫자를 입력해 주세요 : ');
      let inputNum = userInput.split('').map(el => Number(el));

      if(!this.isNumber(userInput)) {
        throw new Error('[ERROR] 숫자가 아닌 값이 입력되었습니다.');
      }

      if(!this.isValidLen(userInput)){
        throw new Error('[ERROR] 유효하지 않은 길이입니다.');
      }
      
      set = new Set(inputNum);
      if(set.size < 3) {
        // 중복값이 있으므로 예외 처리
        throw new Error('[ERROR] 중복 값이 입력되었습니다.');
      }

      [ball, strike] = await this.checkStrike(this.randNum, inputNum);

      if(ball == 0 && strike == 0) {
        this.printMsg('낫싱');
        continue;
      }

      if(strike == 3) {
        this.printMsg('3스트라이크');
        this.printMsg('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        ONOFF = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if(ONOFF == 1) {
          this.randNum = this.makeRandNum();
        }
        continue;
      }

      if(ball == 0){
        this.printMsg(`${strike}스트라이크`);
        continue;
      }

      if(strike == 0){
        this.printMsg(`${ball}볼`);
        continue;
      }

      this.printMsg(`${ball}볼 ${strike}스트라이크`);
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
}

export default App;
