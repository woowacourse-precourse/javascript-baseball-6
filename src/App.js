import { Console } from "@woowacourse/mission-utils";
import constant from "./constant";
import { computer_start } from "./computer";
import { finish } from "./finish";
import { player } from "./player";

class App {
  async play() {
    let restart = true;
    Console.print(constant.START_MESSAGE);
    while (restart) {
      const computer_number = computer_start();
      await player(computer_number);
      restart = await finish();
    }
  }
}
export default App;

const app = new App();
app.play();