import { Console , Random } from "@woowacourse/mission-utils";

class App {

  async play() {
    // 시작
    Console.print("숫자 야구 게임을 시작합니다.");
    // 정답 숫자 받기(랜덤)
    const computernum = this.SetRandomNum();
    while(true) {
      // 사용자 숫자 입력
      const usernum = this.InputNum();
      // 답과 입력값 비교
      let strike = this.CheckNum(computernum, usernum);
      // 정답시 종료
      if(strike == 3){
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임종료");
        break;
      }
    }
    //재실행 여부
    this.restartgame();

  }
  SetRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async InputNum(){
    const user = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const usernum = user.split("").map(value => parseInt(value));
    //오류
    //1. 숫자 크기가 다를경우
    if(usernum.length != 3){
      throw new Error('숫자 크기가 다릅니다.');
    }
    //2. 숫자 중복이 있을 경우
    const repeat = [...new Set(usernum)];
    if(repeat > 3){
      throw new Error('중복된 숫자가 있습니다.');
    }
    return usernum;
  }
  

  async CheckNum(computer, user) {
    let ball = 0;
    let strike = 0;

    for (let i =0;i<3;i++) {
      if(computer[i] == user[i]){
        strike++;
      }
      else if(computer.includes(user[i])){
        ball++;
      }
    }
    Printresult(strike, ball);
    return strike;
  }

  Printresult(strike,ball){
    if(strike == 0 && ball == 0){
      Console.print("낫싱");
    }
    else if(ball !=0 && strike == 0){
      Console.print("${ball}볼");
    }
    else if (ball == 0 && strike != 0) {
      Console.print("${strike}스트라이크");
    }
    else {
      Console.print("${ball}볼 ${strike}스트라이크");
    }
  }

  restartgame() {
    const restart = Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if(restart == 1){
      this.play();
    }
    else if(restart != 1 && restart != 2){
      throw new Error("1과 2만 입력해주세요.");
    }
  }
}
const app = new App();
app.play();
export default App;
