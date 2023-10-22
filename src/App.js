import { calculateBalls } from "./calculateBalls.js" 
import { calculateStrikes } from "./calculateStrikes.js"
import { getUserNumberInput } from "./getUserNumberInput.js"
import { generateRandomThreeDigitNumber } from "./generateRandomThreeDigitNumber.js"
import { MissionUtils } from '@woowacourse/mission-utils'

class App {
  async play() {
    const userNumber = await getUserNumberInput().then((userInput) => console.log(userInput));
    const computerNumber = generateRandomThreeDigitNumber();
    const cntStrikes = calculateBalls(userNumber, computerNumber)
    const cntBall = calculateStrikes(userNumber, computerNumber)
    MissionUtils.Console.print(cntStrikes, cntBall)
  }
}

const app = new App();
app.play();

export default App;
