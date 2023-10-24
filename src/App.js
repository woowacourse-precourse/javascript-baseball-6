const { gameStart } = require("./modules/gameStart");
const { gameLoop } = require("./modules/gameLoop");


class App {
  // startMsg() { //시작 메세지 출력
  //   MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  // }

  // computerRandomValue() { //서로 다른 세 자리 난수 생성 및 저장
  //   const randomValueArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  //   const computerRandomValue = randomValueArr.join("");
  //   return computerRandomValue;
  // }

  // handlingInputExceptions(userValue) { //사용자 값 조건에 맞는지 확인
  //   if (userValue.length !== 3) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  //   if (userValue.split("").some((value) => value < "0" || value > "9")) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  //   if (userValue.split("").some((value) => value.repeat(3) == userValue || userValue.includes(value.repeat(2)))) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  //   return; 
  // }

  // checkValues(userValue, computerValue) { //사용자 값과 컴퓨터값 비교
  //   let ball = 0;
  //   let strike = 0;
    
  //   for (let i = 0; i < 3; i++) {
  //     if (userValue[i] === computerValue[i]) strike++;
  //     else if (computerValue.indexOf(userValue[i]) !== i) ball++;
  //   }

  //   if (ball > 0 && strike > 0) return `${ball}볼 ${strike}스트라이크`;
  //   else if (ball > 0 && strike == 0) return `${ball}볼`;
  //   else if (ball == 0 && strike > 0) return `${strike}스트라이크`;
  //   else return "낫싱";
  // }

  // whetherResultRightNot(userValue, computerValue) {
  //   this.handlingInputExceptions(userValue);
  //   MissionUtils.Console.print(this.checkValues(userValue, computerValue));
  //   if (userValue === computerValue) {
  //     this.endMsg();
  //     return;
  //   }
  //   MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userValue) => {
  //     this.whetherResultRightNot(userValue, computerValue);
  //   })
  // }
  
  // endMsg() {
  //   MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  //   MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (res) => {
  //     if (res === "1") return this.getUserValue();
  //     else if (res === "2") return;
  //     else throw new Error("[ERROR] 잘못된 입력입니다.");
  //   })
  // }

  // getUserValue() {
  //   const computerValue = this.computerRandomValue();
  //   MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userValue) => {
  //     this.whetherResultRightNot(userValue, computerValue);
  //   });
  // }

  async play() {
    gameStart();
    gameLoop();
  }
  
}

export default App;
