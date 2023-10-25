import { MissionUtils } from "@woowacourse/mission-utils";
import randomComputeNum from "./components/randomComputeNum.js"
import validateNum from "./components/validateNum.js"
import compareNumbers from "./components/compareNum.js"
import {inputNum} from "./components/inputNum.js"
import inputRestartNum from "./components/doneOrRestart.js"

class App {  
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');    
    
    let computerNum = randomComputeNum();

    while(true){
      let userNum = await inputNum();
      
      if(!validateNum(userNum)){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
      }      
      // console.log(userNum)

      if(compareNumbers(computerNum, userNum)){ // 3 스트라이크인 경우
        let restartNum = await inputRestartNum();
        if(restartNum === "1"){ // 1이면 재시작
          computerNum = randomComputeNum();
        }else if(restartNum === "2"){ // 2이면 종료
          break;
        }else{ // 이외는 에러 처리
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    }
  }
}
export default App;



const app = new App()
app.play()

