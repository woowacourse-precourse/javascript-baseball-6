import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 바로 실행되는 play 메소드
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
      
      // 문자열로 반환되는 input
      const input = MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
      this.inputValidation(input)
    }
    catch (error) {
      throw error;
    }
  }

  inputValidation(input) {
    if (input.length !== 3) {
      throw new Error("입력값은 3자리 숫자여야 합니다.")
    } else {
      // int로 변환하고 반복문으로 모든 자리수 확인
      const inputArray = Array.from(input).map((data) => parseInt(data));
      for (let i = 0; i < inputArray.length; i++) {
        if (isNaN(inputArray[i]) || inputArray[i] < 1 || inputArray[i] > 9) {
          throw new Error("입력값은 1부터 9 사이의 숫자로 이루어져야 합니다.");
        }
        if (inputArray.indexOf(inputArray[i]) !== i) {
          throw new Error("입력값은 서로 다른 숫자로 이루어져야 합니다.");
        }
      }
    }
  }

}
const app = new App();
app.play();

export default App;
