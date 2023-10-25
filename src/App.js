import { Console } from "@woowacourse/mission-utils";
import makeNumber from "./makeNumber.js";
import checkStrikesBalls from "./CheckStrikesBalls.js";
import checkAnswerData from "./checkAnswerData.js";

class App {
  constructor() {
    this.computer = [];
    this.restartNo = 1;
    this.answer = '';
  }
  
  setAnswer(answer) {
    this.answer = answer;
  }

  getAnswer() {
    return this.answer;
  }

  setComputer(computer) {
    this.computer = computer;
  }

  getComputer() {
    return this.computer;
  }

  setRestartNo(restartNo) {
    this.restartNo = restartNo;
  }

  getRestartNo() {
    return this.restartNo;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.')
    
    //게임 반복
    while(Number(this.getRestartNo()) === 1) { 
      this.setComputer(await makeNumber());
      this.setAnswer('');
      
      //숫자 입력 반복
      while(true){ 
        const ANSWERINPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');
        if(await checkAnswerData(ANSWERINPUT)) {
          this.setAnswer(ANSWERINPUT);
        }

        if(this.getAnswer() === this.getComputer().join('')) {
          Console.print('3스트라이크');
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }

        const BALLSANDSTRIKES = await checkStrikesBalls(this.getAnswer(), this.getComputer());

        if(BALLSANDSTRIKES.balls > 0 && BALLSANDSTRIKES.strikes > 0) {
          Console.print(BALLSANDSTRIKES.balls + '볼 ' + BALLSANDSTRIKES.strikes + '스트라이크');
        }else if(BALLSANDSTRIKES.balls > 0) {
          Console.print(BALLSANDSTRIKES.balls + '볼');
        }else if(BALLSANDSTRIKES.strikes > 0) {
          Console.print(BALLSANDSTRIKES.strikes + '스트라이크');
        }else {
          Console.print('낫싱');
        }
      }
      
      const RESTARTNOINPUT = Number(await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'));

      if(!(RESTARTNOINPUT === 1 || RESTARTNOINPUT === 2)) {
        throw new Error('[ERROR] 1 또는 2를 입력해주세요.');
      }else {
        this.setRestartNo(RESTARTNOINPUT);
      }
    }
  }
}

export default App;
