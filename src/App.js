import { Console } from "@woowacourse/mission-utils";
import { getUserAnswer, getUserNumber } from "./userInput";
import { checkNumber, countCheck, answerPrint } from "./numberCheck";
import { randomNumber } from "./random";

// 실행
class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.')

    let computer_number = randomNumber();
    let userNumber;
    
    while(true){
      userNumber = await getUserNumber();

      if(checkNumber(userNumber)){
        throw new Error("[ERROR]");
      }

      let [ball, strike] = countCheck(userNumber, computer_number);
      
      const ANSWER = answerPrint(ball, strike);
      Console.print(ANSWER);
      if(strike === 3){
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        let playerAnswer = await getUserAnswer();
        if(playerAnswer === "2"){
          break;
        }
        else {
          computer_number = randomNumber();
        }
      }
    }
  }
}

export default App;
