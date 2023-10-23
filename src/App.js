import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.count = '';
    this.input;
    this.countResult;
    this.randomNumber;
  }
  async play() {
    await this.gameStartText();
    await this.getUserInput();
    await this.checkValidInput(this.input);
    console.log(this.input);
    await this.generateRandomNumber();
    console.log(this.randomNumber,"컴퓨터 정답값");
    await this.checkStrikeBall(this.input,this.randomNumber);
  }

  

  async gameStartText() {
    return MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  // 사용자의 입력값이 유효한 값인지 체크 - 숫자인지, 3자리인지, 중복됬는지
  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync('닉네임을 입력해주세요.');
    this.input = userInput;
    return this.input;
  }

  checkValidInput(input) {
    if (!this.isThreeNumber(input)) {
      throw new Error("Is Not a Number");
    }

    if (!this.isSameNumber(input)) {
      throw new Error("Is Duplicate Input");
    }

    this.input = input.split('').map(Number);
    return this.input;
  }

  isThreeNumber(input) {
    return /[0-9]{3}/g.test(input);
  }

  isSameNumber(input) {
    const checkSame = input.split('').map(Number);
    const compareSame = new Set(checkSame);
    return (checkSame.length === compareSame.size);
  }

  checkStrikeBall(userInput,computerInput){
    console.log("ckeckStrikeBall");
    let strike = this.checkStrike(userInput,computerInput);
    let ball = this.checkBall(userInput,computerInput);
    return { strike, ball }
  }

  checkStrike(userInput, computerInput) {
    let strike = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === computerInput[i]) {
        strike += 1;
      }
      console.log("userInput", userInput[i], "computerInput", computerInput[i]);
    }
    console.log("strike", strike);
    return strike;
  }

  checkBall(userInput, computerInput){
    console.log("checkball");
    let ball = 0;
    for (let i = 0; i < userInput.length; i++){
      for (let j = 0; j < userInput.length; j++) {
        if (i !== j && userInput[i] === computerInput[j]){
          ball += 1;
        }
      }
    }
    console.log("ball",ball);
    return ball;
  }



  generateRandomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.randomNumber = computer;
    return this.randomNumber;
  }


}

export default App;

const start = new App();
start.play();