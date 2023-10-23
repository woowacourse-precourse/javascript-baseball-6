import { MissionUtils } from "@woowacourse/mission-utils";
const Validation = require('./Validation/index')

// 사용자 입력값 받아오기
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    function getUserNumberInput() {
      MissionUtils.Console.readLine('숫자를 입력하세요.', (input) =>
      progressGame(input)
    );
    
    function progressGame(userNumberInput) {
      Validation.gameInputValidation(userNumberInput);
    }

    }
  }
}



const app = new App();
app.play();

export default App;