import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      let replay = 1;
      while (replay==1){
        let strike=0;
        while (strike<3){
          //strike 초기화
          //strike=0;
          const playerNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");
          //숫자 검사 -> strike라면
          strike++
        }
        replay = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
      }
      
  }
}

export default App;
