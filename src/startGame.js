import { Console } from '@woowacourse/mission-utils';
import isValidNum from './isValidNum';
import userInput from './userInput';
import reGame from './regame';

export default function startGame(COM_NUM) {
  let endGame = false;

  while(endGame) {
    const USER_INPUT = userInput();
  
    isValidNum(USER_INPUT);
  
    if (USER_INPUT === COM_NUM) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      endGame = true;
      
      return reGame();
    }
    
    let strikeCount = 0;
    let ballCount = 0;

    USER_INPUT.forEach((elem, idx) => {
      if (elem === COM_NUM[idx]) {
        return strikeCount += 1;
      }
      if (COM_NUM.includes(elem)) {
        return ballCount += 1;
      }
    });

    if (strikeCount === 0 && ballCount === 0) {
      return Console.print('낫싱');
    }
    if (strikeCount === 0 && ballCount !== 0) {
      return Console.print(`${ballCount}볼`);
    }
    if (strikeCount !== 0 && ballCount === 0) {
      return Console.print(`${strikeCount}스트라이크`);
    }
    if (strikeCount !== 0 && ballCount !== 0) {
      return Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }
}