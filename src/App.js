import {Console, Random} from "@woowacourse/mission-utils";

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

  async userInputNumber() {
    const answer = await Console.readLineAsync('숫자를 입력해주세요 : ');

    const checkLength = answer.length === 3;
    const checkIsDuplicate = new Set(answer).size === 3;
    const checkIsNumber = new RegExp(/^[1-9]$/);

    // Console.print("answer 유효성 검사");
    // Console.print(checkIsNumber.test(answer));
    // Console.print(checkLength);
    // Console.print(checkIsDuplicate);
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
  }

  async play() {    
    
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumber = await this.createRandomNumber();
    const userNumber = await this.userInputNumber();
    await roundResult(computerNumber, userNumber);
    
  }
}

const app = new App();
app.play();

export default App;
