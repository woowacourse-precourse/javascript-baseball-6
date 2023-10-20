const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
}
class App {
  async play() {
    this.printStartNotification();
  }

  printStartNotification(){
    Console.print(MESSAGE.START);
  }
}

const app = new App();
app.play();

export default App;
