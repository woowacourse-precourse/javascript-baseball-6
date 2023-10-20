import { Console } from "@woowacourse/mission-utils";
import BallsBox from "./BallsBox.js";

class App {
  // async getAnswer() {
  //   try {
  //     const strings = await Console.readLineAsync("숫자를 입력해주세요 : ");
  //     // Console.
  //   } catch (error) {
  //     console.error("[ERROR]숫자를 다시 입력해주세요");
  //   }
  // }
  async play() {
    const balls = new BallsBox("142");
    console.log("balls : ", balls);
  }
}

const app = new App();
app.play();

export default App;
