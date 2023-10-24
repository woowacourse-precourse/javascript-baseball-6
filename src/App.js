import { Console } from "@woowacourse/mission-utils";
import { getComputerNumber, playGame, readRestart } from "./utils/Utils.js";
import MESSAGE from "./constants/messages.js";

// 게임을 시작하는 함수
const initGame = async () => {
  Console.print(MESSAGE.START);
  let restart = "1";
  while (restart === "1") {
    const computerList = getComputerNumber();
    await playGame(computerList);
    restart = await readRestart();
  }
};

class App {
  async play() {
    await initGame();
  }
}

const app = new App();
app.play();

export default App;
