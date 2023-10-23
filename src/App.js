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
  LENGTH: '[ERROR] 세 자리 숫자만 입력해야합니다.',
  INT: '[ERROR] 1부터 9사이의 숫자만 입력해야합니다.',
  UNIQUE: '[ERROR] 1부터 9사이의 숫자가 하나씩 있어야합니다.',
  NEGATIVE: '[ERROR] 양수만 입력해야합니다.',
  RESTART: '[ERROR] 숫자가 잘못된 형식입니다.',
}

const REGEX = /^[1-9]+$/;

class App {
  constructor(){
    this.randomNumber = [];
    this.userStringInput = '';
    this.userInput = [];
    this.gameResults = {};
  }

  async play() {
    Console.print(MESSAGE.START);
    this.generateRandomNumber();
    await this.getUserInput();
  }
  
  generateRandomNumber(){
    const numberArr = [];
    
    while(numberArr.length < 3){
      const number = Random.pickNumberInRange(1, 9);
      if(!numberArr.includes(number)) numberArr.push(number);
    }

    this.randomNumber = [...numberArr];
  }

  async getUserInput(){
    const input = await Console.readLineAsync(MESSAGE.INPUT);
    this.userStringInput = input;
    this.validateInput();
    this.userInput = [...input].map(Number);

    this.getResult();
    this.printResult();

    const { strike } = this.gameResults;
    if(strike === 3) await this.restart();
    else this.getUserInput();
  }

  validateInput(){
    const { userStringInput } = this;
    const uniqueArr = [...new Set([...userStringInput])];

    if(userStringInput.length !== 3) throw new Error(ERROR_MESSAGE.LENGTH);
    if(!REGEX.test(userStringInput)) throw new Error(ERROR_MESSAGE.INT);
    if(userStringInput.length !== uniqueArr.length) throw new Error(ERROR_MESSAGE.UNIQUE);
    if(Math.sign(userStringInput) !== 1) throw new Error(ERROR_MESSAGE.NEGATIVE);
  }

  getResult(){
    const { userInput } = this;
    const { randomNumber } = this;
    const result = { strike: 0, ball: 0};

    userInput.forEach((num, idx)=> {
      if(randomNumber[idx] === num) result.strike += 1;
      if(randomNumber[idx] !== num && randomNumber.includes(num)) result.ball += 1;
    })
  
    this.gameResults = result;
  }

  printResult(){
    const { strike, ball } = this.gameResults;
    
    if(ball === 0 && strike === 0) Console.print(`낫싱`);
    if(ball > 0 && strike > 0) Console.print(`${ball}볼 ${strike}스트라이크`);
    if(ball > 0 && strike === 0) Console.print(`${ball}볼`);
    if(strike > 0 && ball === 0) Console.print(`${strike}스트라이크`);
  }

  async restart(){
    Console.print(MESSAGE.FINISH);
    Console.print(MESSAGE.RESTART);
    const input = await Console.readLineAsync('');

    if(input === '1') await this.play();
    if(input === '2') Console.print(MESSAGE.END);
    if(input !== '1' && input !== '2') throw new Error(ERROR_MESSAGE.RESTART);
  }
}

const app = new App();
app.play();

export default App;
