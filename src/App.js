import { MissionUtils } from "@woowacourse/mission-utils";
import {computerRandom} from './calculator/Computer.js'

class App {
    async play() {
      const answer = computerRandom();
      const arrayOfInput = this.makeUserInput()

    }

    async makeUserInput() {
      const inputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ').then(
        (value) => value
      )
      const arrayOfInput = Array.from(String(inputNumber),Number);
      return arrayOfInput;
    } 
}

export dafault App;