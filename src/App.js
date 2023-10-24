import { Random, Console } from "@woowacourse/mission-utils";

class App {

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const randomNumber = this.getRandomNumber();
    let isGameOver  = true;
    
    while(isGameOver) {
      const userNumber = await this.getUserNumber();
      const result = this.checkNumbers(randomNumber, userNumber)
      Console.print(result);
      if(result === '3스트라이크') {
        isGameOver = false;
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }
    }
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async getUserNumber() {
    try {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const numberDuplication = (new Set(number)).size !== number.length;

      if(number.length !== 3) {
        throw new Error("[ERROR] 숫자 3개를 입력해주세요.")
      }

      if(isNaN(number)) {
        throw new Error("[ERROR] 숫자만 입력해 주세요.")
      }

      if(numberDuplication) {
        throw new Error("[ERROR] 숫자를 중복되게 넣지 말아주세요.")
      }
      
      return number;
    } catch (error) {
      console.log(error.message);
      return;
    }
  }

  checkNumbers(computer, user) {
    let strike = 0;
    let ball = 0;

    for(let i=0; i<3; i++) {
      if(computer[i] === +user[i]){
        strike ++
      } else if(computer.includes(+user[i])) {
        ball ++
      }
    }
    
    if (strike === 3) {
      return "3스트라이크"; 
    } else if (strike === 0 && ball === 0) {
      return "낫싱"; 
    } else {
      return `${ball}볼 ${strike}스트라이크`; 
    }

  }
}

const app = new App();
app.play();

export default App;
