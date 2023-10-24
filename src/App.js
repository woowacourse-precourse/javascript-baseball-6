import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { getRandomNumber } from "./getRandomNumber";
import { getUserNum } from "./getUserNum";
import { checkUserNum } from "./checkUserNum";

class App {

async play() {

let COM_NUMBER = getRandomNumber()

Console.print("숫자 야구 게임을 시작합니다.")
let userNum;

while(true){

userNum= await getUserNum();

let strike= checkUserNum(COM_NUMBER,userNum);

if(strike ===3){
Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
const OVERM= await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 '1', 종료하려면 '2'를 입력하세요.");

if(OVERM==="1"){
COM_NUMBER=getRandomNumber();
}else if(OVERM==="2"){
break;
}

}


}


}

}

export default App;
