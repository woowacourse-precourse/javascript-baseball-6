import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      let computer = [];
        
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      console.log(computer);

      const validPattern = /^\d{3}$/;
      let userInput = await MissionUtils.Console.readLineAsync("세 자릿수의 숫자를 입력해주세요: ");
      while (true) {

      
        if (!validPattern.test(userInput)) {
          userInput = await MissionUtils.Console.readLineAsync("[ERROR]올바른 숫자를 입력해주세요.: ");
        }else{
    
          let userNumber = [];

          // 사용자 입력을 숫자로 변환
          for (let i = 0; i < userInput.length; i++) {
            userNumber.push(parseInt(userInput[i]))
          }

          while (true) {
            const result = compareNumbers(computer, userNumber);

            if (result.strikes === 3) {
              console.log("3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료.");
              let replayInput = await MissionUtils.Console.readLineAsync("게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요: ");
              while(true){
                if (replayInput === "1") {
                  computer = [];
                  while (computer.length < 3) {
                    const number = MissionUtils.Random.pickNumberInRange(1, 9);
                    if (!computer.includes(number)) {
                      computer.push(number);
                    }
                  }
                  console.log(computer)
                  break; // 다시 시작
                } else if (replayInput === "2") {
                  return; // 종료
                } else {
                  replayInput = await MissionUtils.Console.readLineAsync("1과 2중의 숫자만 입력하세요: ");
                }
              }
            } else if (result.strikes >= 0 && result.strikes < 3) {
              if (result.strikes === 0 && result.balls === 0) {
                console.log('낫싱');
              } else if (result.strikes === 0) {
                console.log(`${result.balls}볼`);
              } else if (result.balls === 0) {
                console.log(`${result.strikes}스트라이크`);
              } else {
                console.log(`${result.balls}볼 ${result.strikes}스트라이크`);
              }
            }

            userInput = await MissionUtils.Console.readLineAsync("세 자릿수의 숫자를 입력해주세요: ");
            if (validPattern.test(userInput)) {
              userNumber = [];
              for (let i = 0; i < userInput.length; i++) {
                userNumber.push(parseInt(userInput[i]))
              }
            } else {
              console.error("올바른 형식의 숫자를 입력하세요.");
            }
          }
        }
      }
     
      function compareNumbers(secret, guess) {
        let strikes = 0;
        let balls = 0;

        for(let i=0; i<3; i++){
          if(secret[i] === guess[i]){
            strikes++;
          }else if(secret.includes(guess[i])){
            balls++;
          }
        }
        return {strikes, balls};
      }

      // 사용자 입력을 출력하려면 다음과 같이 출력 함수를 사용합니다.
      // MissionUtils.Console.print("User input: " + userInput);


    } catch (error) {
      console.error("Error:", error);
    }
  }
}

const app = new App();
app.play();

export default App;