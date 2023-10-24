import { MissionUtils } from "@woowacourse/mission-utils";
import randomComputeNum from "./components/randomComputeNum.js"
import validateNum from "./components/validateNum.js"
import compareNumbers from "./components/compareNum.js"
import chooseRestart from "./components/chooseRestart.js"

async function inputNum() {
  const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ');
  return userNum;
}
class App {  
    async play() {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');    
      let shouldContinue = true;
      
      while (shouldContinue) {
        let computerNum = randomComputeNum();
        MissionUtils.Console.print(computerNum);

      let userNum = await inputNum();

      if(!validateNum(userNum)){
        throw new Error("[ERROR] 잘못된 숫자 형식입니다.");
      }

      const result = compareNumbers(computerNum, userNum);

      if (result === "3스트라이크") {
        const userChoice = await chooseRestart();
        if (userChoice !== '1') {
          shouldContinue = false;
        }
      }
    }
  }
}

const app = new App()
app.play()

export default App;
