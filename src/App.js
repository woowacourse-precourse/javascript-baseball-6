//App.js
//프로그래밍 요구사항 : 라이브러리 사용
import * as MissionUtils from "@woowacourse/mission-utils";
console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {
  
  async play() { 

    //하영 임시
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    console.log(`랜덤한 숫자: ${randomNum}`);

    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
console.log(`사용자 입력: ${userInput}`);
    //하영임시

    Console.print('숫자 야구 게임을 시작합니다.');

  

}//END App

export default App;
