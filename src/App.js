import { MissionUtils } from "@woowacourse/mission-utils";
import CreateComputerNumber from "./CreateComputerNumber";
import InputNumber from "./InputNumber";
import CompareNumber from "./CompareNumber";
import InputContinueState from "./InputContinueState";

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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    // checkContinue가 true이면 반복 false이면 종료
    while (this.checkContinue) {
      this.checkCorrect = false;
      const computerNumber = CreateComputerNumber();
      // checkCorrect가 treu이면 반복 false이면 종료
      while (!this.checkCorrect) {
        const userInputNumber = await InputNumber();
        const compareResult = CompareNumber(computerNumber, userInputNumber);
        // 0볼 0스트라이크인 경우
        if (compareResult.strike === 0 && compareResult.ball === 0) {
          MissionUtils.Console.print("낫싱");
        }
        // 0스트라이크 ?볼인경우
        else if (compareResult.strike === 0) {
          MissionUtils.Console.print(`${compareResult.ball}볼`);
        }
        // ?스트라이크 0볼인경우
        else if (compareResult.ball === 0) {
          MissionUtils.Console.print(`${compareResult.strike}스트라이크`);
          // 3스트라이크인 경우
          if (compareResult.strike === 3) {
            MissionUtils.Console.print(
              "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
            );
            this.checkCorrect = true;
          }
        }
        // ?스트라이크 ?볼인경우
        else {
          MissionUtils.Console.print(
            `${compareResult.ball}볼 ${compareResult.strike}스트라이크`
          );
        }
      }
      this.checkContinue = await InputContinueState();
    }
  }
}

export default App;
