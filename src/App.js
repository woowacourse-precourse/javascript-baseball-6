import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "./Validation/index.js";
import { computerRandom } from "./Domain/computer.js";
import { playGame } from "./Domain/score.js";


class App {

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.progressGame(input)
    });
  }


  getUserNumberInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.progressGame(input)
    });
  }
  

  progressGame(userNumberInput) {
    try {
      Validation.gameInputValidation(userNumberInput);
    } catch (e) {
      throw e
    }

    const arrayOfInput = Array.from(String(userNumberInput),Number);
    console.log(arrayOfInput)
    

    const computerInputNumber = computerRandom()
    console.log(computerInputNumber)


    const message = playGame(computerInputNumber, arrayOfInput)
    console.log(message)

  
    }
    
  } 



const app = new App();
app.play();

export default App;