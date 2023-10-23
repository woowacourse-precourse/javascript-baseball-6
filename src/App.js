import { Console, Random } from "@woowacourse/mission-utils";

class App {
  // input에 대한 예외케이스
  // 1. 세자리가 아닌 숫자
  // 2. 빈칸이 있는 숫자
  // 3. 숫자이외의 문자가 포함된 경우
  // 2-1. endGame입력이 1이나 2가 아닌 경우
  async getUserInput(prompt) {
    return Console.readLineAsync(prompt);
  }

  async play() {
    
    Console.print('숫자 야구 게임을 시작합니다.');
    while(true) {
      const target = Random.pickNumberInRange(111, 999);

      const targetNums = [(Math.floor(target/100))%10, (Math.floor(target/10))%10, target%10];
      if (targetNums.includes(0)) {
        continue;
      }
      
      let inputNum = await this.getUserInput('숫자를 입력해주세요 : ');
      // exception handling (inputNum 에러 코드를 작성하세요)

      let inputNums = [(Math.floor(inputNum/100))%10, (Math.floor(inputNum/10))%10, inputNum%10];
      
      let strike = 0, ball = 0;
      
      // 스트라이크 조건, 볼 조건
      for(let i = 0; i < targetNums.length; i++) {
        if (targetNums[i] === inputNums[i]) {
          strike++;
        } else if (targetNums.includes(inputNums[i])){
          ball++;
        }
      }

      if (strike == 3) {
        Console.print(`${strike}스트라이크`);
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        let endGame = await this.getUserInput('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        // exception handling (endGame 에러 코드를 작성하세요)

        if (endGame == 1) {
          continue;
        }else {
          break;
        }
      }

      if ( strike & ball ) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      } else if (strike) {
        Console.print(`${strike}스트라이크`);
      } else if (ball) {
        Console.print(`${ball}볼`);
      } else {
        Console.print('낫싱');
      }
    }
  }
}

const app = new App();
app.play();

export default App;
