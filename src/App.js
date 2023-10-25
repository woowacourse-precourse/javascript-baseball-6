import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.init();
  }

  init() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerAnswer = this.generateRandomBallNumber();
  }

  generateRandomBallNumber(){
    const computerAnswerArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.computerAnswer = computerAnswerArr.join('');
    return this.computerAnswer;
  }
  
  
  
  

  checkAnswer(answer){
    const userAnswer = answer.split('');
    const computerAnswerArr = this.computerAnswer.split('');
    if(userAnswer.length !== 3){
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    if(userAnswer.includes(0)){
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    if(userAnswer[0] === userAnswer[1] 
      || userAnswer[1] === userAnswer[2] 
      || userAnswer[2] === userAnswer[3]
      ){
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    userAnswer.forEach((idx) => {
      if (isNaN(Number(idx))) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    })
    return this.checkBallStrike(computerAnswerArr, userAnswer);
  }
  
  
  

  countBall(computerAnswerArr, userAnswer) {
    let ball = 0;
    for (let i = 0; i < computerAnswerArr.length; i++) {
      if ((computerAnswerArr[i] !== userAnswer[i]) && (userAnswer.includes(computerAnswerArr[i]))) {
        ball += 1;
      }
    }
    return ball;
  }

  countStrike(computerAnswerArr, userAnswer){
    if (!computerAnswerArr || !userAnswer) {
      return 0;
    }
  
    let strike = 0;
  
    for (let i = 0; i < userAnswer.length; i++) {
      if(computerAnswerArr[i] === userAnswer[i]){
        strike += 1;
      }
    }
  
    return strike;
  }
  
  
  checkBallStrike(computerAnswerArr, userAnswer) {
    const strikes = this.countStrike(computerAnswerArr, userAnswer);
    const balls = this.countBall(computerAnswerArr, userAnswer);
    this.checkAllStrike(strikes, balls);
  }
  
  

  checkAllStrike(strikes, balls) {
    
    if (strikes === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.replay();
    } else {
      if (strikes === 0 && balls === 0) {
        MissionUtils.Console.print('낫싱');
      } else if (strikes === 0 && balls !== 0) {
        MissionUtils.Console.print(`${balls}볼`);
      } else if (strikes !== 0 && balls === 0) {
        MissionUtils.Console.print(`${strikes}스트라이크`);
      } else if (strikes !== 0 && balls !== 0) {
        MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
      }

      return this.play();
    }
  }
  async replay() {
    const regame = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n');
  
    if (regame === '1') {
      this.computerAnswer = this.generateRandomBallNumber();
      return await this.play(); 
    } else if (regame === '2') {
      MissionUtils.Console.print('게임 종료');
    } else {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }
  
  

  async numCorrect() {
    const answer = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    try {
      const { computerAnswerArr, userAnswer } = this.checkAnswer(answer);
      this.checkBallStrike(computerAnswerArr, userAnswer);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
  
  async play() {
    await this.numCorrect(); 
  }
  
}

const app = new App();
app.play();

export default App;