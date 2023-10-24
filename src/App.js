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

  checkInputValidation(userInputNumber){
    const userInputNumberArr = [...new Set(userInputNumber.split(''))].map(Number);
    
    if(userInputNumber.length !== 3) throw new Error('[ERROR] 3자리 숫자가 아닙니다.')
    if(userInputNumberArr.length !== 3) throw new Error('[ERROR] 중복된 숫자가 있습니다.')
    if(userInputNumber.includes(0)) throw new Error('[ERROR] 1~9 사이의 숫자가 아닙니다.')
    if(isNaN(userInputNumber)) throw new Error('[ERROR] 숫자가 아닙니다.')
  }

  async play() {}
}

export default App;
