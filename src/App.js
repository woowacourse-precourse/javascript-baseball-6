import {Console, Random} from "@woowacourse/mission-utils";
import roundResult from "./logic/roundResult.js";

class App {

  async createRandomNumber() {
    const answer = [];
    while (answer.length <3){
      const number = Random.pickNumberInRange(1,9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
  userInputNumberValidate(answer){
    const checkLength = answer.length === 3;
    const checkIsDuplicate = new Set(answer).size === 3;
    const checkIsNumber = new RegExp(/^[1-9]{3}$/);

    if(checkLength == true && checkIsDuplicate == true && checkIsNumber.test(answer)==true){
      return answer;
    }
    else if (checkLength==false){
      throw Error('[ERROR] 3자리 숫자를 입력해주세요.');
    }
    else if(checkIsDuplicate==false){
      throw Error('[ERROR] 중복되지 않은 숫자를 입력해주세요.');
    } else if(checkIsNumber.test(answer)==false){
      throw Error('[ERROR] 1에서 9사이의 숫자를 입력해주세요.');
    }
    else{
      throw Error('[ERROR] 숫자를 입력해주세요.')
    }
  }
  async userInputNumber() {
    const answer = await Console.readLineAsync('숫자를 입력해주세요 : ');
    
    const validateAnswer = this.userInputNumberValidate(answer);
    if(!validateAnswer){
      return;
    }
    return validateAnswer;   
  }

  async playBaseballGame(){
    const computerNumber = await this.createRandomNumber();

    while(true){  
      const userNumber = await this.userInputNumber();
      const {gameSuccess, hintMessage} = await roundResult(computerNumber, userNumber);

      Console.print(hintMessage);

      if(gameSuccess){
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        
        const restart = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if(restart === '2'){
          return;
        }else if(restart ==='1'){
          await this.playBaseballGame();
        }
        else{
           throw Error('[ERROR] 게임을 새로 시작하려면 1, 종료하려면 2를 입력해야합니다.');
         }
      }
    }
  }
  async play() {    
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.playBaseballGame();

  }
}

const app = new App();
app.play();

export default App;
