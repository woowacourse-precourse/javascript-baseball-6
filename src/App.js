import { getUserNumberInput } from "./getUserNumberInput.js"
import { generateRandomThreeDigitNumber } from "./generateRandomThreeDigitNumber.js"
import { MissionUtils } from '@woowacourse/mission-utils'
import { getHint } from "./getHint.js"
import { getUserGameDecision } from "./getUserGameDecision.js"
import { isGameEnded } from "./isGameEnded.js"
import { isRoundEndedFromHint } from "./isRoundEndedFromHint.js"
import { View } from "./view/View.js"
import { Model } from "./model/Model.js"

class App {
  async play() {
    const view = new View();
    const model = new Model();
    view.printStartMsg()
    while (true) {
      const computerNumber = model.setRandomComputerNumber();
      while (true) {
        const userNumber = await getUserNumberInput()
        const hint = model.getHint(userNumber);
        view.printHintMsg(hint);
        if (model.isRoundEndedFromHint(hint) === true) {
          view.printEndMsg();
          break;
        }
      }
      const decision = await getUserGameDecision();
      if (model.isGameEnded(decision) === true) {
        break;
      }
    } 
    return
  }
}

const app = new App();
app.play();

export default App;
