import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computerAnswer = this.generateRandomBallNumber();
    //MissionUtils.Console.print(computerAnswer);
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (answer) => {
      if(!this.checkAnswer(answer)){
        throw new Error();
      }
      //console.log(`${answer}`);
    })

  }

  generateRandomBallNumber(){
    const computerAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerAnswer.join('');
  }
  checkAnswer(answer){
    if(answer.length !==3){
      return false;
    }
    if(new Set(answer).size !==3){
      return false;
    }
    return true;
  }
}

const init = new App();
init.play();

export default App;