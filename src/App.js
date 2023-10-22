import { MissionUtils } from "@woowacourse/mission-utils";

let isGameEnd = false;

class App {
  async play() {
    try{
        console.log("숫자 야구 게임을 시작합니다.");

        const computer = this.generateRandomNumber();
        console.log(computer);

        while (!isGameEnd) {
            const userGuess = await this.getUserGuess();
            this.checkGuess(computer, userGuess);
        }
    }catch(error){
        console.log(error);
    }
   
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  async getUserGuess() {
    const userInput = await MissionUtils.Console.readLineAsync("서로 다른 3자리의 숫자를 입력하세요");
  
    if (!/^\d{3}$/.test(userInput)) {
      throw new Error("[ERROR] 3자리의 숫자를 입력해주세요.");
    }
    return userInput;
  }

  checkGuess(computer, userGuess) {

    MissionUtils.Console.print(userGuess);
    if (!/^\d{3}$/.test(userGuess)) {
      throw new Error("올바른 형식의 숫자를 입력하세요.");
    }

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      const computerDigit = parseInt(computer.charAt(i));
      const userGuessDigit = parseInt(userGuess.charAt(i));

      if (computerDigit === userGuessDigit) {
        strikes++;
      } else if (computer.includes(userGuessDigit)) {
        balls++;
      }
    }

    if (strikes === 3) {
      console.log("3스트라이크");
      console.log("3개의 숫자를 모두 맞히셨습니다!");
      isGameEnd = true;
      this.playAgain();
    } else if (strikes > 0 || balls > 0) {
      console.log(`${balls}볼 ${strikes}스트라이크`);
    } else {
      console.log("낫싱");
    }
  }

  async playAgain() {
    const userInput = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (userInput === "1") {
      isGameEnd = false;
      await this.play(); 
    } else if (userInput === "2") {
      console.log("게임을 종료합니다.");
      return; 
    } else {
      throw new Error("올바른 형식의 숫자를 입력하세요.");
    }
  }
}

export default App;