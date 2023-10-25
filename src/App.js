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
  validation(checknumer)
  {
    const REGEXP=/^\d{3}$/;
    if(!REGEXP.test(checknumer)) return false;
    return checknumer;
  }
  async userNumberInput(){
      const userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if(this.validation(userNumber)) return userNumber;
      else{
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
      }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.userNumberInput();
  }
}

const app = new App();
app.play()

export default App;
