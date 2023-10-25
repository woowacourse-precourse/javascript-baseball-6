import { MissionUtils, Console } from "@woowacourse/mission-utils";
import checkNum from './Validation.js';
import { getComputerNumber, compareNum, printHint } from './Computer.js';

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let userNum;
    let restart;

    while(true){
      const computerNum = getComputerNumber(); 

      while(true){
        try{
          userNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
          checkNum(userNum);
          
          const result = compareNum(computerNum, userNum);
          printHint(result.strike, result.ball);
  
          if(result.strike === 3){
            Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            break;
          }
        }catch (error){
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
      
      restart = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      
      if( restart === "2" ) {
        break;
      }
    }
  }
}

const app = new App();
app.play()

export default App;