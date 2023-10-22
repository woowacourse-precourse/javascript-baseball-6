import setNumber from './setNumber.js';
import {compareNumber, isDuplicate, isCorrect} from './compareNumber.js';
import { get } from '../Utils.js';

const COMPUTER_NUMBER = setNumber();
const resultState = get('.result-state');

const playGame = (e) => {  
  let USER_NUMBER = get('#user-input').value;

  if (USER_NUMBER==""){
    resultState.innerText =`아무것도 입력되지 않았습니다.`;
    throw new Error("아무것도 입력되지 않았습니다.");
  } else if (USER_NUMBER.length >= 4){
    resultState.innerText =`3자리수 숫자를 입력하세요`
    get('#user-input').value = null;
    throw new Error("3자리수 숫자를 입력하세요.");
  } else if (!isDuplicate(USER_NUMBER)){
    resultState.innerText =`입력하신 ${USER_NUMBER}엔 중복 숫자가 있습니다.`;
    throw new Error(`입력하신 ${USER_NUMBER}엔 중복 숫자가 있습니다.`);
  } else {
    resultState.innerText =`입력하신 숫자는 ${USER_NUMBER}입니다.`;
  }
}
 
export default playGame