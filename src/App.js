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
    await this.generateRandomNumber();
    console.log("컴퓨터 정답값", this.randomNumber);
    await this.getUserInput();
    await this.checkValidInput(this.input);
    await this.checkStrikeBall(this.input, this.randomNumber);
    this.countResult = this.checkStrikeBall(this.input, this.randomNumber);
    await this.printHintMessage(this.countResult);

    if (this.countResult.strike !== 3) {
      await this.retry();
    } 

    if (this.countResult.strike === 3) {
      await this.printGameWinMessage();
      await this.replay();
    }
    
  }

  // 왜 while로 안하면 2번에 끊기는지 이해하기 
  async retry() {
    while (this.countResult.strike !== 3) {
      this.input = '';
      await this.getUserInput();
      await this.checkValidInput(this.input);
      await this.checkStrikeBall(this.input, this.randomNumber);
      this.countResult = this.checkStrikeBall(this.input, this.randomNumber);
      await this.printHintMessage(this.countResult);
    }
  }

  async replay(){
    const userResponse =  await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (Number(userResponse) === 1){
      this.input = '';
      this.countResult = '';
      this.play();
    }
    if (Number(userResponse) === 2){
      process.exit();
    }
    if (Number(userResponse) !== (1 || 2)){
      throw new Error("올바른 값을 입력해주세요");
    }
  }

  printGameWinMessage(){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
  
  //힌트 제공 기능 - 스트라이크 개수와 볼 개수 출력 {strike, ball} 가져와 표현
  printHintMessage(input) {
    if (input.strike === 0 && input.ball === 0){
      MissionUtils.Console.print("낫싱");
    }

    if ((input.strike !== 0) && input.ball !== 0){
      MissionUtils.Console.print(`${this.countResult.ball}볼 ${this.countResult.strike}스트라이크`);
    }

    if ((input.strike !== 0) && input.ball === 0){
      MissionUtils.Console.print(`${input.strike}스트라이크`);
    }

    if ((input.strike === 0) && input.ball !== 0) {
      MissionUtils.Console.print(`${input.ball}볼`);
    }
  }

  // 게임 시작 알리는 문구
  async gameStartText() {
    return MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  // 사용자의 입력값이 유효한 값인지 체크 - 숫자인지, 3자리인지, 중복됬는지
  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
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

  // 스트라이크 볼 체크 기능 구현
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