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
  getUserInput : async function(){
    const TEMP = [];
    const RESULT = [];
    const COUNT = [0,0,0];
    try{
      const userinput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. : ');
      const USER_INPUT = userinput.split('');
      if(userinput.length > 3 || isNaN(userinput) == true){
        MissionUtils.Console.print(`3자리 숫자를 입력해주세요.`);
        return this.getUserInput();
      }
      for(let i = 0; i<RANDOM.RANDOM_ARR.length; i++){
        TEMP[i] = RANDOM.RANDOM_ARR.indexOf(Number(USER_INPUT[i]));
        if( TEMP[i] == '-1' ){
          RESULT[i] = '-1'
          COUNT[2] += 1;
        }
        else {
          if( TEMP[i] !== i){
            RESULT[i] = '0'
            COUNT[1]+= 1; // 숫자와 자리가 일지하지 않는 경우 0
          }
          else{
            RESULT[i] = '1'
            COUNT[0]+= 1; // 숫자와 자리가 일치하는 경우 1
          }
        }
      }
      /*console.log(RANDOM.RANDOM_ARR)
      console.log(USER_INPUT)
      console.log(TEMP)
      console.log(RESULT)
      console.log(COUNT)*/
      if( COUNT[0] != 0){
        MissionUtils.Console.print(`${COUNT[0]}스트라이크`);
      }
      if( COUNT[1] != 0){
        MissionUtils.Console.print(`${COUNT[1]}볼`);
      }
      if( COUNT[2] == 3){
        MissionUtils.Console.print(`낫싱`);
      } 
      if( COUNT[0] == 3){
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      }
      else{
        return this.getUserInput();
      }
    }
    catch(error){}
  },
}
