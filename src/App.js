import CreateComputerNumber from "./CreateComputerNumber";
import InputNumber from "./InputNumber";
import CompareNumber from "./CompareNumber";
import InputContinueState from "./InputContinueState";
import AnswerMessage from "./Message/AnswerMessage";
import StartMessage from "./Message/StartMessage";

/**
 * App 메인 클래스
 * @this {boolean} checkContinue 게임 계속 진행 여부
 * @this {boolean} checkCorrect 정답 여부
 */
class App {
  constructor() {
    this.checkContinue = true;
    this.checkCorrect = false;
  }

  /**
   * 프로그램 실행의 시작 함수
   */
  async play() {
    StartMessage();
    // checkContinue가 true이면 반복 false이면 종료
    while (this.checkContinue) {
      this.checkCorrect = false;
      const computerNumber = CreateComputerNumber();
      // checkCorrect가 treu이면 반복 false이면 종료
      while (!this.checkCorrect) {
        const userInputNumber = await InputNumber();
        const compareResult = CompareNumber(computerNumber, userInputNumber);
        AnswerMessage(compareResult);
        // 3스트라이크일 경우
        if (compareResult.strike === 3) {
          this.checkCorrect = true;
        }
      }
      this.checkContinue = await InputContinueState();
    }
  }
}

export default App;
