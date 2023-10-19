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
  compareNumbers(guessNumber){
    console.log(guessNumber);
  }
  askNumber() {
    rl.question('숫자를 입력해주세요 : ',(guessNumber)=>{
      if(guessNumber.length!==3 || !guessNumber || isNaN(guessNumber)){
        console.log('3개의 숫자만 입력가능합니다.');
        this.askNumber();
      }
      else {
        this.compareNumbers(guessNumber);
      }
    })
  }
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    this.generateRandomNumber();
    this.askNumber();
    
    
    
    
  }
}
const app = new App();
app.play();



export default App;
