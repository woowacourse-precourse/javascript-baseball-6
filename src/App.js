import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor(){
    
    this.STRIKE = 0;
    this.BALL = 0;
  }
  // create random number
  setNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    // COMPUTER.sort(() => Math.random() - 0.5).join("");
    return COMPUTER.join("");
  }

  // inputnumber
  async inputUserNumber() {
    const USER_NUMBER = await Console.readLineAsync('숫자를 입력해주세요 : ');
    
    if (USER_NUMBER.match(/\D/)) {
      throw new Error("ERROR] : 숫자만 입력해 주세요.");
    }
    if (USER_NUMBER.length !== 3) {
      throw new Error("[ERROR] : 3자리 숫자를 입력해주세요.");
    }
    return USER_NUMBER;
  }

  // checknumber
  checkNumber(answer, userinput) {
    
    let COUNT = {STRIKE:0, BALL:0};
    
    userinput.split("").forEach((n, idx) => {
      
      if (answer.indexOf(n) == idx) {
        COUNT.STRIKE++;
      } else if (answer.includes(n)) {
        COUNT.BALL++;
      }
    });
    return COUNT;
  }

  async play() {
    
    Console.print("숫자 야구 게임을 시작합니다.");
    const ANSWER = this.setNumber();
    while(this.STRIKE < 3){
      const USER_INPUT = await this.inputUserNumber();
      const COUNT_PLAY = this.checkNumber(ANSWER, USER_INPUT);
      this.STRIKE = COUNT_PLAY.STRIKE;
      this.BALL = COUNT_PLAY.BALL;
      if (this.BALL == 0 && this.STRIKE == 0) {
        Console.print("낫싱");
      } else if (this.STRIKE > 0 && this.BALL > 0) {
        Console.print(`${this.BALL}볼 ${this.STRIKE}스트라이크`);
      } else if (this.BALL > 0) {
        Console.print(`${this.BALL}볼`);
      } else if (this.STRIKE > 0) {
        Console.print(`${this.STRIKE}스트라이크`);
      } 
    }
    Console.print(
      `${this.STRIKE}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
    const CHOICE = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (CHOICE == 1) {
      const app = new App();

      app.play();
    } else {
      //exit game
      return;
    }
  }
  
  
}

export default App;
