import { Console } from '@woowacourse/mission-utils';
import RandomPick from './RandomPick';
import Input from './Input';

class App {
  async play() {
    let correctAnswer;
    let answer;

    Console.print('숫자 야구 게임을 시작합니다.');
    correctAnswer = RandomPick();

    while(true){
      answer = await Input();
    }
  }
}

export default App;
