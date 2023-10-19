import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const Consol = MissionUtils.Consol;
    const Random = MissionUtils.Random;

    function startText(){
      Consol.print('숫자 야구 게임을 시작합니다.');
    }
  }
}

export default App;
