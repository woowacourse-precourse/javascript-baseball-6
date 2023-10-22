import { getUserNumberInput } from "./getUserNumberInput.js"
import { generateRandomThreeDigitNumber } from "./generateRandomThreeDigitNumber.js"
import { MissionUtils } from '@woowacourse/mission-utils'
import { getHint } from "./getHint.js"
import { getUserGameDecision } from "./getUserGameDecision.js"
import { isGameEnded } from "./isGameEnded.js"
import { isRoundEndedFromHint } from "./isRoundEndedFromHint.js"
import { View } from "./view/View.js"

class App {
  async play() {
    const view = new View();
    view.printStartMsg()
    while (true) {
      const computerNumber = generateRandomThreeDigitNumber();
      while (true) {
        const userNumber = await getUserNumberInput()
        const hint = getHint(userNumber, computerNumber);
        view.printHintMsg(hint);
        if (isRoundEndedFromHint(hint) === true) {
          view.printEndMsg();
          break;
        }
      }
      const decision = await getUserGameDecision();
      if (isGameEnded(decision) === true) {
        break;
      }
    } 
    return
  }
}

const app = new App();
app.play();

export default App;
