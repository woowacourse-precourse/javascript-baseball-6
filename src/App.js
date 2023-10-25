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
    console.log("getusernum fun")
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const inputStringArray = input.split('');
    const inputNumArray = inputStringArray.map(Number);
    
    return inputNumArray;
  }

  //각 요소 하나하나가 1~9의 숫자가 맞는지
  checkNum = (inputNumArray) => {
    console.log("checknum fun")
    for(let i=0; i<inputNumArray.length; i++){
      if(isNaN(inputNumArray[i])){
        return(false)
      }
      if(inputNumArray[i] < 1 || inputNumArray[i] > 9){
        return(false)
      }
    }
    return(true)
  }

  //3개의 요소인지
  checkLen = (inputNumArray) => {
    console.log("checklen fun")
    return(inputNumArray.length !== 3 ? false : true)
  }

  //중복을 제외하고도 3개의 요소인지
  checkDuple = (inputNumArray) => {
    console.log("checkduple fun")
    const arrayToSet = new Set();
    for(let item of inputNumArray){
      arrayToSet.add(item)
    }
    return(arrayToSet.size !== 3 ? false : true)
  }

  //유저가 입력한 숫자가 유효한지 판별
  checkUserNum = (inputNumArray) => {
    console.log("checkusernum fun")
    const valNum = this.checkNum(inputNumArray);
    const valLen = this.checkLen(inputNumArray);
    const valDuple = this.checkDuple(inputNumArray);

    console.log(`${valNum} ${valLen} ${valDuple}`)
    return (valNum && valLen && valDuple)
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

  async play() {
    console.log("play fun")
    const GOAL = this.genComputerNum();
    const inputNumArray = await this.getUserNum();
    const validateNum = this.checkUserNum(inputNumArray);

    const STRIKE = this.compare(GOAL, inputNumArray).strike;
    const BALL = this.compare(GOAL, inputNumArray).ball;

    let OUTTEXT = '';
    if(BALL > 0 && STRIKE > 0){
      OUTTEXT = `${BALL} 볼 ${STRIKE} 스트라이크`
    }else if(BALL > 0){
      OUTTEXT = `${BALL} 볼`
    }else if(STRIKE > 0){
      OUTTEXT = `${STRIKE} 스트라이크`
    }else{
      OUTTEXT = '낫싱';
    }

    if(STRIKE === 3){
      //end
    }
    console.log(validateNum);
  }  
}

const app = new App;

Console.print("숫자 야구 게임을 시작합니다.")
app.play();


export default App;
