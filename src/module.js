import { MissionUtils } from "@woowacourse/mission-utils";
//숫자 랜덤 생성
export let RANDOM = {
  RANDOM_ARR : [],
  random_create : function(){
    this.RANDOM_ARR = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  },
}

export function start(){
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

let TEMP = [];
let COUNT = [0,0,0];
let USER_INPUT_ARRAY = [];
let USER_INPUT = "";

export async function game(){
  try{
    USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. :');
    if(USER_INPUT.length == 3 ){
      USER_INPUT_ARRAY = USER_INPUT.split('');
      COUNT = [0,0,0];
      //숫자 비교
      for( let i = 0; i < RANDOM.RANDOM_ARR.length; i++){
        TEMP[i] = RANDOM.RANDOM_ARR.indexOf(Number(USER_INPUT_ARRAY[i]));
        if(TEMP[i] == -1){
          COUNT[2] = COUNT[2] + 1;
        }
        else if(TEMP[i] == i){
          COUNT[0] = COUNT[0] + 1;
        }
        else if(TEMP[i] != i && TEMP[i] >0){
          COUNT[1] = COUNT[1] + 1;
        }
      }
      //최종 출력
      if(COUNT[0] > 0 && COUNT[1] > 0){
        MissionUtils.Console.print(`${COUNT[0]}스트라이크 ${COUNT[1]}볼`);
        return game();
      }
      else if(COUNT[0] == 3){
        MissionUtils.Console.print(`${COUNT[0]}스트라이크`)
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다!");
        ENDING();
      }
      else if(COUNT[0] > 0  && COUNT[1] == 0 && COUNT[0] < 3){
        MissionUtils.Console.print(`${COUNT[0]}스트라이크`);
        return game();
      }
      else if(COUNT[0] == 0 && COUNT[1] > 0){
        MissionUtils.Console.print(`${COUNT[1]}볼`);
        return game();
      }
      else if(COUNT[2] == 3){
        MissionUtils.Console.print("낫싱");
        return game();
      }
    }
    else{
      MissionUtils.Console.print("3자리 숫자를 입력해주세요.");
      return game();
    }
  }
  catch(error){
    throw error;
  }
}

async function ENDING(){
  const RESTART = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");
  if(RESTART == 1){
    RANDOM.random_create();
    return game();
  }
}
