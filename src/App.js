import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.randomNumberList = [];
    this.ball = 0;
    this.strike = 0;
    this.isPlaying = true;
    while (this.randomNumberList.length < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomNumberList.includes(RANDOM_NUMBER))
        this.randomNumberList.push(RANDOM_NUMBER);
    }
  }

  validateInput(input, type) {
    if(type == 'INPUT') {
      if(input.length != 3) throw Error('[ERROR] 3개의 숫자를 입력해주세요')
      if(input.split("").includes('0')) throw Error('[ERROR] 1부터 9까지의 숫자를 입력해주세요')
      if(new Set(input.split("")).size != 3) throw Error('[ERROR] 숫자가 중복되면 안됩니다.')
      if(isNaN(Number(input))) throw Error('[ERROR] 숫자 형식이 잘못되었습니댜.')
    }
    else if(type == 'RESTART'){
      if(input.length != 1) throw Error('[ERROR] 1개의 숫자를 입력해주세요')
      if(!(input == '1' || input == '2')) throw Error('[ERROR] 1 아니면 2를 입력해주세요')
    }
  }

  executeInput(input) {
    let input_list = input.split('').map((data) => Number(data));
    this.ball = 0;
    this.strike = 0;
    for (let i = 0; i < input_list.length; i++) {
      if (this.randomNumberList[i] == Number(input_list[i])) this.strike += 1;
      else if (this.randomNumberList.includes(input_list[i])) this.ball += 1;
    }
  }

  async play() {

    while(this.isPlaying){
      MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
  
      while(this.strike < 3){
        let input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        this.validateInput(input, 'INPUT')
        this.executeInput(input);
        if(this.ball == 0 && this.strike == 0) MissionUtils.Console.print('낫싱')
        else {
          MissionUtils.Console.print(`${this.ball > 0 ? `${this.ball}볼` : ''}${this.ball > 0 && this.strike > 0 ? ' ' : ''}${this.strike > 0 ? `${this.strike}스트라이크` : ''}`);
        }
      }

      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      
      let input = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
      this.validateInput(input, 'RESTART')
      switch (input) {
        case '1':
          this.initialize()
          break;
        case '2':
          this.isPlaying = false;
          break;
        default: 
          break;
      }
    }
  }
}

export default App;
