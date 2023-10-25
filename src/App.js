import { Random, Console } from "@woowacourse/mission-utils";
class App {

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

  checkUserNum = (inputNumArray) => {
    console.log("checkusernum fun")
    const valNum = this.checkNum(inputNumArray);
    const valLen = this.checkLen(inputNumArray);
    const valDuple = this.checkDuple(inputNumArray);

    console.log(`${valNum} ${valLen} ${valDuple}`)
    return (valNum && valLen && valDuple)
  }

  async play() {
    console.log("play fun")
    const inputNumArray = await this.getUserNum();
    const validateNum = this.checkUserNum(inputNumArray);

    console.log(validateNum);
  }  
}

const app = new App;

Console.print("숫자 야구 게임을 시작합니다.")
app.play();


export default App;
