import { Console } from "@woowacourse/mission-utils";
import RandomNumber from "./RandomNumber.js";
import MESSEAGE from "./Constants.js";
import Qna from "./Qna.js";

class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    await this.start(RandomNumber.computer());
    await this.choice();

    return;        
  }

  async start(computer) {
    const result = await Qna.numberAsking(computer);
    if(result !== MESSEAGE.STRIKEOUT) await this.start(computer);

    return;      
  }

  async choice() {
    const answer = await Qna.choiceAsking();
    if(answer === MESSEAGE.RESTART) this.replay();
    if(answer === MESSEAGE.EXIT) return;
  }

  async replay() {
    await this.start(RandomNumber.computer());
    await this.choice(); 
  } 
}
  
export default App;

