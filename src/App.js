import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./MESSAGE.js";

class App {
  async play() {
    await init();
  }
}
// 기본 입출력 함수
const print = (message) => Console.print(message);
const input = async (input = {}) => await Console.readLineAsync(input);

//init - 게임 시작메시지출력, 게임 진행시작
const init = async () => {
  while (true) {
    print(MESSAGE.GAME_START);
  }
};

export default App;
