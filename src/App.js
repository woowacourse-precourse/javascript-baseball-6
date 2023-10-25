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
    (STRIKE && BALL) && Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    (!STRIKE && BALL) && Console.print(`${BALL}볼`);
    (STRIKE && !BALL) && Console.print(`${STRIKE}스트라이크`);
    (!STRIKE && !BALL) && Console.print(`낫싱`);
  }
  compareNumber(userNumbers)
  {
     let { STRIKE,BALL} = this.compareResult(userNumbers);
     this.comparePrint(STRIKE,BALL);
  }

  async play() {

      Console.print("숫자 야구 게임을 시작합니다.");
      const userNumbers = await this.userNumberInput();
      this.compareNumber(userNumbers);
  }
}

const app = new App();
app.initializeComputerNumer();
app.play();
export default App;
