import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computerAnswer = this.generateRandomBallNumber();
    MissionUtils.Console.print(computerAnswer);
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (answer) => {
      if(!this.checkAnswer(answer)){
        throw new Error();
      }
      this.checkAllStrike(computerAnswer, answer);
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

  checkAllStrike(computerAnswer, answer){
    if(computerAnswer === answer) {
      MissionUtils.Console.print('3스트라이크');
    }

    let strike = 0;
    let ball = 0;
    for(let i = 0; i < computerAnswer.length; i++) {
      const index = answer.indexOf(computerAnswer[i]);
      if(index > -1){
        if(index === i){
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    MissionUtils.Console.print(`스트라이크: ${strike} 볼: ${ball} `);
  }

}

const init = new App();
init.play();

export default App;