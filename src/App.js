import { calculateBalls } from "./calculateBalls.js" 
import { calculateStrikes } from "./calculateStrikes.js"
import { getUserNumberInput } from "./getUserNumberInput.js"
import { generateRandomThreeDigitNumber } from "./generateRandomThreeDigitNumber.js"
import { MissionUtils } from '@woowacourse/mission-utils'
import { getHint } from "./getHint.js"
import { getUserGameDecision } from "./getUserGameDecision.js"

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    while (true) {
      const computerNumber = generateRandomThreeDigitNumber();
      const userNumber = await getUserNumberInput()
      while (true) {
        const hint = getHint(userNumber, computerNumber);
        MissionUtils.Console.print(hint);
        if (isRoundEndedFromHint(hint) === true) {
          break;
        }
      }
      getUserGameDecision()
    }
  }
}

const app = new App();
app.play();

export default App;
