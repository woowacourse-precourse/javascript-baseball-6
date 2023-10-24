import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  generateComputerNumber() { //컴퓨터 랜덤 숫자 생성
    const COMPUTER_NUMBER = [];
    while (COMPUTER_NUMBER.length < 3) {
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(RANDOM_NUM)) {
        COMPUTER_NUMBER.push(RANDOM_NUM);
      }
    }
    return COMPUTER_NUMBER;
  }

  CalcStrike(COM_RANDOM_NUM, USER_NUM){ //스트라이크 카운트
    let STRIKE_COUNT=0
    for(let i = 0; i<3; i++){
      if (COM_RANDOM_NUM[i]==USER_NUM[i]){
        STRIKE_COUNT+=1;
      }
    }
    return STRIKE_COUNT;
  }

  CalcBall(COM_RANDOM_NUM, USER_NUM){ //볼 카운트
    let BALL_COUNT=0
    for(let i = 0; i<3; i++){
      for (let j = 0; j < 3; j++) {
        if ((i != j) && (COM_RANDOM_NUM[i] == USER_NUM[j])) {
          BALL_COUNT += 1;
        }
      }
    }
    return BALL_COUNT;
  }

  PrintCount(STRIKE_COUNT, BALL_COUNT){ //스트라이크&볼 카운트 출력
    if ((STRIKE_COUNT==0)&&(BALL_COUNT==0)){
      Console.print('낫싱')
      return false;
    }
    if ((STRIKE_COUNT!=0)&&(BALL_COUNT==0)){
      Console.print(STRIKE_COUNT+'스트라이크')
      if(STRIKE_COUNT==3){
        Console.print("3개의 숫자를 모두 맞히셨습니다!");
        return true;
      }
      return false;
    }
    if ((STRIKE_COUNT==0)&&(BALL_COUNT!=0)){
      Console.print(BALL_COUNT+'볼')
      return false
    }
    if ((STRIKE_COUNT!=0)&&(BALL_COUNT!=0)){
      Console.print(BALL_COUNT+"볼 "+STRIKE_COUNT+'스트라이크')
      return false
    }
  }

  Check(USER_NUM){ //사용자 입력 숫자 예외처리
    const inputToSet = new Set(USER_NUM.split('').map(Number));
    if (USER_NUM.length!=3){
      throw new Error();
    }
    if ([...inputToSet].length !== 3) {
      throw new Error();
    }
    if (USER_NUM.includes(' ')){
      throw new Error();
    }
    if (Number.isNaN(USER_NUM)){
      throw new Error();
    }
    else{
      return true;
    }
  }

  async Restart(){ //게임 재시작 & 종료 여부 확인
    try {
      const KEEP_OR_STOP = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 \n');
      if (KEEP_OR_STOP=='1'){
        return this.play();
      }
      else if (KEEP_OR_STOP=='2'){
        Console.print('게임 종료');
      }
    } catch (error) {
      throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
    }
  }

  async Gamestart(COM_RANDOM_NUM){ //게임 시작 및 사용자 숫자 입력
    while(true){
      try {
        const USER_NUM = await Console.readLineAsync('숫자를 입력해주세요 : ');
        this.Check(USER_NUM);
      
        const STRIKE_COUNT = this.CalcStrike(COM_RANDOM_NUM, USER_NUM);
        const BALL_COUNT = this.CalcBall(COM_RANDOM_NUM, USER_NUM);
        const RESULT = this.PrintCount(STRIKE_COUNT,BALL_COUNT);
        if (RESULT==true){
          return this.Restart();
        }

      } catch (error) {
        throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
      }
    }
  }

  async play(){
    const COM_RANDOM_NUM=this.generateComputerNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
    return this.Gamestart(COM_RANDOM_NUM);
  }
}

const app = new App();
app.play();

export default App;
