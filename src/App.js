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
    const computerAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerAnswer.join('');
  }

  checkAnswer(answer){
    const userAnswer = answer.split('');
    const computerAnsw = this.computerAnswer.split('');
    if(userAnswer.length !== 3){
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
    return true
    
  }

  checkAllStrike(userAnswer, computerAnsw) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computerAnsw.length; i++) {
      const index = userAnswer.indexOf(computerAnsw[i]);
      if (index > -1) {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    if (strike === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.replay();
    } else {
      if(strike === 0 && ball === 0) {
        MissionUtils.Console.print('낫싱');
      } else if (strike === 0 && ball !== 0) {
        MissionUtils.Console.print(`${ball}볼`);
      } else if (strike !== 0 && ball === 0){
        MissionUtils.Console.print(`${strike}스트라이크`);
      } else if (strike !== 0 && ball !== 0){
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
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
    this.checkAnswer(answer);
  }
  
  async play() {
    await this.numCorrect();
  }

}

const app = new App();
app.play();

export default App;