import {MissionUtils} from '@woowacourse/mission-utils';

// 숫자 입력 예외 처리하기 
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
    if(userNum.length !== 3 ) {
      return false
    }
    if(userNum.charAt(0) === userNum.charAt(1) || userNum.charAt(1) === userNum.charAt(2) || userNum.charAt(2) === userNum.charAt(0)) {
      return false
    }
    if(!/^[1-9]{3}$/.test(userNum)) {
      return false
    }
    return true
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

  async numCorrect() {
    try {
      const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      if(this.isValidUserNum(userNum)) {
        const userPickNum = userNum.split('');
        const computerPickNum = this.computerNum.join('').split('');
        this.checkStrikeBall(computerPickNum, userPickNum);

      }else{
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    }catch(e) {
      console.log(e.message);
    }
  }
  
  async play() {
    this.numCorrect();
  }
}

const app = new App();
app.play();

export default App;

