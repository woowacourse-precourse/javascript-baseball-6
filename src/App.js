import { Console } from "@woowacourse/mission-utils";
import { random } from "./Random.js";
import { input } from "./Input.js";

class App {
  async play() {
    
    let computer = random(); // 컴퓨터값을 랜덤으로 받기
    while(true){
      try{
        let user = input(await Console.readLineAsync('숫자를 입력해주세요 : ')); // 사용자입력 애러 찾기
      }catch (error){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다."); // 발생하는 그 외 애러
      }
    }
  }
}

export default App;
