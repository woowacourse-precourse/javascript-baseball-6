import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const RANDOM_NUM = Random.pickUniqueNumbersInRange(1, 9, 3)
    Console.print(RANDOM_NUM)
    let BALL = 0;
    let STRIKE = 0;
    Console.readLine("숫자를 입력해주세요 : ", (input) => {    
      
      // input 값 순회
      let i;
      for (i = 0; i < 3; i++) {
        // console.log(input[i])
        if (Number(input[i]) === Number(RANDOM_NUM[i])) {
          STRIKE++;
        } else {BALL++}
      }

      // 입력값의 결과 출력
      Console.print(
        (BALL !== 0
          ? BALL === 3
            ? '낫싱'
            :`${BALL}볼 `
          : '') 
        + (STRIKE ? `${STRIKE}스트라이크` : ''));
      if (STRIKE === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      };
    });
  }
}

const app = new App();
app.play();

export default App;
