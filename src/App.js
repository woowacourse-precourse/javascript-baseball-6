import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let RESTART;
    do{
      RESTART = await this.playGame();
    }while(RESTART == 1);
  }

  compareResult(BALL_COUNT, STRIKE_COUNT){
    if(BALL_COUNT===0 && STRIKE_COUNT===0){
      return "낫싱";
    }
    if(STRIKE_COUNT===0){ 
      return (BALL_COUNT + "볼");
    }
    if(BALL_COUNT===0){ 
      return (STRIKE_COUNT + "스트라이크");
    }
    if(BALL_COUNT!==0 && STRIKE_COUNT!==0){
      return (BALL_COUNT + "볼 " + STRIKE_COUNT + "스트라이크");
    }
  }
  
  compareNumbers(RANDOM_NUMBER, USER_INPUT){
    const RANDOM_LIST = RANDOM_NUMBER.toString().split('');
    const USER_LIST = USER_INPUT.toString().split('');
  
    let BALL_COUNT=0;
    let STRIKE_COUNT=0;
  
    for (let i = 0; i < RANDOM_LIST.length; i++) {
      if (RANDOM_LIST[i] !== USER_LIST[i] && RANDOM_LIST.includes(USER_LIST[i])) {
        BALL_COUNT++;
      }
      else if(RANDOM_LIST[i] === USER_LIST[i]){
        STRIKE_COUNT++;
      }
    }
  
    Console.print(this.compareResult(BALL_COUNT, STRIKE_COUNT));
  }

  generateRandomNumber(){
    const RANDOM_NUMBER_SET = new Set();

    while (RANDOM_NUMBER_SET.size < 3) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      RANDOM_NUMBER_SET.add(RANDOM_NUMBER.toString());
    }

    return [...RANDOM_NUMBER_SET].join('');
  }
  
  async playGame(){
    let RANDOM_NUMBER = this.generateRandomNumber();
    
    let USER_INPUT;
    do{
      USER_INPUT = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.compareNumbers(RANDOM_NUMBER, USER_INPUT);
    } while(RANDOM_NUMBER !== USER_INPUT)
  
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const CHECK = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  
    return CHECK;
  }
}

//export default App;
const app = new App();
app.play();
