import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "./Computer";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다")
    let computerNum =await com.createNumber();
    await MissionUtils.Console.print(computerNum)
    while(1){
      let inputNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");
      let setNumber = await this.setNumber(inputNumber)
      let menti = com.checkNumber(setNumber, computerNum)
      MissionUtils.Console.print(menti)
      

      if(menti === '3 스트라이크'){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
        const replay = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
        if(replay === "1"){
          computerNum =await com.createNumber();
          continue
        }else if(replay === "2"){
          return
        }
      }
    }
  }
  
  async setNumber(inputNumber){
    let Num = inputNumber?.split("").map(Number);
    if(Num.length !==3){
        throw new Error("[ERROR]");
    }else if(
        Num[0] === Num[1] ||
        Num[1] === Num[2] ||
        Num[2] === Num[0]){
        throw new Error("[ERROR]");
    }else{
        return Num  
    }
}

}

const app = new App();
const com = new Computer;
app.play();

export default App;