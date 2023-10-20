import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame.js";

class App extends InsideGame {
  constructor() {
    super();
    this.start();
  }
  // 시작과 동시에 3자리의 숫자 랜덤 생성.
  async start() {
    this.randoms = super.randomNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");  
  }
  // 사용자가 숫자를 입력하는 구간.
  // 입력 값에 따라 에러가 발생할지 계속 진행할 지 정해짐 
 async play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      try {
        const result = super.vaild(answer);
        
        if (result === "Normal Value"){
          this.ballAndStrike(answer);
        }
      } catch (error) {
        MissionUtils.Console.print(`오류 발생: ${error.message}`);
        
      }
    });
  }
  ballAndStrike(answer) {
    const ball = super.ballCheck(this.randoms, answer);
    const strike = super.strikeCheck(this.randoms, answer);

    this.print(ball,strike);
    // MissionUtils.Console.print(super.outputHint(ball, strike));

    return this.play();
  }

  print(ball, strike) {
    MissionUtils.Console.print(super.outputHint(ball, strike));
  }
}

export default App;

const app = new App();
app.play();
