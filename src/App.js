import { Console } from '@woowacourse/mission-utils';
import RandomPick from './RandomPick';
import Input from './Input';
import AnswerCheck from './AnswerCheck';

class App {
  async play() {
    let correctAnswer;
    let answer;
    let answerCheck;

    Console.print('숫자 야구 게임을 시작합니다.');
    correctAnswer = RandomPick();
    
    while(true){
      answer = await Input();
      answerCheck = AnswerCheck(correctAnswer, answer);
    }
  }
}

export default App;
