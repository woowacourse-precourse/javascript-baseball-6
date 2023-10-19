import { MissionUtils } from "@woowacourse/mission-utils";

const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  TYPE: "숫자를 입력해주세요 : ",
  ANSWER: "3스트라이크"
}

const {Random, Console} = MissionUtils;
class App {
  constructor(){
    this.computerNumber = [];
  }

  makeRandomComputerNumber(){
    while(this.computerNumber.length <3){
      const number = Random.pickNumberInRange(1, 9);
      if(!this.computerNumber.includes(number)) this.computerNumber.push(number);
    }
  }

  async play(){
    this.makeRandomComputerNumber()
    Console.print(MESSAGE.START);
    Console.print(this.computerNumber);
    while(true){
      const number = await Console.readLineAsync(MESSAGE.TYPE);
      const answer = this.checkStrikeAndBall(number);
      Console.print(answer);
      if(answer === MESSAGE.ANSWER){

      }
    }
  }

  checkStrikeAndBall(number){
    const check = {
      ball : 0,
      strike: 0
    }

    for(let i=0; i<number.length; i++ ){
      const num = Number(number[i]);
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
}

const app = new App();
app.play();
export default App;
