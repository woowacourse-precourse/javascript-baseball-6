import { MissionUtils } from "@woowacourse/mission-utils";

const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  TYPE: "숫자를 입력해주세요 : ",
  ANSWER: "3스트라이크",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
}


const ERROR_MESSAGE = {
  LENGTH: "[ERROR] 입력한 문자의 길이는 3이어야 합니다.",
  NUMBER: "[ERROR] 1~9 사이의 양수만 입력 가능합니다.",
  IS_RESTART : "[ERROR] 게임의 재시작 종료를 위해서는 1 혹은 2만 입력해주세요",
}


const REGEXP = /\D/g;

const {Random, Console} = MissionUtils;

class App {
  constructor(){
    this.computerNumber = [];
    Console.print(MESSAGE.START);
  }

  makeRandomComputerNumber(){
    while(this.computerNumber.length <3){
      const number = Random.pickNumberInRange(1, 9);
      if(!this.computerNumber.includes(number)) this.computerNumber.push(number);
    }
  }

  async play(){
    this.makeRandomComputerNumber()
    while(true){
      const output = await Console.readLineAsync(MESSAGE.TYPE);
      this.checkOutputError(output)
      const answer = this.checkStrikeAndBall(output);
      Console.print(answer);

      // 게임 재시작
      if(answer === MESSAGE.ANSWER){
        const check = await this.restart()
        if(!check) break
      }
    }
  }

  checkStrikeAndBall(output){
    const check = {
      ball : 0,
      strike: 0
    }

    for(let i=0; i<output.length; i++ ){
      const num = Number(output[i]);
      const index = this.computerNumber.indexOf(num);
      if(index === -1) continue
      else if(index > -1) {
        if(index === i) check.strike+=1;
        else check.ball+=1;
      }
    }

    return this.makeMessage(check);
  }

  makeMessage({ball, strike}){
    if(ball === 0 && strike ===0) return `낫싱`;
    if(ball > 0 && strike > 0) return `${ball}볼 ${strike}스트라이크`;
    if(ball > 0) return `${ball}볼`;
    else return `${strike}스트라이크`;
  }

  async restart(){
    Console.print(MESSAGE.END);
    Console.print(MESSAGE.RESTART); 
    const isRestart = Number(await Console.readLineAsync(""));
    if(isRestart !== 1 && isRestart !==2) throw new Error(ERROR_MESSAGE.IS_RESTART);
    if(isRestart === 1){
      this.computerNumber = Random.pickUniqueNumbersInRange(1,9,3);
      return true;
    }
    else return false;
  }

  checkOutputError(str){
    if(str.length<3 || str.length >3) throw new Error(ERROR_MESSAGE.LENGTH);
    if(REGEXP.test(str)) throw new Error(ERROR_MESSAGE.NUMBER);
  }
}

const app = new App();
app.play();

export default App;
