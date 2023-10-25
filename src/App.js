import  { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // Step0: Print Game Start Phrase
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // Step1: Setting Random Numbers
    let computer = Array();

    while (computer.length < 3) {
      const NUMBER = Number(MissionUtils.Random.pickNumberInRange(1, 9));

      if (!computer.includes(NUMBER)) {
        computer.push(NUMBER);
      }
    }

    // MissionUtils.Console.print(computer)

    // Step2: Inputing Player's Numbers
    while (true) {
      let player = Array();
      let number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

      for(let i=0;i<number.length;i++) {
        if (!player.includes(number[i])) {
          player.push(parseInt(number[i]));
        }
      }

      //Exception
      try {
        if ((player.includes(NaN)) || (player.length == 0) || (player.length > 3)) {
          throw "InvalidInput";
        }
      } catch (err) {
        break;
      }
    
      // Step3: Comparing Numbers with Our Rules
      let nothing = 0;
      let ball = 0;
      let strike = 0;

      for (let i=0;i<player.length;i++) {
        const NUMBER = player[i];

        if (!computer.includes(NUMBER)) {
          nothing += 1;
          continue;
        }

        if ((computer.includes(NUMBER)) && (NUMBER != computer[i])) {
          ball += 1;
          continue;
        }

        if ((computer.includes(NUMBER)) && (NUMBER == computer[i])) {
          strike += 1;
          continue;
        }
      }

        // Step4: Print Results
        if (nothing==3) {
          MissionUtils.Console.print("낫싱");
          continue;
        }
    
        if(ball && strike) {
          MissionUtils.Console.print(ball+"볼"+" "+strike+"스트라이크");
          continue;
        }
    
        if (ball) {
          MissionUtils.Console.print(ball+"볼");
          continue;
        }
    
        if (strike) {
          MissionUtils.Console.print(strike+"스트라이크");
    
          if (strike == 3) {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    
            let number = await MissionUtils.Console.readLineAsync("");
            number = parseInt(number)
    
            if (number === 1) {
              computer = Array();

              while (computer.length < 3) {
                const NUMBER = Number(MissionUtils.Random.pickNumberInRange(1, 9));
          
                if (!computer.includes(NUMBER)) {
                  computer.push(NUMBER);
                }
              }
            }
    
            if (number === 2) {
              break;
            }
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
