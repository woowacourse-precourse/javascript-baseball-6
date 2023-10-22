import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { GuildEmojiRoleManager } from "discord.js";

class App {
  //게임시작
  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  //랜덤으로 숫자 생성하기
  randomNumber() {
    const computerArr = [];
    while (computerArr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    //생성한 숫자 문자열로 변환
    const computer = computerArr.join('');
    return computer;
  }

  //사용자로부터 값 입력받기
  async getNumbers() {
    const numbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
    Console.print('');
    return numbers;
  }

  //값이 유효한지 확인, 유효하지 않으면 throw
  exception(numbers) {
    if (numbers.length !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (!/^\d+$/.test(numbers)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  //구 판정
  score(computer, numbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      //같은 수, 같은 자리
      if (computer[i] === numbers[i]) {
        strikes += 1;
      }
      //같은 수, 다른 자리
      if (computer.includes(numbers[i])) {
        balls += 1;
      }

    }
  }

  async play() {
    this.start();
    const userNumbers = await this.getNumbers();
    try {
      this.exception(userNumbers);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;