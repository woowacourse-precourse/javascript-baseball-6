import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.IS_CORRECT = false; //strike 3이면 true
    this.IS_END = false; //IS_CORRECT가 true일 때 2의 값을 가지면 true
  }
  //사용자 숫자 입력
  async getUserNumber() {
    const user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    
    user.split("").forEach((num, index) => {
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자만 입력 가능합니다.");
      }
      if (user.includes(num) && user.indexOf(num) !== index) {
        throw new Error("[ERROR] 중복되지 않는 숫자를 입력해주세요.");
      }

      if (num < 1 || num > 9) {
        throw new Error("[ERROR] 1~9 사이의 숫자만 입력 가능합니다.");
      }

      if (user.length !== 3) {
        throw new Error("[ERROR] 3자리 숫자만 입력 가능합니다.");
      }
    });

    return user;
  }

  //컴퓨터 숫자 생성
  getRandomNumber() {
    const com = [] 
    while(com.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!com.includes(random)) {
        com.push(random); //중복되지 않는 숫자만 배열에 추가
      }
    }

    return com;
  }

  //숫자 검사
  compareNumber(com, user) {

  }

  //게임 재시작
  restartGame() {
  }

  //게임 진행
  async playGame(com, user) {
    let END_FLAG = true;
    while(END_FLAG) {
      const res = this.compareNumber(COM, USER);

    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let user = await this.getUserNumber();
    console.log(user);
  }
}

export default App;

const app = new App();
app.play();
