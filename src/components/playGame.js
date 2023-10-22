import { MissionUtils } from "@woowacourse/mission-utils";
import setNumber from './setNumber';
import {compareNumber, isDuplicate} from './compareNumber';

const COMPUTER_NUMBER = setNumber();

const playGame = () => {  
  let USER_NUMBER = Console.readLine('숫자를 입력해주세요.', (answer) => {
    console.log(`입력한 숫자: ${answer}`);
  }); 


  if (USER_NUMBER==``){
    throw new Error(`아무것도 입력되지 않았습니다.`);
  } else if (USER_NUMBER.length >= 4){
    get('#user-input').value = null;
    throw new Error(`3자리수 숫자를 입력하세요.`);
  } else if (!isDuplicate(USER_NUMBER)){
    throw new Error(`입력하신 ${USER_NUMBER}엔 중복 숫자가 있습니다.`);
  } else {
    console.print(`입력하신 숫자는 ${USER_NUMBER}입니다.`)
  }
  compareNumber(COMPUTER_NUMBER, USER_NUMBER);
}
 
export { playGame, resultState, resultBall } 