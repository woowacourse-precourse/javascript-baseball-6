import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const Consol = MissionUtils.Consol;
    const Random = MissionUtils.Random;
    const Computer = [];

    function startText(){
      Consol.print('숫자 야구 게임을 시작합니다.');
    }

    function ComputerNumberSet() {
      Computer = [];
      for(let i = 0; i<3; i++) {
        const Number = Random.pickNumberInRange(1, 9);
        Computer.push(Number);
      }
    }



  }
}

export default App;
