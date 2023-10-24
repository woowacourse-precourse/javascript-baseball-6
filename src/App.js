import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  getRandomNumber(){
    this.computer = [];
    while (this.computer.length < 3){
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!this.computer.includes(number))
        this.computer.push(number);
    }
  }

  getUserInput(){
    return MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  async play() {}
}

export default App;
