import { MissionUtils } from "@woowacourse/mission-utils";


const {Random, Console} = MissionUtils;
class App {

  constructor(){
    this.computerNumber = []
  }

  makeRandomComputerNumber(){
    while(this.computerNumber.length <3){
      const number = Random.pickNumberInRange(1, 9)
      if(!this.computerNumber.includes(number)) this.computerNumber.push(number)
    }
  }
}

const app = new App()
app.play()
export default App;
