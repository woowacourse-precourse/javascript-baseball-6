import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  //게임시작
  start(){ 
    Console.print("숫자 야구 게임을 시작합니다."); 
  }
  
  //랜덤으로 숫자 생성하기
  randomNumber() {
    const computerArr = [];
    while (computerArr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    const computer =  computerArr.join('');
    return computer;
  }
  
  async play() {
    this.start();
  }
}

export default App;