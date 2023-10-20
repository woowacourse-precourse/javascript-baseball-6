const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
}
class App {
  constructor(){
    this.randomNumber = [];
  }

  async play() {
    this.printStartNotification();
    this.generateRandomNumber();
  }

  printStartNotification(){
    Console.print(MESSAGE.START);
  }
  
  generateRandomNumber(){
    const { randomNumber } = this;
    while(randomNumber.length < 3){
      const number = Random.pickNumberInRange(1, 9);
      if(!randomNumber.includes(number)) randomNumber.push(number);
    }
    // Console.prit(randomNumber); [1,3,5]
  }
}

const app = new App();
app.play();

export default App;
