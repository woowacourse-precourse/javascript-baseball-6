import { MissionUtils } from "@woowacourse/mission-utils";
import exportLibrary from "./exportLibrary.js";
import radomNumber from "./randomNumber.js";

class App {
  async play() {
    exportLibrary('숫자 야구 게임을 시작합니다.');
    
    // 애플리캐이션 작동 시작
    const start = async () => {
      const COMPUTER_NUMBER = [];

      // 임의의 수 3가지를 설정하는 기능
      radomNumber(COMPUTER_NUMBER);

        // 게임을 새로 시작하는 기능
        const restart = async () => {
          const CHOICE = await MissionUtils.Console.readLineAsync('');
          
          if (CHOICE === '1') {
            await start(); 
          } else if (CHOICE === '2') {
            return
          } else {
            exportLibrary('[ERROR] 1과 2중 하나를 입력하세요')
            throw new Error('[ERROR] 1과 2중 하나를 입력하세요');
          }
        };
      
      // 게임 시작
      const gameStart = async () => {
        const USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        // 세자리수가 아니면
        if (USER_INPUT.length !== 3) {
          exportLibrary('[ERROR] 세자리수를 입력하세요')
          throw new Error('[ERROR] 세자리수를 입력하세요');
        };

        // 문자열을 입력받았을때
        if (isNaN(USER_INPUT)) {
          exportLibrary('[ERROR] 숫자를 입력하세요')
          throw new Error('[ERROR] 숫자를 입력하세요');
        };

        // 서로같은 수를 입력받았을 때
        if (
          USER_INPUT
          .split('')
          .filter((item, index) => USER_INPUT.indexOf(item) !== index).length >0
        ) {
          exportLibrary('[ERROR] 서로다른 숫자를 입력하세요')
          throw new Error('[ERROR] 서로다른 숫자를 입력하세요');
        };

         // 정상적으로 입력했을 때
        if (USER_INPUT.length === 3 && isNaN(USER_INPUT) === false) {
         
          // 비교기능   
          const USER_NUMBER = USER_INPUT.split("").map((a) => parseInt(a)); 
          let strike = 0;
          let ball = 0;

          // 아무것도 없을 때
          if (COMPUTER_NUMBER.filter((i) => USER_NUMBER.includes(i)).length === 0) {
            exportLibrary('낫싱');
            await gameStart();
          };

          // 같은게 있을때 각요소끼리 검사하는 기능
          if (COMPUTER_NUMBER.filter((i) => USER_NUMBER.includes(i)).length > 0) {            
            COMPUTER_NUMBER.forEach((a, i) => {
             
              //숫자도 같고 위치도 같을 때
              if (USER_NUMBER.indexOf(a) === i) {
                return strike += 1;
              };

              // 수만 같을 때
              if (USER_NUMBER.indexOf(a) !== -1 && USER_NUMBER.indexOf(a) !== i) {
                return ball += 1;
              };
            });

            // 힌트 출력 기능
            if (strike === 0) {
              exportLibrary(ball + '볼');
              await gameStart();
            };

            if (ball === 0 && strike !== 3) {
              exportLibrary(strike + '스트라이크');
              await gameStart();
            };

            if (strike > 0 && ball > 0) {
              exportLibrary(ball + '볼' + ' ' + strike + '스트라이크');
              await gameStart();
            };

            if (strike === 3) {
              exportLibrary('3스트라이크');
              exportLibrary('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
              exportLibrary('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
              await restart();
            };
          };
        };
      };

      await gameStart();
    };

    await start();
  }
}
export default App;