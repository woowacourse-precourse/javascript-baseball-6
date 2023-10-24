import Message from "./View/Message.js";
import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import BaseballGame from "./Function/BaseballGame.js";

class App {
  constructor() {
    this.computerNumber; // 사용자가 맞출 상대방(컴퓨터)의 수를 배열의 형태로 저장
  }

  // 게임 시작
  async play() {
    // 게임 준비 단계
    OutputView.printMessage(Message.START); // 게임 시작 메시지 출력
    this.computerNumber = BaseballGame.createRandomNumber(); // 사용자가 맞출 상대방(컴퓨터)의 수를 생성

    // 게임 단계
    let userNumber = InputView.readLineAsync(Message.INPUT_BASEBALL_NUMBER); // 사용자에게 숫자 입력 요청
    BaseballGame.checkRightNumber(userNumber);
  };
};

export default App;
