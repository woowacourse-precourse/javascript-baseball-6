import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      //시작 문구 출력
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      
      let replay = 1;
      while (replay==1){
        //컴퓨터의 임의의 수 선택
        const computer = Array(3).fill().map((i) => MissionUtils.Random.pickNumberInRange(1, 9));
        
        let strike=0;
        while (strike<3){
          //strike, ball 초기화
          strike=0;
          let ball = 0;
          const playerNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");

          //에러: 입력 값이 3자리보다 많거나 입력하지 않은 경우
          if (playerNumber.length < 1 || playerNumber.length > 3) {
            throw new Error("[ERROR]");
          }
          
          for (let i = 0; i < playerNumber.length; i++) {
            const num = Number(playerNumber[i]);
            //에러: 입력 값이 1부터 9까지의 숫자가 아닌 경우
            if (!Array(9).fill().map((_, i) => i + 1).includes(num)) {
              throw new Error("[ERROR]");
            }

            //숫자 비교
            if (computer.includes(num)) {
              if (computer[i] == num) { strike++; } else { ball++; }
            }
          }

          //비교 결과 출력
          if (ball + strike > 0) {
            MissionUtils.Console.print(
              `${ball > 0 ? ball + "볼 " : ""}${
                strike > 0 ? strike + "스트라이크" : ""
              }`
            );
          } else {
            MissionUtils.Console.print("낫싱");
          }
        }

        //게임 종료 문구
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        //재시작 또는 종료
        replay = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
      }
    } catch (e) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
