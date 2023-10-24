import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor (){
    this.computerNumber = this.generateComputerNumber();
    Console.print('숫자 야구 게임을 시작합니다.');    
  }

  generateComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }    
    return computer.join("");
  }  

  async play() {        
    while (true) {
      const userGuess = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if (isNaN(userGuess)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if (userGuess.length !== 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if (new Set(userGuess).size !== userGuess.length) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }      

      const result = {
        strikes: 0,
        balls: 0,
      };      
      for (let i = 0; i < 3; i++) {
        if (userGuess[i] === this.computerNumber[i]) {
          result.strikes++;
        } else if (this.computerNumber.includes(userGuess[i])) {
          result.balls++;
        }
      }

      if (result.strikes === 3) {
        Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if (input !== '1' && input !== '2') {      
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        } else if (input === '1'){
          this.computerNumber = this.generateComputerNumber();
          this.play();            
        }                    
        break; 
      } else {
          if (result.strikes === 0 && result.balls > 0) {
            Console.print(result.balls + '볼');
          } else if (result.strikes > 0 && result.balls === 0) {
            Console.print(result.strikes + '스트라이크');
          } else if (result.strikes > 0 && result.balls > 0) {
            Console.print(result.balls + '볼 ' + result.strikes + '스트라이크');
          } else if (result.strikes === 0 && result.balls === 0) {
            Console.print('낫싱');
          }    
      }
    }
  }
}

export default App;
