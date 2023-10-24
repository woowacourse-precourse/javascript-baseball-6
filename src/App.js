import Message from "./View/Message.js";
import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import BaseballGame from "./Function/BaseballGame.js";

class App {
  constructor() {
    this.computerNumber; // 사용자가 맞출 상대방(컴퓨터)의 수를 배열의 형태로 저장
    this.is3Strike = false; // 사용자가 상대방(컴퓨터)의 수를 맞추었는가?
  }

  // 게임 시작
  async play() {
    // 게임 준비 단계
    OutputView.printMessage(Message.START); // 게임 시작 메시지 출력
    this.computerNumber = BaseballGame.createRandomNumber(); // 사용자가 맞출 상대방(컴퓨터)의 수를 생성

    // 게임 단계
    while (!this.is3Strike) {
      let userNumber = await InputView.readLineAsync(Message.INPUT_BASEBALL_NUMBER); // 사용자에게 숫자 입력 요청
      BaseballGame.checkRightNumber(userNumber); // 사용자가 알맞은 값을 입력했는지 확인
      let gameResult = BaseballGame.compareNumber(userNumber, this.computerNumber); // 사용자의 수와 컴퓨터의 수를 비교
      OutputView.printMessage(gameResult); // 게임 결과 출력
      if (gameResult === '3스트라이크') {
        // 3스트라이크 게임 종료
        this.is3Strike = true;
        OutputView.printMessage(Message.THREE_STRIKE);
      }
    }

    // 게임 종료 단계
    let retry = await InputView.readLineAsync(Message.RETRY);
    if (retry === '1') {
      this.computerNumber = null;
      this.is3Strike = false;
      this.play();
    } else if (retry !== '2') {
      throw new Error(Message.ERROR_ONEORTWO);
    }
  }
};

export default App;
