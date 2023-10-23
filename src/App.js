import { MissionUtils } from "@woowacourse/mission-utils";
class Game {
  COUNT = [0,0,0];
  RANDOM_ARR = [];
  MIN_NUM = 1;
  MAX_NUM = 9;
  Start(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
  }
  async GetUserInput(){
    try{
      this.COUNT = [0,0,0];
      this.USER_ANSWER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. : ');
      if(this.USER_ANSWER.split('').filter((el,index,arr)=>arr.indexOf(el) ===index).length != 3){
        throw ("[ERROR] ")
      }
      else if(this.USER_ANSWER.length == 3 && isNaN(this.USER_ANSWER) != true){
        this.CompareNumber();
        this.PrintResult();
      }
      else{
        throw ("[ERROR] 3자리 숫자를 입력해주세요.")
      } 
    }
    catch(error){
      return Promise.reject(new Error("[ERROR]"));
    }
  }
  SetRandomNumber(){
    this.RANDOM_ARR = [];
    if(this.MIN_NUM != this.MAX_NUM){
      while (this.RANDOM_ARR.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(this.MIN_NUM, this.MAX_NUM);
        if (!this.RANDOM_ARR.includes(number)) {
          this.RANDOM_ARR.push(number);
        }
      }
    }
    else{
      return Promise.reject(new Error("[ERROR]"));
    }
  }
  CompareNumber(){
    const USER_INPUT = this.USER_ANSWER.split('');
    const TEMP = []
    for(let i = 0; i<this.RANDOM_ARR.length; i++){
      TEMP[i] = this.RANDOM_ARR.indexOf(Number(USER_INPUT[i]));
      if( TEMP[i] < 0 ){
        this.COUNT[2] = this.COUNT[2] + 1; // 숫자가 없는 경우
      }
      else{
        if( TEMP[i] !== i){
          this.COUNT[1] = this.COUNT[1] + 1; // 숫자와 자리가 일지하지 않는 경우
        }
        else{
          this.COUNT[0] = this.COUNT[0] + 1; // 숫자와 자리가 일치하는 경우
        }
      }
    }
  }
  PrintResult(){
    if(this.COUNT[0] > 0  && this.COUNT[1] == 0 && this.COUNT[0] < 3){
      MissionUtils.Console.print(`${this.COUNT[0]}스트라이크`);
      this.GetUserInput();
    }
    else if(this.COUNT[0] == 0 && this.COUNT[1] > 0){
      MissionUtils.Console.print(`${this.COUNT[1]}볼`);
      this.GetUserInput();
    }
    else if(this.COUNT[0] > 0 && this.COUNT[1] > 0){
      MissionUtils.Console.print(`${this.COUNT[1]}볼 ${this.COUNT[0]}스트라이크`);
      this.GetUserInput();
    }
    else if(this.COUNT[2] == 3){
      MissionUtils.Console.print("낫싱");
      this.GetUserInput();
    }
    else if(this.COUNT[0] == 3){
      MissionUtils.Console.print(`${this.COUNT[0]}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      this.Ending();
    }
    
  }
  async Ending(){
    try{
      this.RESTART = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");
      if(this.RESTART == 1){
        this.SetRandomNumber();
        this.GetUserInput();
      }
      else if(this.RESTART == 2){
        resolve();
      }
      else{
        return Promise.reject(new Error("[ERROR]"));
      }
    }
      catch(e){
        return e;
      }
  }
}

class App {
  async play() {
    try{
      const game = new Game();
      game.SetRandomNumber();
      await game.GetUserInput();
    }
    catch(e){
      return Promise.reject(new Error("[ERROR]"));
    }
  }
}

export default App;
