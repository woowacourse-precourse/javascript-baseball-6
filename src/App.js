import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    
    class Computer {
      constructor ( number ) {
        this.number = number;
      }

      get number () {
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }

        return this.number;
      }

      
    }

    class User {
      constructor ( number ) {
        this.number = number;
      }

      get length () {
        return 6
      }

      get number () {
        if (
          typeof(this.number) != "number" &&
          ) {
          throw '[ERROR] 숫자가 잘못된 형식입니다.'
        }

        return (await Console.readLineAsync('숫자를 입력해주세요.'));
      }

      get isEnd () {
        return (await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'))
      }
    }
  }
}

export default App;
