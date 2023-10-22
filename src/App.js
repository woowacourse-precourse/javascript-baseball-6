import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {

  start() {
    Console.print("숫자 야구 게임을 시작합니다.")
  }

  generateRandomNumber() {
    const computerNumber = [];
    while (randomNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(number)
      }
    }

    const computerNumberToString = computerNumber.join();
    return computerNumberToString;
  }

  getUserInput () {
    
  }

  async play() {}
}

export default App;
