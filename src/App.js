import Computer from "./computer.js";
import User from "./user.js";

const REPLAY_INPUT_ERROR_MESSAGE = "[ERROR] 1 또는 2 이외의 값을 입력했습니다.";

class App {
  constructor() {
    this.computer = new Computer();
    this.isPlaying = true;
  }

  async play() {
    Computer.printIntro();

    while(this.isPlaying) {
      this.computer.setRound();

      while(!this.computer.checkSuccess()) {
        const expectedNumbers = await User.inputExpectedNumbers();

        this.computer.setResult(expectedNumbers);

        this.computer.getResult();
        this.computer.printResultMessage();
        this.computer.printSuccessMessage();
      }
    
      const replay = await User.inputReplay();
      if (!Computer.validateReplayValue(replay)) {
        throw new Error(REPLAY_INPUT_ERROR_MESSAGE);
      }

      this.isPlaying = replay === "1";
    }
  }
}

export default App;
