import Message from "./View/Message";
import InputView from "./View/InputView";
import OutputView from "./View/OutputView";
import BaseballGame from "./Function/BaseballGame";

class App {
  constructor() {
    this.computerNumber; // 사용자가 맞출 상대방(컴퓨터)의 수를 배열의 형태로 저장합니다.
  }

  // 게임 시작
  async play() {
    // 게임 시작 메시지 출력
    OutputView.printMessage(Message.START);
    this.computerNumber = BaseballGame.createRandomNumber();
  };
};

export default App;