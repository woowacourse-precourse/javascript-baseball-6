import { MissionUtils } from "@woowacourse/mission-utils";
import { generateComputeNum } from "./GenerateAnswer.js";
import { inputUserNum } from "./Input.js";
import { checkUserNum}  from "./CheckNum.js"
import { compareNum } from "./Compare.js";
import { inputRestartNum } from "./Restart.js";

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let computerNum = generateComputeNum();

    while(true){
      let userNum = await inputUserNum();
      
      if(!checkUserNum(userNum)){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if(compareNum(computerNum, userNum)){ // 3 스트라이크인 경우
        let restartNum = await inputRestartNum();

        if(restartNum === "1"){ // 1이면 재시작
          computerNum = generateComputeNum();
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
