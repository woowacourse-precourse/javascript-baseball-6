import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  #COMPUTERNUMBERS=[];
  initializeComputerNumer()
  {
    while (this.#COMPUTERNUMBERS.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#COMPUTERNUMBERS.includes(number)) {
        this.#COMPUTERNUMBERS.push(number);
      }
    }
  }
  validation(checkNumber)
  {
    const REGEXP=/^\d{3}$/;
    if(!REGEXP.test(checkNumber)) return false;
    return checkNumber;
  }
  async userNumberInput(){
      const userNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if(this.validation(userNumbers)) return userNumbers;
      else{
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
      }
  }
  compareResult(userNumbers)
  {
    let STRIKE=0; let BALL=0;
    this.#COMPUTERNUMBERS.forEach( (comNumber,comIndex)=>{
      for(let i=0; i<userNumbers.length;i++){
        if(comNumber === parseInt(userNumbers[i]))
        {
          if(comIndex === i) STRIKE++;
          else BALL++;
        }
      }
    })
    return {STRIKE,BALL};
  }
  comparePrint(STRIKE,BALL)
  {
    if(STRIKE && BALL) Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    if(!STRIKE && BALL) Console.print(`${BALL}볼`);
    if(STRIKE && !BALL) Console.print(`${STRIKE}스트라이크`);
    if(!STRIKE && !BALL) Console.print(`낫싱`);
  }
  endPrint()
  {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
  }
  compareNumber(userNumbers)
  {
     let { STRIKE,BALL} = this.compareResult(userNumbers);
     this.comparePrint(STRIKE,BALL);
     if(STRIKE === 3){
      this.endPrint();
      return "END";
     }
  }
  getCompuerNum()
  {
    console.log(this.#COMPUTERNUMBERS)
  }
  async play() {
      Console.print("숫자 야구 게임을 시작합니다.");
      while(1)
      {
        const userNumbers = await this.userNumberInput();
        if(this.compareNumber(userNumbers)==="END")break;
      }
  }
}

const app = new App();
app.initializeComputerNumer();
app.getCompuerNum();
app.play();
export default App;
