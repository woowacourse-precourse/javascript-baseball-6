import { Random, Console } from "@woowacourse/mission-utils";

class App {
  
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const randomNumber = this.getRandomNumber(); // 랜덤 번호
    let isGameOver  = true; // 반복문 조건
    
    while(isGameOver) {
      const userNumber = await this.getUserNumber();
      const result = this.checkNumbers(randomNumber, userNumber)
      Console.print(result);

      if(result === '3스트라이크') {
        isGameOver = false; // 정답맞췄으니 반복문 탈출
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      
      }
    }
    await this.reStartOrExit()
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
      const numberDuplication = (new Set(number)).size !== number.length; // 중복확인하는 변수

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

    if(!user || !computer ){
      throw new Error('[ERROR] 값이 비어 있습니다.')
    }

    for(let i=0; i<3; i++) {
      // 숫자가 같고 인덱스가 같으면 strike++
      if(computer[i] === +user[i]){
        strike ++
      // 숫자는 같은데 인덱스가 다른경우 ball++
      } else if(computer.includes(+user[i])) {
        ball ++
      }
    }
    return this.checkNumbersPrint(strike, ball)
  }
  checkNumbersPrint(strike, ball) {
    if (strike === 3) {
      return "3스트라이크"; 
    } else if (strike === 0 && ball === 0) {
      return "낫싱"; 
    } else {
      return `${ball}볼 ${strike}스트라이크`; 
    }
  }
  async reStartOrExit() {
    const result = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

    // 1이면 재시작 2이면 종료
    if(result === "1") {
      this.play()
    }else if(result === "2") {
      return
    }else{
      throw Error("[Error] 1이나 2만 입력해주세요.")
    }
  }
}

const app = new App();
app.play();

export default App;
