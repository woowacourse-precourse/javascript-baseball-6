import { Console, MissionUtils } from "@woowacourse/mission-utils";
import target from './getComputerNum.js';
import checkNum from './validation.js';

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while(true){
      try{
        const userNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
        checkNum(userNum);

      }catch (error){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
    Console.print(target);
  }
}

export default App;