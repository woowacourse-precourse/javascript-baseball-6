import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * -구현할 기능
 * 1. 플레이어가 1부터 9사이 무작위 숫자 3개 입력
 * 2. 
 */
class App {
  async play() {

  }
}

const computer = [];
while(computer.length < 3){
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if(!computer.includes(number)){
    computer.push(number);
  }
}

export default App;
