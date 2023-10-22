import { Console, MissionUtils } from "@woowacourse/mission-utils";
import {
  NOTHING,
  QUESTION_MESSAGE,
  START_MESSAGE,
  STRIKE,
  SUCCESS_MESSAGE,
  BALL,
  END_MESSAGE
} from "./Utills.js";
class App {
  constructor() {
    this.init();
  }

  init() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async play() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number)
      }
    }

  
    while (true) {
      let strikeResult = 0
      let ballResult = 0
      try {
        let numberInput = await Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        numberInput = numberInput.split("")
        for (let i = 0; i < answer.length ; i++) {
          if (answer[i] == numberInput[i]) {
            strikeResult++
          }
          else if (answer.includes(Number(numberInput[i]))) {
            ballResult++
          }
          else {

          }
        }
        if (strikeResult==3) {
          Console.print(strikeResult+STRIKE)
          break
        }

        if (strikeResult > 0 && ballResult > 0) {
          Console.print(ballResult + BALL + " " + strikeResult + STRIKE);
        } else if (strikeResult == 0 && ballResult > 0) {
          Console.print(ballResult + BALL);
        } else if (strikeResult > 0 && ballResult == 0) {
          Console.print(strikeResult + STRIKE);
        } else {
          Console.print(NOTHING);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  return this.endOrReset()
  }


  async endOrReset () {
   const endMessage = await Console.readLineAsync(END_MESSAGE)
   if (endMessage == 1) {
      this.play()
   }
   else {
      Console.print("게임 종료")
   }
  }

}

export default App;
