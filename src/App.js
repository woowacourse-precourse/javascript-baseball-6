import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    let restart_game = true;
    while (restart_game) {
      const COMPUTER = [];
      const USER = [];
      while (COMPUTER.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(number)) {
          
        }
        COMPUTER.push(number);
      }

      //  숫자입력받는함수
       const getUserInput = async function longUniqueMoreDescriptiveLexicalgetUserInput() {
        const USER_INPUT = await Console.readLineAsync("숫자를 입력해주세요 :");
        const USER_NUMBER = USER_INPUT.split("").map(Number);

        if (USER_NUMBER.length !== 3) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        COMPUTER.push(USER_NUMBER);
        const { strikes, balls } = findCommonNumbers(USER_NUMBER, COMPUTER);
        const RESULT = displayGameReuslt(strikes,balls);
        Console.print(RESULT);
        return strikes;
      }

      // 결과 출력하는 함수
      const displayGameReuslt = function longUniqueMoreDescriptiveLexicalFinddisplayGameResult(strikes,balls){
        if (strikes > 0 && balls > 0) {
          return `${balls}볼 ${strikes}스트라이크`;
        } else if (strikes > 0) {
          return `${strikes}스트라이크`;
        } else if (balls > 0) {
          return `${balls}볼`;
        }else{
            return "낫싱";
        }
      }

      // 공통된 숫자 찾아내는 함수
     const findCommonNumbers = function longUniqueMoreDescriptiveLexicalFindCommonNumbers(USER,COMPUTER) {
         let strikes = 0;
         let balls = 0;
         for (let i = 0; i < 3; i++) {
           if (USER[i] === COMPUTER[i]) {
             strikes +=1;
           } else if (COMPUTER.includes(USER[i])) {
             balls +=1;
           }
         }

         return { strikes, balls };
       };
       
      //  이제 3개 다찾을떄까지 게임 반복.
      while (true) {
        const STRIKERS = await getUserInput();
        if (STRIKERS === 3) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      }

    const RESTART_INPUT = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      if (RESTART_INPUT !== "1" && RESTART_INPUT !=="2") {
       throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
     }
     restart_game = RESTART_INPUT === "1";
    }
  }
}

const app = new App();
app.play();
export default App;
