
import { MissionUtils } from "@woowacourse/mission-utils";



MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

class App {

  constructor(){
    this.computer = []
  }
  
  async play() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
 
    while (true) {
      MissionUtils.Console.print(this.computer);
        const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        const num = parseInt(input);
        if (isNaN(num)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        //  return  Promise.reject(new Error('올바른 숫자를 입력하세요.')) 
        }
        if (input.length !== 3) {
          throw new Error('[ERROR] 3자리 숫자를 입력하세요.');
          // return  Promise.reject(new Error('3자리 숫자를 입력하세요.')) 
        }
        if (new Set([...input]).size !== 3) {
          throw new Error('[ERROR] 서로 다른 숫자를 입력하세요.');
          // return Promise.reject(new Error('서로 다른 숫자를 입력하세요.')) 
        }
  
        const countS = this.strikeCount(input);
        const countB = this.ballCount(input) - countS;
     
        if (countS !== 0 || countB !== 0) {
          MissionUtils.Console.print(`${countB ? countB + '볼' : ''} ${countS ? countS + '스트라이크' : ''}`);
        } else {
          MissionUtils.Console.print('낫싱');
        }
  
        if (countS === 3) {
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          const regame = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ');
          if(regame === '1' ) { 
            this.computer = [];
               
           while (this.computer.length < 3) {
           const number = MissionUtils.Random.pickNumberInRange(1, 9);
           if (!this.computer.includes(number)) {
            this.computer.push(number);
            }
          }
              continue;
          }
           else if (regame === '2'){break;} 
           else {MissionUtils.Console.print('1 or 2를 입력하세요');} 
        }
      
    }
  }
 
  strikeCount = (a) => [...a].map((v) => +v).filter((v, i) => v === this.computer[i]).length;
  ballCount = (a) => 6 - new Set([...[...a].map((v) => +v), ...this.computer]).size;
}

const app = new App();
try{
  app.play()
} catch (error) {
  // Handle errors
  console.log(`${error.message}`);
}



export default App;

