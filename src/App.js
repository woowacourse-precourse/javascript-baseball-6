const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  FINISH: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  END: '게임이 종료되었습니다.'
}

const ERROR_MESSAGE = {
  ERROR: '[ERROR] 세 자리 숫자만 입력해야합니다.',
  RESTART: '[ERROR] 숫자가 잘못된 형식입니다.',
}

class App {
  constructor(){
    this.randomNumber = [];
    this.userInput = [];
    this.gameResults = {
      ball: 0,
      strike: 0,
    };

    this.validation = {
      isLenThree: (input) => input.length === 3,
      isInt: (input) => Number.isInteger(+input),
      isNegative: answer => Math.sign(answer) === -1,
    }

    this.compare = {
      isStrike: ((num, idx) => this.randomNumber[idx] === num),
      isBall: ((num, idx) =>  this.randomNumber[idx] !== num && this.randomNumber.includes(num)),
    }
  }

  async play() {
    this.printStartNotification();
    await this.start();
  }

  async start(){
    this.generateRandomNumber();
    await this.getUserInput();
  }

  printStartNotification(){
    Console.print(MESSAGE.START);
  }
  
  generateRandomNumber(){
    const { randomNumber } = this;
    while(randomNumber.length < 3){
      const number = Random.pickNumberInRange(1, 9);
      if(!randomNumber.includes(number)) randomNumber.push(number);
    }
    // Console.prit(randomNumber); [1,3,5]
  }

  async getUserInput(){
    const input = await Console.readLineAsync(MESSAGE.INPUT);
    this.validateInput(input);

    this.userInput = [...input];
    this.getResult();
    this.printResult();
  }

  validateInput(input){
    const { isLenThree, isInt } = this.validation;
    if(!isLenThree(input) || !isInt(input)) throw new Error(ERROR_MESSAGE.ERROR);
  }

  getResult(){
    const { gameResults } = this;
    const { isStrike, isBall } = this.compare;

    this.userInput.forEach((num, idx)=> {
      if(isStrike(num, idx)) gameResults.strike = gameResults.strike += 1;
      if(isBall(num, idx)) gameResults.ball = gameResults.ball +=  1;
    })
  }

  printResult(){
    const { strike, ball } = this.gameResults;
    
    if(strike === 0 && ball === 0) Console.print('낫싱');
    if(ball > 0 && strike > 0)  Console.print(`${ball}볼 ${strike}스트라이크`);
    if(ball > 0 && strike === 0) Console.print(`${ball}볼`);
    if(strike > 0 && ball === 0) Console.print(`${strike}스트라이크`);

    if(strike === 3) Console.print(MESSAGE.FINISH);
  }
}

const app = new App();
app.play();

export default App;
