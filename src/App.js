import { Console, Random } from "@woowacourse/mission-utils";

class App {
  // input에 대한 예외케이스
  // 1. 세자리가 아닌 숫자
  // 2. 빈칸이 있는 숫자
  // 3. 숫자이외의 문자가 포함된 경우
  // 4. endGame입력: 1이나 2가 아닌 다른 문자가 주어지는 경우, 아니면 1도 아니고 2도 아닌 숫자
  async validateInput(mode, input) {
    if (mode === 'guess') {
      let a = input.length === 3;
      let b = (/[1-9]{3}/).test(input);
      let c = (new Set(input.split(''))).size === 3;
      return a && b && c;
    }else if (mode === 'resume') {
      let a = (/[1-9]{1}/).test(input);
      let b = (input === "1" || input === "2");
      return a && b;
    }
  }

  async getUserInput(prompt) {
    return Console.readLineAsync(prompt);
  }

  async play() {
    let resume = true;
    // resume 구간
    Console.print('숫자 야구 게임을 시작합니다.');

    while(resume) {
      const targetNums = []; 
      let pool = new Set(targetNums);
      while(targetNums.length < 3) {
        const target = Random.pickNumberInRange(1, 9);
        if (pool.has(target)) {
          continue;
        }
        pool.add(target);
        targetNums.push(target);
      }

      // guess 구간
      while(true) {
        let input = await this.getUserInput('숫자를 입력해주세요 : ');
        
        // exception handling
        let validInput = await this.validateInput('guess', input);
        
        if (!validInput) {
          resume = false;
          throw new Error("[ERROR]");
        }
        
        let inputNum = parseInt(input, 10);
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
  
        if (strike == 3 && ball == 0) {
          Console.print(`${strike}스트라이크`);
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          let endGame = await this.getUserInput('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
          
          // exception handling
          let validInput = await this.validateInput('resume', endGame);
          if (!validInput) {
            throw new Error("[ERROR]");
          }else if(endGame === "2") {
            resume = false;
            break;
          }else{
            break;
          }
        }
  
        if ( strike > 0 && ball > 0 ) {
          Console.print(`${ball}볼 ${strike}스트라이크`);
        } else if (strike > 0) {
          Console.print(`${strike}스트라이크`);
        } else if (ball > 0) {
          Console.print(`${ball}볼`);
        } else {
          Console.print('낫싱');
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
