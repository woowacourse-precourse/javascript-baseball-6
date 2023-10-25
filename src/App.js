import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async play() {
    while(true){
      const computer = [];
      while(computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1,9);
        if(!computer.includes(number)){
          computer.push(number);
        }
      }

      console.log("숫자 야구 게임을 시작합니다.");
      while(true) {
        const inputArr=[];
        try {
          const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
          
          for (const char of userInput) {
            const num = parseInt(char);
            if (!isNaN(num)) {
              inputArr.push(num);
            }
          }
        }catch(error){
          console.error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        
        if(inputArr.length !== 3 || inputArr.some(n => n<1 || n>9)) {
          console.log("[ERROR] 숫자가 잘못된 형식입니다.");
          return;
        }

        const user = inputArr;
        let strike = 0;
        let ball = 0;

        for(let i =0;i<3;i++){
          for(let j =0; j<3; j++){
            if(user[i]===computer[j]){
              if(i===j){
                strike++;
              }
              else{
                ball++;
              }
            }
          }
        }

        if(strike===3){
          console.log("3스트라이크");
          console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const end = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

          if(end === "1"){
            break;
          }else if(end === "2"){
            return;
          }else{
            console.error("[ERROR] 숫자가 잘못된 형식입니다.");
            return;
          }
        }
        else if(ball===0 && strike === 0){
          console.log("낫싱");
        }else if(ball===0){
          console.log(strike + "스트라이크");
        }else if(strike ===0){
          console.log(ball+"볼");
        }else{
          console.log(ball+"볼 "+strike+"스트라이크");
        }
        
      }
    }
  }
}

export default App;
