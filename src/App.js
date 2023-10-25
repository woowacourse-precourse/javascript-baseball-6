import { MissionUtils } from '@woowacourse/mission-utils';
import { BASEBALL_MESSAGE } from './Constants';
class App {
 
  async play() {    
    // 게임 시작 안내
    MissionUtils.Console.print(BASEBALL_MESSAGE.start);

    // 서로 다른 랜덤한 3자리 숫자 생성(0을 제외한 1~9 숫자만 사용)
    const baseballNumber = [];
    while (baseballNumber.length < 3) { 
      const number = MissionUtils.Random.pickNumberInRange(1, 9); 
      if (!baseballNumber.includes(number)) { 
        baseballNumber.push(number);
      }
    }

    //무한루프 설정
    while(true) {

      const inputNumber = await MissionUtils.Console.readLineAsync(BASEBALL_MESSAGE.input); 
      //문자열을 각각의 숫자로 분할하여 배열생성
      const  userNumber = inputNumber.split('').map(Number);

        // 유효성 검사
      if (inputNumber === null) {
        MissionUtils.Console.print(BASEBALL_MESSAGE.input);
      } else if (/[^\d]/.test(inputNumber)) {
        MissionUtils.Console.print(BASEBALL_MESSAGE.errorStr);
      } 
        else if (new Set(userNumber).size !== 3) {
        MissionUtils.Console.print(BASEBALL_MESSAGE.errorDuplication);
      } 
       else if (userNumber.length !== 3) {
        MissionUtils.Console.print(BASEBALL_MESSAGE.errorNumber);
      } 
        else if (inputNumber.includes("0")) {
        MissionUtils.Console.print(BASEBALL_MESSAGE.errorZero);
      } 

      let s = 0, b = 0;
      
      for (let i = 0; i < baseballNumber.length; i++) {
        const index =  userNumber.indexOf(baseballNumber[i]); 

        if (index > -1) {
          if (index === i) {
            s++; 
          } else { 
            b++;
          }
        }
      }

      if (s === 0 && b === 0) {  
        MissionUtils.Console.print(BASEBALL_MESSAGE.nothing);
      } else if (s === 3) { 
        MissionUtils.Console.print(BASEBALL_MESSAGE.gameWinner);
        const repeat = await MissionUtils.Console.readLineAsync(BASEBALL_MESSAGE.gameRestart);
        if (repeat === '1') { 
          return this.play();
      } else if (repeat === '2') { 
        MissionUtils.Console.print(BASEBALL_MESSAGE.game);
          break;
        }
      } else if (s === 0) { 
        MissionUtils.Console.print(b + "볼");
      } else if (b === 0) { 
        MissionUtils.Console.print(s + "스트라이크");
      } else {
        MissionUtils.Console.print(b + "볼" + s + "스트라이크");
      }


    }
  }
    }
const app = new App();
app.play();

export default App;
