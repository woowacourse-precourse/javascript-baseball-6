import { Console, MissionUtils } from "@woowacourse/mission-utils";

//상수명 SNAKE_CASE로 작성 !!!

class App {
    async play() {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");


      //랜덤 숫자 뽑기 (서로 다른 수로 이루어진 3자리 숫자)
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      MissionUtils.Console.print(computer) //테스트

  
    }
  }

  export default App;

const app = new App();
app.play();
