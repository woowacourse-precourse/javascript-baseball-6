import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    let RANDOM = {
      RANDOM_ARR : [],
      random_create : function(){
        this.RANDOM_ARR = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
        return console.log(this.RANDOM_ARR);
      },
    }
    RANDOM.random_create();
  }
}
const app = new App();
app.play();
export default App;
