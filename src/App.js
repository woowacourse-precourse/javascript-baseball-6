import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log(MissionUtils.Random.pickNumberInRange(1, 9));
    console.log(MissionUtils.Random.pickNumberInRange(1, 9));
    console.log(MissionUtils.Random.pickNumberInRange(1, 9));
  }
}

export default App;

const app = new App();
app.play();