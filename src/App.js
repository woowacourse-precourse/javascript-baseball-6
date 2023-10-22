import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor(){
    this.count = '';
    this.input;
    this.countResult;
  }
  async play() { 
    await this.getUserInput();
    await this.checkInput(this.input);
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync('닉네임을 입력해주세요.');
    this.input = userInput;
    return this.input;
  }

  checkInput(input){
    if (!this.isThreeNumber(input)) {
      throw new Error("Is Not a Number");
    }
    if (!this.isSameNumber(input)){
      throw new Error("Is Duplicate Input");
    }
  }

  isThreeNumber(input){
    return /[0-9]{3}/g.test(input);
  }

  isSameNumber(input){
    const checkSame = input.split('').map(Number);
    const compareSame = new Set(checkSame);
    return (checkSame.length === compareSame.size);
  }
}

export default App;

const start = new App();
start.play();