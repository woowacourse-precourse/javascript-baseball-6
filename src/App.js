import OutputProcessor from "./interface/OutputProcessor.js";
import InputProcessor from "./interface/InputProcessor.js";
import Computer from "./domain/Computer.js";
import AnswerComparator from "./gameUtils/AnswerComparator.js";

const computer = new Computer();
let restartInput;
class App {
  async play() {
    //시작 문구를 출력한다.
    OutputProcessor.output("숫자 야구 게임을 시작합니다.");
    do {
      //정답을 생성한다.
      App.#generateAnswer();
      //사용자에게 정답을 입력받아 결과를 확안한다.
      let result = false;
      while (!result) {
        result = await App.#checkAnswer();
      }
      //정답 문구를 출력한다.
      OutputProcessor.output("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      //재시작 여부를 입력받는다.
      restartInput = await App.#checkRestart();
    } while (restartInput === "1");
  }

  static #generateAnswer() {
    computer.setAnswer();
  }

  static async #checkAnswer() {
    //사용자에게 정답을 입력받는다.
    const guess = await InputProcessor.answerInput();
    const answer = computer.getAnswer();
    //사용자가 입력한 정답에 대한 결과를 확인한다.
    const result = AnswerComparator.compareAnswer(guess, answer);
    OutputProcessor.resultOutput(result);
    //사용자가 입력한 것이 정답인지 확인하여 반환한다.
    let booleanResult = false;
    if (result.strike === 3) booleanResult = true;

    return booleanResult;
  }

  static async #checkRestart() {
    return await InputProcessor.restartInput();
  }
}

const app = new App();
app.play();

export default App;
