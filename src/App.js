import { Console } from '@woowacourse/mission-utils';
import RandomPick from './RandomPick.js';
import Input from './Input.js';
import AnswerCheck from './AnswerCheck.js';
import Restrat from './Restart.js'

class App {
  async play() {
    let correctAnswer;
    let answer;
    let answerCheck;
    let restart;
    
    Console.print('숫자 야구 게임을 시작합니다.');
    correctAnswer = RandomPick();
    
    while (true) {
      answer = await Input();
      answerCheck = AnswerCheck(correctAnswer, answer);

      if (answerCheck === 1) {
        restart = await Restrat();

        if (restart === 1) {
          correctAnswer = RandomPick();
        } else if (restart === 2) {
          Console.print('게임 종료');
          return;
        } else {
          throw new Error('잘못된 입력입니다.');
        }
      }
    }
  }
}

export default App;
