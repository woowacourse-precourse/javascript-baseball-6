import {MissionUtils} from "@woowacourse/mission-utils";
import Game from "./Game.js";

class App {
  // 정답을 반환하는 함수(컴퓨터의 숫자)
  getAnswer = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    // 정수형 반환
    return parseInt(computer.join(''))
  }
  async play() {
    while (true) {
      try {
        await Game(this.getAnswer());
      }
      catch (error) {
        throw new Error(error);
      }
      // 게임 종료시 새로 시작할지 안할지 판별하는 코드
      const NEWGAME = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n');
      if(NEWGAME === '2'){
        break
      }
    }

  }
}

export default App;
