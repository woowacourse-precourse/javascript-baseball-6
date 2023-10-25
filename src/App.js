import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import Player from "./Player.js";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const player = new Player();
    const computer = new Computer();
    const playerInput = await player.inputValue();
    const [ball, stirke] = computer.compareAnswer(playerInput);
  }
}

const app = new App();
app.play();
export default App;
