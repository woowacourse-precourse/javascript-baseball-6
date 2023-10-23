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

    while (true) {
      await this.getUserInput();
      await this.checkValidInput(this.input);
      console.log(this.input);
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
  }

  async retry() {
    this.input = '';
    await this.getUserInput();
    await this.checkValidInput(this.input);
    console.log(this.input);
    await this.checkStrikeBall(this.input, this.randomNumber);
    this.countResult = this.checkStrikeBall(this.input, this.randomNumber);
    await this.printHintMessage(this.countResult);
    console.log(this.countResult.strike, "스트라이크가 3개가 나오고 종료되는지 확인을 위한 코드");
  }

  async replay(){
    const userResponse =  await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    console.log("사용자의 재도전 응답 여부",userResponse);
    if (Number(userResponse) === 1){
      this.input = '';
      this.countResult = '';
      this.play();
    }
    if (Number(userResponse) === 2){
      console.log("하기 싫어");
      process.exit();
    }
    if (Number(userResponse) !== (1 || 2)){
      throw new Error("올바른 값을 입력해주세요");
    }
  }

  printGameWinMessage(){
    console.log("3개의 숫자를 모두 맞히셨습니다.");
  }
  
  //힌트 제공 기능 - 스트라이크 개수와 볼 개수 출력 {strike, ball} 가져와 표현
  printHintMessage(input) {
    console.log("힌트 제공을 위한 스트라이크 개수 확인",input);
    if (input.strike === 0 && input.ball === 0){
      console.log("낫싱");
    }
    if (input.strike === 3){
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }

    // 스트라이크가 1 ~ 2개 존재하고 볼은 0개가 아닐때
    if ((input.strike !== 0) && input.ball !== 0){
      console.log(`${this.countResult.ball}볼 ${this.countResult.strike}스트라이크`);
    }

    if ((input.strike !== 0) && input.ball === 0){
      console.log(`${input.strike}스트라이크`);
    }

    if ((input.strike === 0) && input.ball !== 0) {
      console.log(`${input.ball}볼`);
    }
  }

  // 게임 시작 알리는 문구
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