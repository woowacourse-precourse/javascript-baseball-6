import ComputerNum from '../model/computer_num.js';
import CalculateResult from '../model/calculate_game_result.js';
import PrintGameResult from '../view/print_game_result.js';
import UserNumError from '../../utils/error/user_num_error.js';
import {Console} from '@woowacourse/mission-utils';

class GameManage {
  constructor() {                                                                                                                                                                                                                                                                                                                                                                                             
    this.isResetComputerNum = true;
    this.computerNum = null;  
  }
  
  async printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.inputUserNum();
  }
  async inputUserNum() {
    const USER_NUM = await Console.readLineAsync('숫자를 입력해주세요: ');
    this.checkUserNum(USER_NUM);
  }
  checkUserNum(USER_NUM) {
    const ERROR = new UserNumError(USER_NUM);
    if (!ERROR.userNumNotExist() && !ERROR.userNumNotNumber() &&
        !ERROR.userNumNotThree() && !ERROR.userNumSameNum()) {
        this.createComputerNum(USER_NUM);      
    }
  }
  createComputerNum(USER_NUM) {
    this.computerNum = this.isResetComputerNum 
    ? 
    new ComputerNum().createComputerNum() 
    : 
    this.computerNum; 
    
    this.gameResult(USER_NUM);
  }
  gameResult(USER_NUM) {
    const GAME_RESULT = new CalculateResult(USER_NUM, this.computerNum).gameResult();
    const PRINT_GAME_RESULT = new PrintGameResult(GAME_RESULT);
    if (GAME_RESULT.strike === 3) {
      PRINT_GAME_RESULT.printThreeStrike();
      return this.newGameOrExit();
    }
    PRINT_GAME_RESULT.printNotRight();
    this.gameRestart();
  }
  gameRestart() {
    this.isResetComputerNum = false;
    this.inputUserNum();
  }
  async newGameOrExit() {
    switch(await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')) {
      case '1':
        this.isResetComputerNum = true;
        this.inputUserNum();
        break;
      default:
        return;
    }
  }
}

export default GameManage;