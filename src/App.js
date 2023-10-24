import { MissionUtils } from "@woowacourse/mission-utils";
class Game {
  constructor() {
    this.COUNT = [0, 0, 0];
    this.RANDOM_ARR = [];
  }

  //시작 문구 출력
  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  //랜덤 숫자 생성
  setRandomNumber() {
    this.RANDOM_ARR = [];
    while (this.RANDOM_ARR.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if (!this.RANDOM_ARR.includes(number)) {
        this.RANDOM_ARR.push(number);
      }
    }
  }
  //유저 입력값 받아오기 및 게임 수행
  async getUserInput() {
    try{
      this.COUNT = [0, 0, 0];
      this.USER_ANSWER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. : ');
      if(this.USER_ANSWER.split('').filter((el,index,arr) => arr.indexOf(el) === index).length != 3) {
        throw ("[ERROR] ");
      }
      else if(this.USER_ANSWER.length == 3 && isNaN(this.USER_ANSWER) !== true){
        this.compareNumber();
        this.printResult();
      }
      else{
        throw ('[ERROR] 3자리 숫자를 입력해주세요.');
      } 
    }
    catch(error) {
      return Promise.reject(new Error('[ERROR] 숫자 입력 오류'));
    }
  }

  //숫자 비교
  compareNumber() {
    const USER_INPUT = this.USER_ANSWER.split('');
    const TEMP = [];
    for(let i = 0; i < this.RANDOM_ARR.length; i++) {
      TEMP.push(this.RANDOM_ARR.indexOf(Number(USER_INPUT[i])));
      if( TEMP[i] < 0 ) {
        this.COUNT[2] += 1; // 숫자가 없는 경우
      }
      else if( TEMP[i] !== i) {
        this.COUNT[1] += 1; // 숫자와 자리가 일지하지 않는 경우
      }else {
        this.COUNT[0] += 1; // 숫자와 자리가 일치하는 경우
      }
    }
  }

  //결과 출력
  printResult() {
    if(this.COUNT[0] > 0  && this.COUNT[1] == 0 && this.COUNT[0] < 3) {
      MissionUtils.Console.print(`${this.COUNT[0]}스트라이크`);
      this.getUserInput();
    }
    else if(this.COUNT[0] == 0 && this.COUNT[1] > 0) {
      MissionUtils.Console.print(`${this.COUNT[1]}볼`);
      this.getUserInput();
    }
    else if(this.COUNT[0] > 0 && this.COUNT[1] > 0) {
      MissionUtils.Console.print(`${this.COUNT[1]}볼 ${this.COUNT[0]}스트라이크`);
      this.getUserInput();
    }
    else if(this.COUNT[2] == 3) {
      MissionUtils.Console.print("낫싱");
      this.getUserInput();
    }
    else if(this.COUNT[0] == 3) {
      MissionUtils.Console.print(`${this.COUNT[0]}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      this.restart();
    }
  }

  //재시작
  async restart() {
    try {
      this.RESTART = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n');
      if(this.RESTART == 1) {
        this.setRandomNumber();
        this.getUserInput();
      }
      else if(this.RESTART == 2) {
        resolve();
      }
      else {
        return Promise.reject(new Error('[ERROR] 재시작 오류'));
      }
    }
    catch(e){
      return e;
    }
  }
}

class App {
  async play() {
    try {
      const game = new Game();
      game.start();
      game.setRandomNumber();
      await game.getUserInput();
    }
    catch(e) {
      return Promise.reject(new Error('[ERROR] 게임 시작 오류'));
    }
  }
}

export default App;
