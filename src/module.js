import { MissionUtils } from "@woowacourse/mission-utils";

class Game {
  COUNT = [0,0,0];
  RANDOM_ARR = [];
  Start(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
  }
  async GetUserInput(){
    this.COUNT = [0,0,0];
      this.USER_ANSWER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. :');
      if(this.USER_ANSWER.length > 3 || isNaN(this.USER_ANSWER) == true || this.USER_ANSWER.length < 3){
      }
      else{
        this.CompareNumber();
        if(this.COUNT.length == 3){
          this.PrintResult()
        }
      }
    }
  SetRandomNumber(){
    while (this.RANDOM_ARR.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.RANDOM_ARR.includes(number)) {
        this.RANDOM_ARR.push(number);
      }
    }
  }
  CompareNumber(){
    console.log(this.RANDOM_ARR)
    const USER_INPUT = this.USER_ANSWER.split('');
    const TEMP = []
    for(let i = 0; i<this.RANDOM_ARR.length; i++){
      TEMP[i] = this.RANDOM_ARR.indexOf(Number(USER_INPUT[i]));
      if( TEMP[i] == '-1' ){
        this.COUNT[2] = this.COUNT[2] + 1;
      }
      else{
        if( TEMP[i] !== i && TEMP[i] !== '-1'){
          this.COUNT[1] = this.COUNT[1] + 1; // 숫자와 자리가 일지하지 않는 경우 0
        }
        else{
          this.COUNT[0] = this.COUNT[0] + 1; // 숫자와 자리가 일치하는 경우 1
        }
      }
    }
  }
  PrintResult(){
    if(this.COUNT[0] > 0 && this.COUNT[1] > 0){
      MissionUtils.Console.print(`${this.COUNT[1]}볼 ${this.COUNT[0]}스트라이크`);
      return this.GetUserInput();
    }
    else if(this.COUNT[0] == 3){
      MissionUtils.Console.print(`${this.COUNT[0]}스트라이크`)
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.Ending();
    }
    else if(this.COUNT[0] > 0  && this.COUNT[1] == 0 && this.COUNT[0] < 3){
      MissionUtils.Console.print(`${this.COUNT[0]}스트라이크`);
      return this.GetUserInput();
    }
    else if(this.COUNT[0] == 0 && this.COUNT[1] > 0){
      MissionUtils.Console.print(`${this.COUNT[1]}볼`);
      return this.GetUserInput();
    }
    else if(this.COUNT[2] == 3){
      MissionUtils.Console.print("낫싱");
      return this.GetUserInput();
    }
  }
  async Ending(){
      this.RESTART = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");
      if(this.RESTART == 1){
        this.SetRandomNumber();
        return this.GetUserInput();
      }
      else if(this.RESTART == 2){}
      else{
      }
  }
}

export {Game};