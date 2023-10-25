import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  async play() {

    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = await this.Setrandom();
    while(true){
      const user = await this.InputNum();
      let strike = await this.CheckNum(computer, user);
      if(strike == 3){
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임종료");
        break;
      }
    }
    this.resetgame();
  }
  async Setrandom() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  async InputNum(){
    const user = await Console.readLineAsync('숫자를 입력해 주세요 : ');
    const usernum = user.split('').map(Number);

    if(usernum.length !== 3){
      throw new Error("[ERROR]숫자의 크기가 맞지 않습니다.");
    }
    const repeat = [...new Set(usernum)];
    if(repeat.length !== 3){
      throw new Error("[ERROR]중복된 숫자가 존재합니다.");
    }
    return usernum;
  }

  async CheckNum(computer, user) {

    let strike = 0;
    let ball = 0; 
    
    for(let i = 0;i<3;i++){
      if(computer[i] == user[i]){
        strike++;
      }
      else if (String(computer).includes(user[i])) {
        ball++;
      }
    }
    this.Printresult(strike, ball);
    return strike;
  }

  Printresult(strike,ball){
    if(strike == 0 && ball == 0){
      Console.print("낫싱");
    }
    let resultprint = [];
    if(ball > 0){
      resultprint.push("${ball}볼");
    }
    if (strike > 0) {
      resultprint.push("${strike}스트라이크");
    }
    Console.print(resultprint.join(' '));
  }
  async resetgame(){
    const reset = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if(reset === '1'){
      this.play();
    }
    else if(reset === '2'){
      Console.print('종료');
    }
    else{
      throw new ERROR('[ERROR] 1 과 2의 숫자중에서 골라주세요');
    }
  }

}
const app = new App();
app.play();

export default App;