import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { RESTART_NUMBER_REGEXP, USER_NUMBER_REGEXP } from "./constant";

class App {
  #COMPUTERNUMBERS=[];
  USERACTION=1;
  initializeComputerNumer()
  {
    if(this.#COMPUTERNUMBERS.length !==0) this.#COMPUTERNUMBERS=[];
    while (this.#COMPUTERNUMBERS.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#COMPUTERNUMBERS.includes(number)) {
        this.#COMPUTERNUMBERS.push(number);
      }
    }
  }
  validation(checkNumber)
  {
    if(!USER_NUMBER_REGEXP.test(checkNumber)) return false;
    return checkNumber;
  }
  async userNumberInput(){
      const userNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if(this.validation(userNumbers)) return userNumbers;
      else{
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다');
      }
  }
  compareResult(userNumbers)
  {
    let strike=0; let ball=0;
    this.#COMPUTERNUMBERS.forEach( (comNumber,comIndex)=>{
      for(let i=0; i<userNumbers.length;i++){
        if(comNumber === parseInt(userNumbers[i]))
        {
          if(comIndex === i) strike++;
          else ball++;
        }
      }
    })
    return {strike,ball};
  }
  comparePrint(strike,ball)
  {
    if(strike && ball) Console.print(`${ball}볼 ${strike}스트라이크`);
    if(!strike && ball) Console.print(`${ball}볼`);
    if(strike && !ball) Console.print(`${strike}스트라이크`);
    if(!strike && !ball) Console.print(`낫싱`);
  }
  endPrint()
  {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }
  compareNumber(userNumbers)
  {
     const {strike,ball} = this.compareResult(userNumbers);
     this.comparePrint(strike,ball);
     if(strike === 3)
     {
      this.endPrint();
      return "END";
     }
  }
  checkRestartNumber(menu) {
    if (RESTART_NUMBER_REGEXP.test(menu)) return true;
    throw new Error('[ERROR] 입력은 공백을 포함하지않은 1 또는 2 이어야합니다.');
  }
  async restartInput(){
    try{
      const menu = await Console.readLineAsync('');
      if(this.checkRestartNumber(menu)) return parseInt(menu);
    }catch(err)
    {
      throw new Error('[ERROR] woowacourse 라이브러리 에러' + error.message);
    }
  }
  async play() {
      this.initializeComputerNumer();
      await Console.print("숫자 야구 게임을 시작합니다.");
      while(this.USERACTION === 1)
      {
        const userNumbers = await this.userNumberInput();
        if(this.compareNumber(userNumbers)==="END")
        {
          const menu = await this.restartInput();
          if(menu === 1) this.initializeComputerNumer();
          else this.USERACTION=menu;
        }
      }
  }
}

const app = new App();
app.play();
export default App;
