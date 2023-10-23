import tryMatch from './modules/tryMatch';
import getRandomUniqueNumber from './modules/getRandomUniqueNumber';
import getNextStep from './modules/getNextStep';

const EXIT = '2';

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

  async play() {}
}

export default App;
