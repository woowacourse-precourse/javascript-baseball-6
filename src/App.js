import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computerAnswer = this.generateRandomBallNumber();
    MissionUtils.Console.print(computerAnswer)
  }

  generateRandomBallNumber(){
    const computerAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerAnswer.join('');
  }
}

const init = new App();
init.play();

export default App;
