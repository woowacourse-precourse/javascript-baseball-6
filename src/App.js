import { MissionUtils } from "@woowacourse/mission-utils";
import randomComputeNum from "./components/randomComputeNum.js"

class App {  
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');    

    let computerNum = randomComputeNum();
    MissionUtils.Console.print(computerNum);
  }
}
const app = new App()
app.play()

export default App;
