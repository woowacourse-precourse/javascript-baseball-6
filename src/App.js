import { calculateBalls } from "./calculateBalls.js" 
import { calculateStrikes } from "./calculateStrikes.js"
import { getUserNumberInput } from "./getUserNumberInput.js"
import { generateRandomThreeDigitNumber } from "./generateRandomThreeDigitNumber.js"
import { MissionUtils } from '@woowacourse/mission-utils'

class App {
  async play() {
    const computerNumber = generateRandomThreeDigitNumber();
    const userNumber = await getUserNumberInput()
    const cntBall = calculateBalls(userNumber, computerNumber)
    const cntStrike = calculateStrikes(userNumber, computerNumber)
    console.log(userNumber, computerNumber)
    console.log(cntStrike, cntBall)
  }
}

const app = new App();
app.play();

export default App;
