import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const GameStart = () => {
      const baseball = [];

      while (baseball.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);

        if (!baseball.includes(number)) {
          baseball.push(number);
        }
      }

      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
      
      return baseball;
    }

    const Hint = (answer,userAnswer) => {
      let hint = '';
      let ball = 0;
      let strike = 0;

      userAnswer.forEach((number,i) => {
        const check = answer.indexOf(+number);
        if(check != -1){
          check === i ? strike++ : ball++
        }
      })

      if(ball > 0) hint += `${ball}볼`;
      if(strike > 0) hint += `${strike}스트라이크`;
      if(ball === 0 && strike === 0) hint += '낫싱';

      return hint
    }
    
    let answer = GameStart();
    let userAnswer = [];

    while(answer.join('') != userAnswer.join('')){
      const USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요 : ');      
      userAnswer = USER_INPUT.split('');

      MissionUtils.Console.print(Hint(answer,userAnswer));
    }

    MissionUtils.Console.print('숫자 야구 게임을 종료합니다.')
  }
}

const app = new App();
app.play();

export default App;
