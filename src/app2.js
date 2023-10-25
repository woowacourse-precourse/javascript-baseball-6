import { Random, Console } from "@woowacourse/mission-utils";
class App {

  async play() {
    try {
      const GOAL = await this.getComNum();
      await this.tryPlay(GOAL)
    } catch (error) {
      Console.print(`에러 발생: ${error.message}`);
      await this.play()
    }

  }

  async getComNum() {
    const GOAL = [];
    while (GOAL.length < 3) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      if (!GOAL.includes(RANDOM_NUMBER)) {
        GOAL.push(RANDOM_NUMBER);
      }
    }
    return GOAL;
  }
  async tryPlay(GOAL) {
    let number = await this.getUserNum(GOAL);

    if(number === 0) {
      await this.tryPlay(GOAL)
    }else{
      await this.compare(GOAL, number);
    }
  }
  async checkNum(number) {
    console.log(typeof(number))
    for(let i=0; i<number.length; i++){
      if (isNaN(number[i]) || number[i] < 1 || number[i] > 9) {
        Console.print("1부터 9까지의 숫자만 입력하세요.");
        return false;
      }
    }
    const checkLen = await this.checkLen(number);
    return checkLen;
  }
  async checkLen(number){
    const EXIST = new Set();

    for (const digit of number) {
      EXIST.add(digit);
    }

    if(EXIST.size === 3 && number.length === 3){
      return true;
    }else{
      Console.print(`${number} 의 길이가 3 이 아니거나 중복숫자가 있습니다. ${EXIST.size}`);
      return false;
    }
  }
  async getUserNum(GOAL) {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const inputArray = input.split('')

    const numberArray = inputArray.map((item)=>(Number(item)));
    console.log(numberArray)
    const check = await this.checkNum(numberArray);

    if(!check){
      this.getUserNum(GOAL);
    }
    else{
      this.compare(GOAL,numberArray);
    }

  }
  async userWin(){
    
    const restart = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

    if(restart==='1'){
      this.play();
    }else if(restart==='2'){
      return 0;
    }else{
      Console.print("1 또는 2 를 입력해 주세요.")
      this.userWin();
    }
  }
  async compare(GOAL, number){
    let strike = 0;
    let ball = 0;

    for(let i=0; i<GOAL.length; i++){
      if(GOAL[i]===number[i]){
        strike++;
      }else{
        for(let j=0; j<number.length; j++){
          if(GOAL[i] === number[j]){
            ball++;
          }
        }
      }
    }

    console.log(GOAL)
    console.log(number)
    console.log(strike)
    console.log(ball)

    if(strike===3){
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      this.userWin();
    }else{
      this.getUserNum(GOAL);
    }
  }
}


const app = new App;

Console.print("숫자 야구 게임을 시작합니다.")
app.play();


export default App;



/** const EXIST = new Set();

      for (const digit of number) {
        EXIST.add(digit);
      }

      if (EXIST.size !== 3 || number.length > 3) {
        Console.print(`${number} 의 길이가 3 이 아니거나 중복숫자가 있습니다. ${EXIST.size}`);
        throw new Error("유저가 입력한 숫자가 포맷을 벗어남");
      } */