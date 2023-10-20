// 필요한 것
/* 
1. 
*/

import { MissionUtils } from "@woowacourse/mission-utils";
import InsideGame from "./InsideGame.js";

class App extends InsideGame {
  constructor() {
    super(); // 상속
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.input();
  }

  async input() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine("닉네임을 입력해주세요: ", (answer) => {
        resolve(answer);
      });
    });
  }
}

export default App;

const app = new App();
app.play();
