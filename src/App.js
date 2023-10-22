import { Console } from "@woowacourse/mission-utils";
import randomNumber from "./PickRandom.js";
import getNumber from "./Input.js";
import compareNumber from "./Compare.js";

class App {
  async play() {
    const answer = randomNumber;
    while (true) {
      const input = await getNumber();
      const { result, message } = compareNumber(answer, input);
      Console.print(message);
      if (result === true) break;
    }
  }
}

const game = new App();
game.play();

export default App;
