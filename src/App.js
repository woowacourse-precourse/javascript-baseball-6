import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const randomNumber = this.getRandomNumber();
    this.getUserNumber()
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async getUserNumber() {
    try {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const numberDuplication = (new Set(number)).size !== number.length;

      if(number.length !== 3) {
        throw new Error("[ERROR] 숫자 3개를 입력해주세요.")
      }

      if(isNaN(number)) {
        throw new Error("[ERROR] 숫자만 입력해 주세요.")
      }

      if(numberDuplication) {
        throw new Error("[ERROR] 숫자를 중복되게 넣지 말아주세요.")
      }
      
    } catch (error) {
      console.log(error.message);
      return;
    }
  }
}

const app = new App();
app.play();

export default App;
