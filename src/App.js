import Computer from "./computer.js";
import User from "./user.js";

class App {
  constructor() {
    this.computer = new Computer();
  }

  async play() {
    Computer.printIntro();

    while(this.computer.getReplay()) {
      this.computer.setRound();

      while(!this.computer.checkSuccess()) {
        const expectedNumbers = await User.inputExpectedNumbers();

        this.computer.setResult(expectedNumbers);

        this.computer.getResult();
        this.computer.printResultMessage();
        this.computer.printSuccessMessage();
      }
    
      const replay = await User.inputReplay();
      this.computer.setReplay(replay);
    }
  }
}

export default App;
