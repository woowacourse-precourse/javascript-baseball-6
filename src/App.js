import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame.js";

class App extends InsideGame {
  constructor() {
    super();
    this.start();
  }
  async start() {
    this.randoms = super.randomNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      try {
        const result = super.vaild(answer);
        
        if (result === "Normal Value"){
          this.print(answer);
        }
      } catch (error) {
        MissionUtils.Console.print(`오류 발생: ${error.message}`);
        
      }
    });
  }
  print(answer) {

  }
}

export default App;

const app = new App();
app.play();
