import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {  
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    let answer = this.GameStart();
    let userAnswer = '';

    while(answer != userAnswer){
      userAnswer = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요 : ');  

      try{
        this.Exception(userAnswer);
        MissionUtils.Console.print(this.Hint(answer,userAnswer));
      }catch (error){
        MissionUtils.Console.print(error);
        throw new Error('[ERROR]');
      }

      if(answer === userAnswer){
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        
        const GAME_SELECTED = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        if(GAME_SELECTED === '1'){
          answer = this.GameStart();
        }
      }
    }
  }

  GameStart(){
    const baseball = [];

    while (baseball.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!baseball.includes(number)) {
        baseball.push(number);
      }
    }
    
    return baseball.join('');
  }

  EndGame(){
    MissionUtils.Console.print('숫자 야구 게임을 종료합니다.')
  }

  Exception(string){
    if(string.length != 3) throw '3자리 숫자여야 합니다.';
  }

  Hint(answer,userAnswer){
    let hint = [];
    let ball = 0;
    let strike = 0;

    userAnswer.split('').forEach((char,i) => {
      const CHECK = answer.indexOf(+char);
      if(CHECK != -1){
        CHECK === i ? strike++ : ball++
      }
    })

    if(ball > 0) hint.push(`${ball}볼`);
    if(strike > 0) hint.push(`${strike}스트라이크`);
    if(ball === 0 && strike === 0) hint.push('낫싱');

    return hint.join(' ');
  }
  


}

const app = new App();
app.play();

export default App;
