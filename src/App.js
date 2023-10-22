import { print, readLineAsync } from "./utils/console.js";
import { pickNumberInRange } from "./utils/random.js";

class App {
  async play() {
    const t = await readLineAsync("입출력 테스트: ");
    print(t);

    const number = pickNumberInRange(1, 10);
    print(number);
  }
}

export default App;
