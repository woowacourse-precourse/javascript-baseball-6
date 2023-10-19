import * as MissionUtils from "@woowacourse/mission-utils";
class App {
  async play() {
    this.start();
  }
  start(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    //MissionUtils.Console.print(computer); - 잘들어갔는지확인


  }



}
const app = new App();
app.play();
export default App;


