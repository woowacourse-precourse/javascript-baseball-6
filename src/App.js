import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";
import GameData from "./GameData";
import { validationNumbers } from "./Validation";

class App {
  async play() {
    const gameData = new GameData();
    Console.print("숫자 야구 게임을 시작합니다.");

    // state가 true일 때 반복
    while (gameData.getState()) {
      // 랜덤 숫자
      const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);

      // 사용자에게 값 받기
      // 프로미스 방식 -> 성공 : resolve, 실패 : reject
      const userInputs = await new Promise((resolve) => {
        Console.readLine("숫자를 입력해주세요 : ", (input) => {    
          resolve(input);
        });
      });
      // 잘못된 값을 입력했을 때 처리
      // validationNumbers가 false일 때
      if (!validationNumbers(userInputs.split(''))) {
        throw new Error('잘못된 값을 입력했습니다.');
      }
      // 제대로 된 값을 입력했다면 숫자로 변환
      const userInputsNumber = userInputs.split('').map((userInput) => parseInt(userInput, 10));

      // ball, strike 확인
      
    }

    // Console.print(randomNumber)
    // let BALL = 0;
    // let STRIKE = 0;
    
    

      
      // // input 값 순회
      // let i;
      // for (i = 0; i < 3; i++) {
      //   // console.log(input[i])
      //   if (Number(input[i]) === Number(RANDOM_NUM[i])) {
      //     STRIKE++;
      //   } else {BALL++}
      // }

      // // 입력값의 결과 출력
      // Console.print(
      //   (BALL !== 0
      //     ? BALL === 3
      //       ? '낫싱'
      //       :`${BALL}볼 `
      //     : '') 
      //   + (STRIKE ? `${STRIKE}스트라이크` : ''));
      // if (STRIKE === 3) {
      //   Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      // };
    
  }
}

const app = new App();
app.play();

export default App;
