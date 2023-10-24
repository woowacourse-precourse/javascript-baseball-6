import { MissionUtils, Console } from "@woowacourse/mission-utils";

class Game {
  async play() {
    try {
      const computerAnswer = this.generateRandomBallNumber();
      //MissionUtils.Console.print(computerAnswer);
    
      while (true) {
        let answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
        if (!this.checkAnswer(answer)) {
          throw new Error();
        }
        let correctAnswer = this.checkAllStrike(computerAnswer, answer);
        if (correctAnswer) break;
      }
    
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } catch (error) {
      MissionUtils.Console.print('[ERROR] Something went wrong:', error.message);
    }
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

  checkAllStrike(computerAnswer, answer) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computerAnswer.length; i++) {
      const index = answer.indexOf(computerAnswer[i]);
      if (index > -1) {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike === 3) {
      MissionUtils.Console.print('3스트라이크'); 
    } else if (strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print('낫싱');
    }
    return strike === 3;
  }
}

export default Game;
