import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }

  CalcStrike(ComputerRandomNum, UserNum){
    let Strike=0
    for(let i = 0; i<3; i++){
      if (ComputerRandomNum[i]==UserNum[i]){
        Strike+=1;
      }
    }
    return Strike;
  }

  CalcBall(ComputerRandomNum, UserNum){
    let Ball=0
    for(let i = 0; i<3; i++){
      for (let j = 0; j < 3; j++) {
        if ((i != j) && (ComputerRandomNum[i] == UserNum[j])) {
          Ball += 1;
        }
      }
    }
    return Ball;
  }

  Check(UserNum){
    const inputToSet = new Set(UserNum.split('').map(Number));
    if (UserNum.length!=3){
      throw new Error();
    }
    if ([...inputToSet].length !== 3) {
      throw new Error();
    }
    if (UserNum.includes(' ')){
      throw new Error();
    }
    if (Number.isNaN(UserNum)){
      throw new Error();
    }
    else{
      return true;
    }
  }

  PrintCount(StrikeConut,BallCount){
    if ((StrikeConut==0)&&(BallCount==0)){
      Console.print('낫싱')
      return false;
    }
    if ((StrikeConut!=0)&&(BallCount==0)){
      Console.print(StrikeConut+'스트라이크')
      if(StrikeConut==3){
        Console.print("3개의 숫자를 모두 맞히셨습니다!");
        return true;
      }
      return false;
    }
    if ((StrikeConut==0)&&(BallCount!=0)){
      Console.print(BallCount+'볼')
      return false
    }
    if ((StrikeConut!=0)&&(BallCount!=0)){
      Console.print(BallCount+"볼 "+StrikeConut+'스트라이크')
      return false
    }
  }
  async Restart(){
    try {
      const KeeporStop = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요');
      if (KeeporStop=='1'){
        return this.play();
      }
      else if (KeeporStop=='2'){
        Console.print('게임 종료');
      }
    } catch (error) {
      throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
    }
  }

  async Gamestart(ComputerRandomNum){
    while(true){
      try {
        const UserNum = await Console.readLineAsync('숫자를 입력해주세요 : ');
        Console.print(UserNum);
        this.Check(UserNum);
      
        const StrikeConut = this.CalcStrike(ComputerRandomNum, UserNum);
        const BallCount = this.CalcBall(ComputerRandomNum, UserNum);
        const result = this.PrintCount(StrikeConut,BallCount);
        if (result==true){
          return this.Restart();
        }

      } catch (error) {
        throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
      }
    }
  }

  async play(){
    const ComputerRandomNum=this.generateComputerNumber();
    Console.print('컴퓨터 랜덤 숫자 : '+ComputerRandomNum);
    Console.print('숫자 야구 게임을 시작합니다.');
    return this.Gamestart(ComputerRandomNum);
  }
}

const app = new App();
app.play();

export default App;
