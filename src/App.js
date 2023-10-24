import { MissionUtils } from "@woowacourse/mission-utils";
import {computerRandom} from './calculator/Computer.js'
import Validation from "./calculator/Validation.js";
import { checkingScore, playGame } from "./calculator/Score.js";

class App {
    async play() {
      const answer = computerRandom();

      let userWillRetry = true;
      while (userWillRetry) {
        const arrayOfInput = await this.makeUserInput()
        const {strike,ball} = checkingScore(answer, arrayOfInput)
        playGame(strike,ball)
        // console.log(answer)

        if (strike === 3) {
          userWillRetry = false;
        }
      }
    }

    async makeUserInput() {
      const inputNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ').then(
        (value) => value
      )
      try {
        Validation.gameInputValidation(inputNumber);
      } catch(e) {
        throw e
      } 
      const arrayOfInput = Array.from(String(inputNumber),Number);
      return arrayOfInput;
    } 
};

const app = new App()
app.play()

export default App;