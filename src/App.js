import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  startMsg() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerRandomValue() {
    const randomValueArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    const computerRandomValue = randomValueArr.join("");
    console.log(computerRandomValue);
    return computerRandomValue;
  }

  getUserValue() {
    const computerValue = this.computerRandomValue();
    Console.readLine('숫자를 입력해주세요 : ', (userValue) => {
      console.log(userValue);
      this.whetherGameContinuesNot(userValue, computerValue);
    });
  }

  checkValues(userValue, computerValue) {
    let ball = 0;
    let strike = 0;
    
    // for (let i = 0; i < 3; i++) {
    //   if (userValue[i] === computerValue[i]) strike++;
    //   else if (computerValue.indexOf(userValue[i]) !== i) ball++;
    // }

    userValue.forEach(() => {
      if (userValue[i] === computerValue[i]) strike++;
      else if (computerValue.indexOf(userValue[i]) !== i) ball++;
    })

    if (ball > 0 && strike > 0) return `${ball}볼 ${strike}스트라이크`;
    else if (ball > 0 && strike == 0) return `${ball}볼`;
    else if (ball == 0 && strike > 0) return `${strike}스트라이크`;
    else return "낫싱";
  }

  handlingInputExceptions(userValue) {
    if (userValue.length !== 3) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    if (userValue.split("").some((value) => value < "0" || value > "9")) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    if (userValue.split("").some((value) => value.repeat(3) == userValue || userValue.includes(value.repeat(2)))) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    return; 
  }

  whetherGameContinuesNot(userValue, computerValue) {
    this.handlingInputExceptions(userValue);
    Console.print(this.checkValues(userValue, computerValue));
    if (userValue === computerValue) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (res) => {
        if (res === "1") this.getUserValue();
        else if (res === "2") return;
        else throw new Error("[ERROR] 잘못된 입력입니다.");
      })
      return;
    }
    Console.readLine('숫자를 입력해주세요 : ', (userValue) => {
      this.whetherGameContinuesNot(userValue, computerValue);
    })
    
  }

  async play() {
    this.startMsg();
    this.getUserValue();
  }
}

export default App;
