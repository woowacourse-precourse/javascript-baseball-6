import { Console, Random } from "@woowacourse/mission-utils";

class App {

  async play() {
    Console.print(`숫자 야구 게임을 시작합니다.`)
    const RAN = this.ranNumber();
    await this.myNumber(RAN);
  }

  ranNumber(){
    let COMPUTER = [];
    while (COMPUTER.length < 3) {
      let NUMB = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMB)) {
        COMPUTER.push(NUMB);
      }
    }
    return COMPUTER;
  }

  async myNumber (RAN){
    let MY_NUM = await Console.readLineAsync('숫자를 입력해주세요 :');
    await this.gameStart(RAN,MY_NUM.split('').map(Number));
  }

  async gameStart(RAN,MY_NUM){
    for(let I=0;I<MY_NUM.length;I++){
      if(MY_NUM[I] === 0) {
        throw new Error('[ERROR] 0이 포함되어 있습니다.');
      }
    }
    if(this.doubleNumber === true){
      throw new Error('[ERROR]같은 숫자가 포함되어 있습니다.')
    }
    if(MY_NUM.length !== 3){
      throw new Error("[ERROR] 3자리 숫자를 입력하세요.");
    }

    let STRIKE = [];
    let BALL = [];
    for (let i = 0; i < MY_NUM.length; i++) {
      if (MY_NUM[i] === RAN[i]) {
        STRIKE.push(MY_NUM[i]);
      } else if (RAN.includes(MY_NUM[i])) {
        BALL.push(MY_NUM[i]);
      }
    }
    this.printCheck(STRIKE.length,BALL.length);

    if(STRIKE.length ===3){
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      await this.gameset();
    } else if(STRIKE.length !==3){
      await this.myNumber(RAN);
    }
  }

  doubleNumber(MY_NUM){
    const NUMBER_SET = new Set(MY_NUM)
    if(NUMBER_SET.length === 3){
      return false;
    }
    return true;
  }

  printCheck(STRIKES,BALLS){
    if(STRIKES===0 && BALLS === 0){
      Console.print(`낫싱`);
    } else if(STRIKES!==0 && BALLS !==0){
      Console.print(`${BALLS}볼 ${STRIKES}스트라이크`);
    } else if(STRIKES!==0 && BALLS ===0){
      Console.print(`${STRIKES}스트라이크`);
    } else if(STRIKES===0 && BALLS !==0){
      Console.print(`${BALLS}볼`);
    }
  }

  async gameset(){
    let SET_NUM = await Console.readLineAsync(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
    if(SET_NUM==='1'){
      await this.play();
    } else if(SET_NUM==='2'){
      return;
    } else if(SET_NUM !=='1' && SET_NUM!=='2'){
      throw new Error('[ERROR]1 또는 2를 입력하세요')
    }
  }
} 

export default App;
