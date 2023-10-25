import { MissionUtils } from '@woowacourse/mission-utils'

class App {

  constructor(){
    this.strikeCount = 0;
    this.ballCount = 0;
    this.randomArr = [];
    this.inputArr = [];
  }

  async play() {
    
    await this.gameStart();

    }

  async gameStart(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomArray();

    while (true) {
      
      this.initializeCount();
      let array = await this.createUserArray();
      let isError = await this.errorCheck(array);
      if (isError) {
        throw new Error("[ERROR] 숫자는 서로다른 3자리로 입력해야합니다.");

      }
      this.isStrike(this.inputArr);
      this.isBall(this.inputArr, this.randomArr);
      this.printResult();
  
      if (this.strikeCount == 3) {
        let restartInput = await this.restartChoice();

        if (restartInput == 2){
          MissionUtils.Console.print("게임 종료");
          break;
        } else {
          this.createRandomArray();
        }

        if (restartInput != 1 && restartInput != 2) {
          throw new Error("[ERROR] 1 또는 2만 입력 가능합니다.");
        }
      }
    }}
    
  createRandomArray(){
      this.randomArr = [];

      while(this.randomArr.length < 3) {
        let randomNum = MissionUtils.Random.pickNumberInRange(1,9);
    
        if (!this.randomArr.includes(randomNum)){
          this.randomArr.push(randomNum);
        }
      }
  
      MissionUtils.Console.print(this.randomArr);
    }
  
    async createUserArray() {
      try {
        let inputNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        
        return Promise.resolve(inputNum);

      } catch (e) {
        await MissionUtils.Console.print(e.message);
      }
    }

    async errorCheck(inputNum) {
        if (inputNum.toString().length !== 3) {
          return true;

        } else {
          for (let i of inputNum){
            this.inputArr.push(Number(i));
          }
          return false;
        }

      } 
  
    initializeCount(){
      this.strikeCount = 0;
      this.ballCount = 0;
      this.inputArr = [];
    }
  
    isStrike(inputArr){
      for (let i=0; i<3; i++){
        if (inputArr[i] === this.randomArr[i]){
          this.strikeCount += 1;
        }
      }
  }
  
  isBall(inputArr, randomArr){
    for (let j=0; j<3; j++){
      if (this.randomArr.includes(inputArr[j]) && randomArr[j] !== inputArr[j]){
        this.ballCount += 1; 
  }
  }}
  
  async printResult(){
    if (this.strikeCount && this.ballCount){
      MissionUtils.Console.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`);
    } else if (this.strikeCount){
      MissionUtils.Console.print(`${this.strikeCount}스트라이크`)
    } else if (this.ballCount){
      MissionUtils.Console.print(`${this.ballCount}볼`)
    } else {
      MissionUtils.Console.print('낫싱')
    }
  
  }
  
  async restartChoice(){
    let userChoice = await MissionUtils.Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

    return Promise.resolve(userChoice);
    } 
  
  }

const app = new App();
app.play();

export default App;
