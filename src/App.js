import { Console, Random }  from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.input = [];
    this.computer = [];
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

const app = new App();
app.play();


export default App;
