import { MissionUtils } from "@woowacourse/mission-utils";
import {computerRandom} from './calculator/Computer.js'
import Validation from "./calculator/Validation.js";
import { checkingScore } from "./calculator/Score.js";

class App {
    async play() {
      const answer = computerRandom();
      const arrayOfInput = this.makeUserInput()
      const {a,b} = checkingScore(answer, arrayOfInput)

    }

    async makeUserInput() {
      const inputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ').then(
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