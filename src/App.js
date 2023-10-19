import generateRandomNumber from "./randomNumber.js";
class App {
  async play() {
    this.outputMessage("숫자 야구 게임을 시작합니다.");
  }

  outputMessage(message) {
    console.log(message);
    this.createComputerNumber();
  }

  createComputerNumber() {
    this.computerNumber = generateRandomNumber();
  }
}

const app = new App();
app.play();

export default App;
