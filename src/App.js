import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // while로 반복해야 할지도>

    //# 컴퓨터 값 생성.
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9); // 함수 이름이 number를 pick하는 것이므로, number형으로 준다고 생각하는게 맞겠지.
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    //# 인풋 받기   ->3개의 숫자를 모두 맞히면 게임이 종료된다. -> 그 때까지 반복...
    let correct = false;
    while (!correct) {
      const rawBaseballNum = await MissionUtils.Console.readLineAsync();

      //# input은.. 서로 다른 3자리의 수

      //# valid확인

      //##   문자열 길이
      if (rawBaseballNum.length != 3) {
        throw new Error("[ERROR]");
      }

      //## 각 자리 값이 1~9외의 다른 것들이 들어갔는지.  (문자, 0 등)
      for (let i = 0; i < 3; i++) {
        const parsed = parseInt(rawBaseballNum[0]);
        if (parsed === 0 || isNaN(parsed)) {
          throw new Error("[ERROR]");
        }
      }

      //# valid 인풋 값.
      const parsedBaseballNum = parseInt(rawBaseballNum);
    }
  }
}

export default App;
