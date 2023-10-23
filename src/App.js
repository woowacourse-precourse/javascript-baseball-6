import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    await init();
  }
}
const print = (message) => Console.print(message);
const input = async (input = {}) => await Console.readLineAsync(input);

export default App;
