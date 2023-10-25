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
    }
  }
}

export default GameManage;