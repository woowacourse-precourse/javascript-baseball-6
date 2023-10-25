import { Console } from "@woowacourse/mission-utils";
import { ERROR_BASE_WORD, START_MESSAGE } from "./Constants.js";
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
      if (strikeResult == 3) return await super.endOrReset();
      super.makeHint(strikeResult, ballResult);
    } catch (error) {
      throw new Error(ERROR_BASE_WORD + error); 
    }
    return await this.play();
  }
}
export default App;
