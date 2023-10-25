import BaseBall from './BaseBall.js';
import OutputView from './view/OutputView.js';
import InputReader from './view/InputReader.js';
import { validation } from './utils/validation.js';
import { paramType } from './utils/paramType.js';
import { createRandomNumbers } from './utils/createRandomNumbers.js';
import { GAME_COMMAND } from './constants/gameCommand.js';

class App {
  inputReader;
  outputView;
  baseBall;

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

    validation.baseBallNumbersInputOfUser(response);

    const userInput = Number(response);

    await this.check(userInput);
  }

  async check(userInput, _ = paramType(userInput, Number)) {
    const countResult = this.baseBall.countResult(userInput);
    const { strike } = countResult;

    this.outputView.printBaseBallCountResult(countResult);

    if (strike === GAME_COMMAND.IS_OUT_COUNT) {
      await this.complete();
      return;
    }

    await this.pitching();
  }

  async complete() {
    this.outputView.printGameEndMessage();
    await this.requestRestart();
  }

  async requestRestart() {
    const response = await this.inputReader.restartNumber();

    validation.restartNumberInputOfUser(response);

    const userInput = Number(response);

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
