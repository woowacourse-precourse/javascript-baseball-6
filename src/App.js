import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  computerNumber(){
    const computer = [];
    while(computer.length < 3 ){
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if(!computer.includes(number)){
        computer.push(number);
      }
    }
  }
  

  async play() {
    
  }
}

export default App;
