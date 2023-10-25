import Computer from "./computer.js";
import User from "./user.js";

const INVALID_CHARATER_ERROR_MESSAGE = "[ERROR] 1부터 9 사이의 숫자 이외의 값을 입력했습니다.";
const INVALID_INPUT_LENGTH_ERROR_MESSAGE = "[ERROR] 입력값의 길이가 잘못됐습니다.";
const DUPLICATED_NUMBER_ERROR_MESSAGE = "[ERROR] 중복된 숫자를 입력했습니다.";
const REPLAY_INPUT_ERROR_MESSAGE = "[ERROR] 1 또는 2 이외의 값을 입력했습니다.";

class App {
  constructor() {
    this.computer = new Computer();
    this.success = false;
    this.isPlaying = true;
  }

  async play() {
    Computer.printIntro();

    while(this.isPlaying) {
      this.computer.selectNumbers();

      while(!this.success) {
        const expectedNumbers = await User.inputExpectedNumbers();

        if (!Computer.validateAnswerLength(expectedNumbers)) {
          throw new Error(INVALID_INPUT_LENGTH_ERROR_MESSAGE);
        } else if (!Computer.validateAnswerCharacter(expectedNumbers)) {
          throw new Error(INVALID_CHARATER_ERROR_MESSAGE);
        } else if (!Computer.validateAnswerUnique(expectedNumbers)) {
          throw new Error(DUPLICATED_NUMBER_ERROR_MESSAGE);
        }

        const { strike, ball } = this.computer.calculateResult(expectedNumbers);
        Computer.printResultMessage({ strike, ball });
  
        if (Computer.checkSuccess(strike)) {
          this.success = true;
          Computer.printSuccessMessage();
        }
      }
    
      const replay = await User.inputReplay();
      if (!Computer.validateReplayValue(replay)) {
        throw new Error(REPLAY_INPUT_ERROR_MESSAGE);
      }

      this.isPlaying = replay === "1";
      this.success = false;
    }
  }
}

export default App;
