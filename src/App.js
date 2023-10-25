import { Console } from "@woowacourse/mission-utils";
import { CORRECT_MESSAGE, END_MESSAGE, END_OR_RESET_MESSAGE, ERROR_BASE_WORD, START_MESSAGE } from "./Constants.js";
import Game from "./Game.js";
class App extends Game {
  constructor() {
    super();
    this.init();
  }

  init() {
    Console.print(START_MESSAGE);
    this.answer = this.makeAnswer();
  }

  async play() {
    try {
      let numberInput = await super.getNumberInput();
      const [strikeResult, ballResult] = super.checkAnswer(numberInput);
      if (strikeResult == 3) return await this.endOrReset();
      super.makeHint(strikeResult, ballResult);
    } catch (error) {
      throw new Error(ERROR_BASE_WORD + error);
    }
    return await this.play();
  }
  async endOrReset() {
    Console.print(CORRECT_MESSAGE);
    const endMessage = await Console.readLineAsync(END_OR_RESET_MESSAGE);
    if (endMessage == 1) {
      this.answer = this.makeAnswer();
      await this.play();
    } else {
      Console.print(END_MESSAGE);
    }
  }
}
export default App;
