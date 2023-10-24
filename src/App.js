import { MissionUtils } from "@woowacourse/mission-utils";

class App {
 
  // create random number
  setNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    // COMPUTER.sort(() => Math.random() - 0.5).join("");
    return COMPUTER.join("");
  }

  // inputnumber
  async inputUserNumber () {
    
    
    MissionUtils.Console.print("숫자를 입력해주세요: ");
    const USER_NUMBER = await MissionUtils.Console.readLineAsync();
    console.log(USER_NUMBER);
    if (USER_NUMBER.match(/\D/)) {
      throw new Error("[ERROR]");
    }
    if (USER_NUMBER.length !== 3) {
      throw new Error("[ERROR]");
    }
    return Promise.resolve(USER_NUMBER);

    
  }

  // checknumber
  checkNumber(answer, userinput) {
    console.log(userinput);
    let STRIKE = 0;
    let BALL = 0;
    userinput.split("").forEach((n, idx) => {
      if (answer.indexOf(n) == idx) {
        STRIKE++;
      } else if (answer.includes(n)) {
        BALL++;
      }
    });
    if (BALL == 0 && STRIKE == 0) {
      MissionUtils.Console.print("낫싱");
      this.inputUserNumber(answer);
    } else if (STRIKE == 3) {
      MissionUtils.Console.print(
        `${STRIKE}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
      this.Replay();
    } else if (STRIKE > 0 && BALL > 0) {
      MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
      this.inputUserNumber(answer);
    } else if (STRIKE == 0 && BALL > 0) {
      MissionUtils.Console.print(`${BALL}볼`);
      this.inputUserNumber(answer);
    } else if (BALL == 0 && STRIKE > 0) {
      MissionUtils.Console.print(`${STRIKE}스트라이크`);
      this.inputUserNumber(answer);
    }
  }

  //playmore?
  async Replay() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    const CHOICE = await MissionUtils.Console.readLineAsync();
    if (CHOICE == 1) {
      const app =new App();
      app.play();
    } else {
      //exit game
      return;
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const ANSWER = this.setNumber();
    
    this.inputUserNumber()
    .then((resolve)=>this.checkNumber(ANSWER,resolve))
    .catch(async (err)=>{
      try {
        return await Promise.reject(err.message);
      } catch (e) {
        MissionUtils.Console.print(e);
      }
      
    })
    
  
    
  }
}

export default App;
