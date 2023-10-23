import { Console, MissionUtils } from "@woowacourse/mission-utils";
import checkNum from './Validation.js';
import { getComputerNumber, compareNum } from './Computer.js';

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computerNum = getComputerNumber(); 
    while(true){
      try{
        const userNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
        checkNum(userNum);
        Console.print(computerNum);
        const result = compareNum(computerNum, userNum);
        Console.print(result);
      }catch (error){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
  }
}

export default App;