import { Random, Console } from "@woowacourse/mission-utils";
class App {

  //컴퓨터의 3자리 난수 생성
  genComputerNum = () => {
  const GOAL = [];
    while (GOAL.length < 3) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      if (!GOAL.includes(RANDOM_NUMBER)) {
        GOAL.push(RANDOM_NUMBER);
      }
    }
    return GOAL;
  }

  //유저의 입력 받기
  async getUserNum() {
    try {
      const INPUT = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!INPUT) {
        throw new Error("[ERROR]");
      }
      const INPUT_STRING_ARRAY = INPUT.split('');
      const INPUT_NUM_ARRAY = INPUT_STRING_ARRAY.map(Number);
      return INPUT_NUM_ARRAY;
    } catch (error) {
      this.exit();
    }
  }

  //각 요소 하나하나가 1~9의 숫자가 맞는지
  checkNum = (INPUT_NUM_ARRAY) => {
    if (!INPUT_NUM_ARRAY) {
      throw new Error("[ERROR]");
    }
    try{
      for(let i=0; i < INPUT_NUM_ARRAY.length; i++){
        if(isNaN(INPUT_NUM_ARRAY[i])){
          return(false)
        }
        if(INPUT_NUM_ARRAY[i] < 1 || INPUT_NUM_ARRAY[i] > 9){
          return(false)
        }
      }
      return(true)
    }catch(error){
      this.exit();
    }
  }

  //3개의 요소인지
  checkLen = (INPUT_NUM_ARRAY) => {
    return(INPUT_NUM_ARRAY.length !== 3 ? false : true)
  }

  //중복을 제외하고도 3개의 요소인지
  checkDuple = (INPUT_NUM_ARRAY) => {
    const ARRAY_TO_SET = new Set();
    for(let item of INPUT_NUM_ARRAY){
      ARRAY_TO_SET.add(item)
    }
    return(ARRAY_TO_SET.size !== 3 ? false : true)
  }

  //유저가 입력한 숫자가 유효한지 판별
  checkUserNum = (INPUT_NUM_ARRAY) => {
    const VAL_NUM = this.checkNum(INPUT_NUM_ARRAY);
    const VAL_LEN = this.checkLen(INPUT_NUM_ARRAY);
    const VAL_DUPLE = this.checkDuple(INPUT_NUM_ARRAY);

    //console.log(`${VAL_NUM} ${VAL_LEN} ${VAL_DUPLE}`)
    return (VAL_NUM && VAL_LEN && VAL_DUPLE)
  }

  //컴퓨터가 생성한 수와 유저가 입력한 수를 비교하여 스트라이크와 볼 수를 반환
  compare = (GOAL, INPUT) => {
    let strike =0;
    let ball = 0;
    for(let i=0; i<GOAL.length ; i++){
      if(GOAL[i] === INPUT[i]){
        strike++;
      }else if(INPUT.includes(GOAL[i])){
        ball++;
      }
    }
    return({strike, ball})
  }

  //3 스트라이크로 종료
  async endGame() {
    const RESTART = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if(RESTART === '1'){
      await this.play();
    }else if(RESTART ==='2'){
      return 0;
    }else{
      Console.print("1 또는 2 중에 하나를 입력해 주세요.");
      await this.endGame();
    }
  }

  //컴퓨터가 숫자를 생성한 후, 유저 차례
  async game(GOAL) {
    const INPUT_NUM_ARRAY = await this.getUserNum();
    const VALIDATE_NUM = this.checkUserNum(INPUT_NUM_ARRAY);

    if(!VALIDATE_NUM){
      await this.game(GOAL);
    }else{
      const {strike, ball} = this.compare(GOAL, INPUT_NUM_ARRAY);

      let OUTTEXT = '';
      if(ball > 0 && strike > 0){
        OUTTEXT = `${ball}볼 ${strike}스트라이크`
      }else if(ball > 0){
        OUTTEXT = `${ball}볼`
      }else if(strike > 0){
        OUTTEXT = `${strike}스트라이크`
      }else{
        OUTTEXT = '낫싱';
      }

      Console.print(OUTTEXT);

      if(strike === 3){
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        GOAL = [];
        await this.endGame();
      }else{
        await this.game(GOAL);
      }
    }
  }

  exit(){
  }

  async play() {
    const GOAL = this.genComputerNum();
    await this.game(GOAL);
    this.exit();
  }  
}

const app = new App;

Console.print("숫자 야구 게임을 시작합니다.")
app.play();


export default App;
