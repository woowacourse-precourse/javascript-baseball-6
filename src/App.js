import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.count = '';
    this.input;
    this.countResult;
    this.randomNumber;
    this.gameCount = 0;
  }
  async play() {
    
    this.gameStartText();
    this.generateRandomNumber();

    await this.getUserInput();
    this.checkValidInput(this.input);
    this.countResult = this.checkStrikeBall(this.input, this.randomNumber);
    this.printHintMessage(this.countResult);

    while (this.countResult.strike !== 3) {
      await this.retry();
    } 

    if (this.countResult.strike === 3) {
      this.printGameWinMessage();
      await this.replay();
    }
  }

  async retry() {
      this.input = '';
      await this.getUserInput();
      this.checkValidInput(this.input);
      this.checkStrikeBall(this.input, this.randomNumber);
      this.countResult = this.checkStrikeBall(this.input, this.randomNumber);
      this.printHintMessage(this.countResult);
    }

  async replay(){
    const userResponse =  await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (Number(userResponse) === 1){
      this.input = '';
      this.countResult = '';
      this.play();
    }
    if (Number(userResponse) === 2){
      return 
    }
  }

  printGameWinMessage(){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
  
  printHintMessage(input) {
    if (input.strike === 0 && input.ball === 0){
      MissionUtils.Console.print("낫싱");
    }

    if ((input.strike !== 0) && input.ball !== 0){
      MissionUtils.Console.print(`${input.ball}볼 ${input.strike}스트라이크`);
    }

    if ((input.strike !== 0) && input.ball === 0){
      MissionUtils.Console.print(`${input.strike}스트라이크`);
    }

    if ((input.strike === 0) && input.ball !== 0) {
      MissionUtils.Console.print(`${input.ball}볼`);
    }
  }

  gameStartText() {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async getUserInput() {
    this.input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  checkValidInput(input) {
    if (!this.isThreeNumber(input)) {
      throw new Error("[ERROR]: 1부터 9까지의 숫자 3자리를 입력해 주세요.");
    }
    if (!this.isSameNumber(input)) {
      throw new Error("[ERROR]: 중복된 수 입니다.");
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
    }
    return strike;
  }

  checkBall(userInput, computerInput){
    let ball = 0;
    for (let i = 0; i < userInput.length; i++){
      for (let j = 0; j < userInput.length; j++) {
        if (i !== j && userInput[i] === computerInput[j]){
          ball += 1;
        }
      }
    }
    return ball;
  }

  // 컴퓨터의 랜덤 정답값 기능 구현
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
