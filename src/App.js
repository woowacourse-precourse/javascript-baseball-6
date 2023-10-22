import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  getRandomNumber(){
    this.computer = [];
    while (this.computer.length < 3){
      const number = Random.pickNumberInRange(1, 9);
      if(!this.computer.includes(number))
        this.computer.push(number);
    }
  }

  async play() {}
}

export default App;
