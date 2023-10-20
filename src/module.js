import { MissionUtils } from "@woowacourse/mission-utils";
//숫자 랜덤 생성
export let RANDOM = {
  RANDOM_ARR : [],
  random_create : function(){
    this.RANDOM_ARR = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  },
  }
// 게임 시작 문구 출력
export let start = {
  startOut : function(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
}
// USER 입력
export let USER = {
  RESULT : [],
  COUNT : [],
  getUserInput : async function(){
    try{
      const userinput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. : ');
      const USER_INPUT = userinput.split('');
      if(userinput.length > 3 || isNaN(userinput) == true){
        MissionUtils.Console.print(`3자리 숫자를 입력해주세요.`);
        return this.getUserInput();
      }

      for(let i = 0; i<RANDOM.RANDOM_ARR.length; i++){
        const TEMP = RANDOM.RANDOM_ARR.indexOf(USER_INPUT[i]);
        console.log(RANDOM.RANDOM_ARR)
        console.log(USER_INPUT);
        console.log(this.RESULT)
        if( TEMP[i] == '-1' ){
          this.RESULT[i] = '-1'
          this.COUNT[2]++;
        }
        else {
          if( TEMP[i] !== i){
            this.RESULT[i] = '0'
            this.COUNT[1]++; // 숫자와 자리가 일지하지 않는 경우 0
          }
          else{
            this.RESULT[i] = '1'
            this.COUNT[0]++; // 숫자와 자리가 일치하는 경우 1
          }
        }
      }
      if( this.COUNT[0] != null){
        MissionUtils.Console.print(`${this.COUNT[0]}스트라이크`);
      }
    }
    catch(error){}
  },
}
