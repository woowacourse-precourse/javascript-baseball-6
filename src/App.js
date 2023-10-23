import OutputProcessor from "./interface/OutputProcessor.js";
import InputProcessor from "./interface/InputProcessor.js";
import Computer from "./domain/Computer.js";
const computer = new Computer();
class App {
  async play() {
    //시작 문구를 출력한다.
    OutputProcessor.output("숫자 야구 게임을 시작합니다.");
    //정답을 생성한다.
    App.#generateAnswer();
    //사용자에게 정답을 입력받는다.
    const answerInput = await InputProcessor.answerInput();
  }

  static #generateAnswer() {
    computer.setAnswer();
  }
}

const app = new App();
app.play();

export default App;
