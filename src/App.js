import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";
import GameData from "./GameData";
import { validationNumbers } from "./Validation";

class App {
  async play() {
    const gameData = new GameData();
    Console.print("숫자 야구 게임을 시작합니다.");

    // ball, strike 확인하는 함수
    function setAnalysis(gameData, userInputs, randomNumber) {
      // userInput과 비교해서 randomNumber와 다른 값을 찾음
      const noStrikeNumbers = userInputs.filter((userInput, i) => 
        randomNumber[i] !== userInput
      );
      // strike가 아닌 값들 중 randomNumber에 포함되어있는 값을 찾음 === ball 개수
      const ballNumbers = noStrikeNumbers.filter((noStrikeNumber) => 
        randomNumber.includes(noStrikeNumber)
      );
      const strike = 3 - noStrikeNumbers.length;
      const ball = ballNumbers.length;

      // 값 업데이트
      gameData.setBall(ball);
      gameData.setStrike(strike);
    }

    // 결과 출력하는 함수
    function printResult(gameData) {
      const ball = gameData.getBall();
      const strike = gameData.getStrike();

      // 0볼 0스트라이크
      if (ball === 0 && strike === 0) {
        Console.print('낫싱');
        return
      } else if (ball === 0) { // 0볼 n스트라이크
        Console.print(`${strike}스트라이크`);
        if (strike === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          gameData.setThreeStrike(true); // 삼진 = true
        }
        return
      } else if (strike === 0) { // n볼 0스트라이크
        Console.print(`${ball}볼`);
        return
      }
      // n볼 n스트라이크
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } 

    
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
