import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  getRandomNumber(){
    const computerNumber = [];
    while (computerNumber.length < 3){
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!computerNumber.includes(number))
        computerNumber.push(number);
    }
    return computerNumber;
  }

  async getUserInput(){
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const validatedUserInput = this.checkInputValidation(userInput);

    return validatedUserInput;
  }

  checkInputValidation(userInputNumber){
    const userInputNumberArr = userInputNumber.split('').map(Number);

    if(userInputNumber.length !== 3) throw new Error("[ERROR] 3자리 숫자가 아닙니다.");
    if(new Set(userInputNumberArr).size !== 3) throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    if(userInputNumber.includes(0)) throw new Error("[ERROR] 1~9 사이의 숫자가 아닙니다.");
    if(isNaN(userInputNumber)) throw new Error("[ERROR] 숫자가 아닙니다.");
    
    return userInputNumberArr;
  }

  compareNumber(computerNumber, userInput){
    let strikeCount = 0;
    let ballCount = 0;

    for(let i = 0; i < 3; i++){
      if(computerNumber[i] === userInput[i]) strikeCount++;
      else if(computerNumber.includes(userInput[i])) ballCount++;
    }
    return [strikeCount, ballCount];
  }

  async answerResult(computerNumber, userInput){
    if(computerNumber.join('') === userInput.join('')){
      MissionUtils.Console.print("3스트라이크 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    } else {
      const compareResult = this.compareNumber(computerNumber,userInput);
      const BALL_COUNT = compareResult[0];
      const STRIKE_COUNT = compareResult[1];

      if(BALL_COUNT > 0 && STRIKE_COUNT > 0) MissionUtils.Console.print('${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크');
      else if(BALL_COUNT > 0 && STRIKE_COUNT === 0) MissionUtils.Console.print('${BALL_COUNT}볼');
      else if(BALL_COUNT === 0 && STRIKE_COUNT > 0) MissionUtils.Console.print('${STRIKE_COUNT}스트라이크');
      else if(BALL_COUNT === 0 && STRIKE_COUNT === 0) MissionUtils.Console.print('낫싱');
      
      return false;
    }
  }

  async startGame(){
    const computerAnswer = this.getRandomNumber();
    let gameResult = false;

    while(!gameResult){
      const userAnswer = await this.getUserInput();
      this.answerResult(computerAnswer, userAnswer);
    }

    await this.restartGame();
  }

  async restartGame(){
    const restartAnswer = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if(restartAnswer === "1") await this.startGame();
    else if(restartAnswer === "2") MissionUtils.Console.print("게임 종료");
    else throw new Error("[ERROR] 1이나 2를 입력해주세요.")
  }


  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.startGame();
  }
}

const app = new App();
app.play();

export default App;