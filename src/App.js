import { MissionUtils } from '@woowacourse/mission-utils';
import readline from 'readline'
const COMPUTER_NUMBER = [];


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
    console.log('숫자 야구 게임을 시작합니다.');
    this.generateRandomNumber();
    
    rl.question('숫자를 입력해주세요 : ',(guessNumber)=>{
      console.log(guessNumber)
    })
    
    
  }
}
const app = new App();
app.play();



export default App;
