// 라이브러리 import
import { MissionUtils } from "@woowacourse/mission-utils";

// 메인 App 클래스
class App {  
  async play() {  // play 메소드.   async는 비동기 처리를 할 때 await와 함께 쓰인다고 함.

    // 1~9 사이의 랜덤한 중복되지 않는 3자리 수 뽑기
    const computer_number = [];
    while (computer_number.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer_number.includes(number)) {
        computer_number.push(number);
      }
    }

    console.log(computer_number);
  }
}

export default App;

// app.play()로 실행
const app = new App();
app.play();