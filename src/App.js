import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async generateNum() {
   
      const computerNum = [];
      let userNum = "";
      let validPattern = /^(?!.*(.).*\1)[1-9]{3}$/;
   
      while (computerNum.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computerNum.includes(number)) {
          computerNum.push(number);
        }
      }
      console.log(computerNum)
      userNum = await MissionUtils.Console.readLineAsync("숫자 야구 게임을 시작합니다. \n숫자를 입력해주세요 : ");

      if(!validPattern.test(userNum)){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }else{
        await this.playGame(computerNum, userNum); // playGame 함수를 호출할 때 this를 사용합니다.
      }
    
  }

  async playGame(computerNum, userNum) {
      let strickes = 0
      let balls = 0;
      let validPattern = /^(?!.*(.).*\1)[1-9]{3}$/;

      for(let i=0; i<computerNum.length; i++){
        for(let j=0; j<computerNum.length; j++){
          if(computerNum[i] == userNum[j]){
            if(i == j){
              strickes++;
            }else{
              balls++;
            }
          }
        }
      }

      
      if(strickes === 0 && balls === 0){
        MissionUtils.Console.print('낫싱');
      }else if(strickes === 3){
        MissionUtils.Console.print(`3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        userNum = parseInt(await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "));

        if(userNum === 1){
          this.generateNum();
        }else if(userNum === 2){
          return;
        }else{
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        
      }else if(strickes !== 0 && balls === 0){
        MissionUtils.Console.print(`${strickes}스트라이크`)
      }else if(balls !== 0 && strickes === 0){
        MissionUtils.Console.print(`${balls}볼`);
      }else{
        MissionUtils.Console.print(`${balls}볼 ${strickes}스트라이크`)
      }

      if(strickes !== 3){
        userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

        if(!validPattern.test(userNum)){
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }else{
          this.playGame(computerNum, userNum);
        }
      }
    
  }
  
  async play() {
    await this.generateNum();
  }

}


const app = new App();
app.play();

export default App;