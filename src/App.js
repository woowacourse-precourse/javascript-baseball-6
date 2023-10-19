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
  //유저의 숫자와 컴퓨터의 숫자 비교
  compareNumbers(guessNumber){
    let strikeNumbers=0,ballNumbers = 0;
    console.log(COMPUTER_NUMBER);
    for (let i=0; i<3; i++){
      if(parseInt(guessNumber[i])===COMPUTER_NUMBER[i]) {
        strikeNumbers += 1;
      } else if (COMPUTER_NUMBER.includes(parseInt(guessNumber[i]))){
        ballNumbers += 1;
      }
    }
    console.log(strikeNumbers,ballNumbers);

  }
  askNumber() {
    rl.question('숫자를 입력해주세요 : ',(guessNumber)=>{
      if(guessNumber.length!==3 || !guessNumber || isNaN(guessNumber)){
        console.log('3개의 숫자만 입력가능합니다.');
        this.askNumber();
      }
      else {
        this.compareNumbers(guessNumber);
        this.askNumber();
      }
    })
  }
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    this.generateRandomNumber();
    let STRIKE_NUMBERS = 0;
    let BALLNUMBERS = 0;
    this.askNumber();
  }
}
const app = new App();
app.play();



export default App;
