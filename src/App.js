import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computerNum = '';
    this.boolCnt = 0;
    this.strikeCnt = 0;
  }

  static get BALL(){
    return '볼';
  }

  static get STRIKE(){
    return '스트라이크';
  }
  
  static get NOTHING(){
    return '낫싱';
  }
  
  static get REGEX_THREE_DIGIT(){
    return /^(?!.*(.).*\1)[1-9]{3}$/;
  }

  static get REGEX_ONE_DIGIT(){
    return /^[12]$/;
  }

  createRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }  
    this.computerNum = computer.join(''); 
  }

  initCntValues(){
    this.boolCnt = this.strikeCnt = 0;
  }
  
  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  printEnd() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }

  checkUserNum(userNum) {
    if (App.REGEX_THREE_DIGIT.test(userNum)) return true;
    throw new Error('[ERROR] 입력은 각 자리수가 1~9인 3자리 숫자여야 하며, 각 자리수의 숫자는 겹치지 않아야 합니다. 또한 공백 입력은 허용되지 않습니다.');
  }

  checkRestartNum(restartNum) {
    if (App.REGEX_ONE_DIGIT.test(restartNum)) return true;
    throw new Error('[ERROR] 입력은 숫자 1 또는 2여야 합니다. 또한 공백 입력은 허용되지 않습니다.');
  }

  calculateResult(userNum) {
    this.initCntValues(); 

    userNum.split('').forEach((digit, idx) => {
      if (this.computerNum.includes(digit)) { 
        if (digit === this.computerNum[idx]) this.strikeCnt++;
        else this.boolCnt++;
      }
    });
  }

  printResult() {
    if (this.boolCnt === 0 && this.strikeCnt === 0) {
      MissionUtils.Console.print(App.NOTHING);
    } 
    else if (this.boolCnt === 0) {
      MissionUtils.Console.print(this.strikeCnt + App.STRIKE);
    } 
    else if (this.strikeCnt === 0) {
        MissionUtils.Console.print(this.boolCnt + App.BALL);
    } 
    else { 
      MissionUtils.Console.print(`${this.boolCnt + App.BALL} ${this.strikeCnt + App.STRIKE}`);
    }
  }

  checkRestart(restartNum) {
    return (restartNum === '1');
  }

  checkGameEnd() {
    return (this.strikeCnt === 3);
  }

  async getUserNum() {
    try {
      const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      return userNum;
    } 
    catch (error) {
      throw new Error('[ERROR] 비동기 처리 오류' + error.message);
    }
  }

  async getRestartNum() {
    try {
      const restartNum = await MissionUtils.Console.readLineAsync('');
      return restartNum;
    } 
    catch (error) { 
      throw new Error('[ERROR] 비동기 처리 오류' + error.message);
    } 
  }

  async play() {
    return new Promise(async (resolve, reject) => {
      this.printStart();
      this.createRandomNum();

      while (true) {
        try {
          const userNum = await this.getUserNum();
          if (this.checkUserNum(userNum)) this.calculateResult(userNum); // 여기 체이닝으로?
        } 
        catch (error) {
          MissionUtils.Console.print(error.message);  
          reject(error);    
          return; 
        }

        this.printResult();

        if (this.checkGameEnd()) {
          this.printEnd(); 

          try {
            const restartNum = await this.getRestartNum();
            this.checkRestartNum(restartNum);

            if (this.checkRestart(restartNum)) this.createRandomNum();
            else break;
          } 
          catch (error) {
            MissionUtils.Console.print(error.message);
            reject(error);
            return; 
          }
        }
      }
      resolve(); 
    });
  }
}

if (require.main === module) {
  const app = new App();
  app.play();
}

export default App;