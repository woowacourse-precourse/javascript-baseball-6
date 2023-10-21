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
    Console.print('숫자 야구 게임을 시작합니다.');
    let ONOFF = 1;
    let userInput = '';
    let ball = 0;
    let strike = 0;
    let set = new Set();

    while(ONOFF == 1) {
      userInput =  await Console.readLineAsync('숫자를 입력해 주세요 : ');
      let inputNum = userInput.split('').map(el => Number(el));
      set = new Set(inputNum);
      
      if(set.size < 3) {
        // 중복값이 있으므로 예외처리
      }

      [ball, strike] = this.checkStrike(this.randNum, inputNum);
      Console.print(ball);
      Console.print(strike);
    }
    
  }

  checkStrike(ansNum, inputNum) {
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
}

export default App;
