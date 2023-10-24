import { Console } from "@woowacourse/mission-utils";
import RandomNumber from "./RandomNumber.js";
import Exception from "./Exception.js";
import MESSEAGE from "./Constants.js";
import Baseball from "./Baseball.js";

class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    await this.start(RandomNumber.computer());
    await this.determine();

    return;        
  }

  async start(computer) {
    const result = await this.numberAsking(computer);
    if(result !== MESSEAGE.STRIKEOUT) await this.start(computer);

    return;      
  }

  async determine() {
    const answer = await this.choiceAsking();
    if(answer === MESSEAGE.RESTART) this.replay();
    if(answer === MESSEAGE.EXIT) return;
  }

  async replay() {
    await this.start(RandomNumber.computer());
    await this.determine(); 
  } 

  async numberAsking(computer) {
    try {
      const user = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(user)) throw(MESSEAGE.ERROR);

      const baseball = new Baseball(user, computer);
      const result = baseball.outcome();
      Console.print(result);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async choiceAsking() {
    try {
      Console.print(MESSEAGE.CELEBRATE_END);
      Console.print(MESSEAGE.RESTART_EXIT);

      const answer = await Console.readLineAsync("");
      if(answer !== MESSEAGE.EXIT && answer !== MESSEAGE.RESTART) throw(MESSEAGE.ERROR);

      return answer;
    } catch(error) {
      throw new Error(error);
    }
  }
}
  
export default App;
