import { MissionUtils } from "@woowacourse/mission-utils";

const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  TYPE: "숫자를 입력해주세요 : ",
  ANSWER: "3스트라이크",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
}

const ERROR_MESSAGE = {
  RESTART: "게임을 재시작하려면 1, 게임을 종료하려면 2를 입력해야 합니다.",
  CHECK_LENGTH: "입력 값은 숫자로 이루어져야 하고 길이는 3이어야 합니다.",
  CHECK_NUMBE: "숫자만 입력을 해야 합니다.",
  CHECK_DUPLICATE: "중복된 숫자는 입력되어서는 안됩니다."
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
        Console.print(MESSAGE.END);
        Console.print(MESSAGE.RESTART);
        const isRestart = Number(await Console.readLineAsync(""));
        if(isRestart === 1){
          this.computerNumber = Random.pickUniqueNumbersInRange(1,9,3);
        }
        else break
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

  checkRestartError(){

  }

  checkAnswerError(){

  }
}

const app = new App();
app.play();

export default App;
