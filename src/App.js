import { Console } from '@woowacourse/mission-utils';
import RandomPick from './RandomPick';
import Input from './Input';
import AnswerCheck from './AnswerCheck';
import Restrat from './Restart'

class App {
  async play() {
    let correctAnswer;
    let answer;
    let answerCheck;
    let restart;
    
    Console.print('숫자 야구 게임을 시작합니다.');
    correctAnswer = RandomPick();
    
    while(true){
      answer = await Input();
      answerCheck = AnswerCheck(correctAnswer, answer);

      if(answerCheck === 1){
        restart = await Restrat();

        if(restart === 1){
          correctAnswer = RandomPick();
        }else if(restart === 2){
          return;
        }else{
          throw new Error('[ERROR]');
        }
      }
    }
  }
}

export default App;
