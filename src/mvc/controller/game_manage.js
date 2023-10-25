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
  }
}

export default GameManage;