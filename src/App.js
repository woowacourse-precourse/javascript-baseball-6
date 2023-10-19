import { MissionUtils } from '@woowacourse/mission-utils';

const COMPUTER_NUMBER = [];

class App {
  generateRandomNumber () {
    while(COMPUTER_NUMBER.length <3){
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if(!COMPUTER_NUMBER.includes(number)) {
        COMPUTER_NUMBER.push(number);
      }
    }
  }
  async play() {
    this.generateRandomNumber();
    console.log(COMPUTER_NUMBER);
    
  }
}
const app = new App();
app.play();



export default App;
