import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

export const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  FINISH: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  END: '게임이 종료되었습니다.'
}

export const ERROR_MESSAGE = {
  LENGTH: '[ERROR] 세 자리 숫자만 입력해야합니다.',
  INT: '[ERROR] 1부터 9사이의 숫자만 입력해야합니다. (문자 X)',
  UNIQUE: '[ERROR] 1부터 9사이의 숫자가 하나씩 있어야합니다.',
  RESTART: '[ERROR] 숫자가 잘못된 형식입니다.',
}

const INPUT = {
  RESTART: '1',
  END: '2',
}

const REGEX = /^[1-9]+$/;

class App {
  constructor(){
    this.randomNumber = [];
    this.userStringInput = '';
    this.userInput = [];
    this.gameResults = {};

    this.validate = {
      isLenThree: (input) => input.length === 3,
      isInt: (input) => REGEX.test(input),
      isUnique: (input) => {
        const uniqueArr = [...new Set([...input])];
        return input.length === uniqueArr.length;
      },
    }
    this.compare = {
      isStrike: (num, idx) => {
        const { randomNumber } = this;
        return randomNumber[idx] === num
      },
      isBall: (num, idx) => {
        const { randomNumber } = this;
        return randomNumber[idx] !== num && randomNumber.includes(num)
      },
    }
  }

  async play() {
    Console.print(MESSAGE.START);
    this.generateRandomNumber();
    await this.start();
  }

  async start(){
    await this.getUserInput();
    this.validateInput();
    this.setUserInput();
    this.getResult();
    this.printResult();

    const { strike } = this.gameResults;
    if(strike === 3) await this.wantToReplay();
    else await this.start();
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
  }

  setUserInput(){
    const { userStringInput } = this;
    this.userInput = [...userStringInput].map(Number);
  }

  validateInput(){
    const { userStringInput } = this;
    const { isLenThree, isInt, isUnique } = this.validate;

    if(!isLenThree(userStringInput)) throw new Error(ERROR_MESSAGE.LENGTH);
    if(!isInt(userStringInput)) throw new Error(ERROR_MESSAGE.INT);
    if(!isUnique(userStringInput)) throw new Error(ERROR_MESSAGE.UNIQUE);
  }

  getResult(){
    const { userInput } = this;
    const { isStrike, isBall } = this.compare;
    const result = { strike: 0, ball: 0};

    userInput.forEach((num, idx)=> {
      if(isStrike(num, idx)) result.strike += 1;
      if(isBall(num, idx)) result.ball += 1;
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

  async wantToReplay(){
    Console.print(MESSAGE.FINISH);
    Console.print(MESSAGE.RESTART);
    const input = await Console.readLineAsync('');

    if(input === INPUT.RESTART) await this.play();
    if(input === INPUT.END) Console.print(MESSAGE.END);
    if(input !== INPUT.RESTART && input !== INPUT.END) throw new Error(ERROR_MESSAGE.RESTART);
  }
}

const app = new App();
app.play();

export default App;
