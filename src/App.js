import { Console } from '@woowacourse/mission-utils';
import tryMatch from './modules/tryMatch';
import getRandomUniqueNumber from './modules/getRandomUniqueNumber';
import getNextStep from './modules/getNextStep';

const START_PROMPT = '숫자 야구 게임을 시작합니다.';
const EXIT_PROMPT = '게임 종료';

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

  async play() {
    Console.print(START_PROMPT);
    await this.startGame();
    Console.print(EXIT_PROMPT);
  }
}

export default App;
