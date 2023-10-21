import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  //게임시작
  start(){ 
    Console.print("숫자 야구 게임을 시작합니다."); 
  }
  
  async play() {
    this.start();
  }
}

export default App;