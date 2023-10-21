import { Console } from "@woowacourse/mission-utils";
import { random } from "./Random.js";
import { input } from "./Input.js";
import { game } from "./Game.js";
import { restart } from "./Restart.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computer = random(); // 컴퓨터값(배열)을 랜덤으로 받기
    Console.print(computer);
    while(true){
      // try{
        let user = input(await Console.readLineAsync('숫자를 입력해주세요 : ')); // 사용자입력값(문자열) 애러 찾기
        let result = game(computer, user);
        Console.print(result)
        if(result==='3스트라이크'){
          return ('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        }
      // }catch (error){
        // throw new Error("[ERROR] 숫자가 잘못된 형식입니다."); // 발생하는 그 외 애러
      // }
    }
  }
}

export default App;
