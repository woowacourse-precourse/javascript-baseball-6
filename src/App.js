import { Console } from "@woowacourse/mission-utils";
import { random } from "./Random.js";
import { input } from "./Input.js";
import { game } from "./Game.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computer = random(); // 컴퓨터값(배열)을 랜덤으로 받기
    while(true){
      try{
        let user1 = input(await Console.readLineAsync('숫자를 입력해주세요 : ')); // 사용자입력값(문자열) 애러 찾기
        let result = game(computer, user1);
        Console.print(result)
        if(result==='3스트라이크'){
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          // 기능4. 게임이 종료되고 게임을 다시 시작할지 여부
          let user2 = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
          if(+user2 === 1){
            computer = random();
          }else if(+user2 === 2){
            break;
          }else{
            throw new Error();
          }        
        }
      }catch (error){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다."); // 발생하는 그 외 애러
      }
    }
  }
}

export default App;
