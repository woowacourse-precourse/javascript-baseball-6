import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  gameEnd = false;
  answer = "";
  constructor() {
    this.answer = MissionUtils.Random.pickNumberInRange(100, 999).toString();
  }
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (!this.gameEnd) {
      const input = await this.getInput();
      const isAnswer = this.estimateScore(input);
      if (isAnswer) gameRestart();
    }
  }

  async getInput() {
    const userInput = await this.getNumber();
    this.numberCheck(userInput);
    return userInput;
  }

  async getNumber() {
    return await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  numberCheck(userInput) {
    const NUMBER_CHECK = /[0-9]$/g;
    if (NUMBER_CHECK.test(userInput) && userInput > 99 && userInput < 1000)
      return true;
    throw "error";
  }
  
  estimateScore(userInput) {
    let INPUT = userInput.toString();
    MissionUtils.Console.print(userInput);
  }
  // printScore(RESULT){
  //   if(INPUT===ANSWER) Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")

  // }
  // gameStart(){

  // }
}

export default App;
const app = new App();
app.play();
// RANDOM
// 랜덤 숫자 생성

// getNum()
// 입력 받기
// 입력 받은 것 예외 판단(3자리 아닌 것 또는 숫자 아닌 것 입력)

// estimateScore()
// 스트라이크 판단
// 볼 낫싱 판단
// 스트라이크 볼 출력

// GameEnd = false 함수로 해야됨
// 게임 종료 시 재시작 및 종료
