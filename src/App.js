import {MissionUtils} from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.init();
  }

  init() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNum = this.randomPickNum();
  }

  randomPickNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  
  isValidUserNum(userNum) {
    const userPickNum = userNum.split('');
    const computerPickNum = this.computerNum.join('').split('');
    if(userPickNum.length !== 3 ) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    if(userPickNum[0] === userPickNum[1] || userPickNum[1] === userPickNum[2] || userPickNum[2] === userPickNum[3]) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    userPickNum.forEach((idx) => {
      if(isNaN(Number(idx))) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    })
    return this.checkStrikeBall(computerPickNum, userPickNum);
  }

  countStrike(computerPickNum, userPickNum) {
    let strikes = 0;
    for(let i = 0; i < computerPickNum.length; i ++) {
      if(computerPickNum[i] === userPickNum[i]) {
        strikes++
      }
    }
    return strikes;
  }

  countBall(computerPickNum, userPickNum) {
    let balls = 0;
    for(let i = 0; i < computerPickNum.length; i ++) {
      if((computerPickNum[i] !== userPickNum[i]) && (userPickNum.includes(computerPickNum[i]))) {
        balls++
      }
    } 
    return balls;
  }

  checkStrikeBall(computerPickNum, userPickNum) {
    const strike = this.countStrike(computerPickNum, userPickNum);
    const ball = this.countBall(computerPickNum, userPickNum);
    return this.printResult(strike, ball);
  }

  printResult(strike, ball) {
    if(strike === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.startOrEnd();
    }else{
      if(strike === 0 && ball === 0) {
        MissionUtils.Console.print('낫싱');
      }else if(strike === 0 && ball !== 0) {
        MissionUtils.Console.print(`${ball}볼`);
      }else if(strike !== 0 && ball === 0){
        MissionUtils.Console.print(`${strike}스트라이크`);
      }else if(strike !== 0 && ball !== 0){
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      }
      return this.play();
    }   
  }

  async startOrEnd() {
    const answer = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n');
      if(answer === '1') {
        this.computerNum = this.randomPickNum();
        return await this.play();
      }else if(answer === '2') {
        MissionUtils.Console.print('게임 종료');
      }else{
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
  }

  async numCorrect() {
    const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    this.isValidUserNum(userNum)
  }
  
  async play() {
    await this.numCorrect();
  }
}

const app = new App();
app.play();

export default App;

