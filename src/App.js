const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
}

const ERROR_MESSAGE = {
  LENGTH: "[ERROR] 세 자리 숫자만 입력해야합니다.",
  INT: "[ERROR] 정수만 입력해야합니다.",
  NEGATIVE: "[ERROR] 양수만 입력해야합니다.",
}
class App {
  constructor(){
    this.randomNumber = [];
    this.userInput = [];

    this.validation = {
      isLenThree: (input) => input.length === 3,
      isInt: (input) => Number.isInteger(+input),
      isNegative: answer => Math.sign(answer) === -1,
    }
  }

  async play() {
    this.printStartNotification();
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
  }

  validateInput(input){
    const { isLenThree, isInt, isNegative } = this.validation;
    if(!isLenThree(input)) throw new Error(ERROR_MESSAGE.LENGTH);
    else if(!isInt(input)) throw new Error(ERROR_MESSAGE.INT);
    else if(!isNegative(input)) throw new Error(ERROR_MESSAGE.NEGATIVE);
  }
}

const app = new App();
app.play();

export default App;
