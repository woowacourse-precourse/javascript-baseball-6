import { MissionUtils } from "@woowacourse/mission-utils";
// const MISSIONUTILS = require("@woowacourse/mission-utils");


class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
      while(1) {
        const isAgain = await this.onePlay();
        if(isAgain==2) break;
        if(!(isAgain==1 || isAgain==2)) throw new Error("[ERROR] 숫자 1과 2 중 하나만 입력해주세요")
      }
    } catch(error) {
      console.error(error.message)
      throw error;
    }
  }

  async onePlay() {
    try {
      let computer = this.makeAnswer();
      console.log("computer", computer)

      let isAnswer = false;
      while(!isAnswer) {
        const readInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        console.log("readInput", readInput)
        if(readInput.length===3) {
          const [strikeNum, ballNum] = this.checkInput(readInput, computer);
          const resultString = this.makeResultString(strikeNum, ballNum);
          MissionUtils.Console.print(resultString);
          if(strikeNum===3) break;
        } else throw new Error("[ERROR] 숫자의 개수는 3개여야 합니다.")
      }
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      const isAgain = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      return isAgain
    } catch(error) {
      console.error(error.message);
      throw error;
    }
  }

  makeResultString(s, b) {
    let string;
    if(s===0) {
      if(b===0) string = "낫싱";
      else string = `${b}볼`;
    } else { //스트 존재
      if(b===0) string = `${s}스트라이크`;
      else string = `${b}볼 ${s}스트라이크`
    }
    return string
  }

  checkInput(input, answer) {
    let inputArr = input.split("").map(Number);
    answer = answer.map(Number);
    let strike = 0;
    let ball = 0;
    //잘못 들어온 경우 예외처리!
    for(let i=0; i<3; i++) {
      if(inputArr[i]===answer[i]) { //자리수가 같으면 스트
        strike++;
      } else if(answer.includes(inputArr[i])){ //같진 않지만 포함 시 볼 
        ball++;
      }
    }

    return [strike, ball]
  }

  makeAnswer() {
    const computer = []; //야구 게임 한번 할때마다 
    while(computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1,9);
      if(!computer.includes(num)){
        computer.push(num);
      }
    }
    return computer
  }
}

// const app = new App();
// app.play();
// const result = app.checkInput("132", "123")
// console.log(result)
export default App;
