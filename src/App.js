import BaseBall from './BaseBall.js';
import OutputView from './view/OutputView.js';
import InputReader from './view/InputReader.js';
import { validation } from './utils/Validation.js';
import { paramType } from './utils/paramType.js';
import { createRandomNumbers } from './utils/createRandomNumbers.js';
import { GAME_COMMAND } from './utils/gameCommand.js';

class App {
  constructor() {
    this.inputReader = new InputReader();
    this.outputView = new OutputView();
    this.baseBall = null;
  }

  async play() {
    this.outputView.printGameStartMessage();
    await this.setting();
  }

  async setting() {
    const randomNumbers = createRandomNumbers(3);
    this.baseBall = new BaseBall(randomNumbers);

    await this.pitching();
  }

  async pitching() {
    const response = await this.inputReader.baseBallNumbers();
    const userInput = Number(response);

    validation.baseBallNumbersInputOfUser(userInput);

    await this.check(userInput);
  }

  async check(userInput, _ = paramType(userInput, Number)) {
    const countResult = this.baseBall.countResult(userInput);
    const { strike } = countResult;
    if (strike === GAME_COMMAND.IS_OUT_COUNT) {
      this.outputView.printThreeStrikes();
      await this.complete();
      return;
    }
    this.outputView.printBaseBallCountResult(countResult);

    await this.pitching();
  }

  async complete() {
    this.outputView.printGameEndMessage();
    await this.requestRestart();
  }

  async requestRestart() {
    const response = await this.inputReader.restartNumber();
    const userInput = Number(response);

    validation.restartNumberInputOfUser(userInput);

    await this.excuteCommand(userInput);
  }

  async excuteCommand(userInput, _ = paramType(userInput, Number)) {
    const excuteTable = {
      [GAME_COMMAND.RESTART]: await this.restart.bind(this),
      [GAME_COMMAND.EXIT]: this.end.bind(this),
    };

    excuteTable[userInput]();
  }

  async restart() {
    await this.setting();
  }

  end() {
    return;
  }
}

const app = new App();
app.play();

export default App;
