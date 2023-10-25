import { Console } from '@woowacourse/mission-utils';
import tryMatch from './modules/tryMatch';
import getRandomUniqueNumber from './modules/getRandomUniqueNumber';
import getNextStep from './modules/getNextStep';
import Constant from './constant/Constant';

const { EXIT, START_PROMPT, EXIT_PROMPT } = Constant;

class App {
  constructor() {
    this.exit = false;
  }

  async startGame() {
    while (!this.exit) {
      const randomNumber = getRandomUniqueNumber();

      await tryMatch(randomNumber);

      const nextStep = await getNextStep();
      this.exit = nextStep === EXIT;
    }
  }

  async play() {
    Console.print(START_PROMPT);
    await this.startGame();
    Console.print(EXIT_PROMPT);
  }
}

export default App;
