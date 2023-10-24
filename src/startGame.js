import { Console } from '@woowacourse/mission-utils';
import isValidNum from './isValidNum';
import userInput from './userInput';
import reGame from './regame';

export default function startGame(COM_NUM) {
  const USER_INPUT = userInput();

  isValidNum(USER_INPUT);

  if (USER_INPUT === COM_NUM) {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    
    return reGame();
  }
}