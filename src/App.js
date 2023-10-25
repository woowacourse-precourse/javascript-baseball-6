import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    function isThreeDigitNumber(input) { //3자리 숫자가 맞는지 확인하는 함수
      return /^\d{3}$/.test(input);
    }

    function validateNumber(num) { // 1 아니면 2가 맞는지 판별하는 함수
      if (num === '1' || num === '2') {
        return true;
      }
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    function changeArray(str) { // 배열 변환 함수
      const numArray = new Array(str.length);

      for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const num = parseInt(char, 10);

        if (!isNaN(num)) {
          numArray[i] = num;
        }
      }
      return numArray;
    }

    async function numberGame() { // 숫자 게임 함수
      let computer = [];
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      let randomArr = computer;
      do {
        let userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
        let userArr = changeArray(userNumber);

        if (!isThreeDigitNumber(userNumber)) {
          Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
          break;
        }

        let strike = 0;
        let ball = 0;
        for (var i = 0; i < 3; i++) {
          let idx = randomArr.indexOf(userArr[i]);
          if (idx == -1) {
            continue;
          } else {
            if (idx == i) {
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }

        if (strike == 3) {
          Console.print("3스트라이크");
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        } else {
          const message = (ball ? `${ball}볼 ` : '') + (strike ? `${strike}스트라이크` : '낫싱');
          Console.print(message);
        }
      } while (true);

      let replay = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      validateNumber(replay);
      if (replay === "1") {
        await numberGame();
      }
    }

    Console.print("숫자 야구 게임을 시작합니다.");
    await numberGame();
  }
}

export default App;