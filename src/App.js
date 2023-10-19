import { MissionUtils } from "@woowacourse/mission-utils";
const computer = [];
const COUNT = 3;
const selectRandomNumber = async () => {
  while (computer.length < 3) {
    const number = await MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
};
class App {
  async play() {
    try {
      await selectRandomNumber();
      // console.log(computer);
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      while (1) {
        const userNumber = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해 주세요 :"
        );
        // console.log(userNumber);
        const user = userNumber.split("").map(Number);
        // console.log(user);

        if (
          userNumber.length !== 3 ||
          isNaN(Number(userNumber)) ||
          userNumber === undefined ||
          userNumber === null ||
          user[0] == user[1] ||
          user[0] == user[2] ||
          user[1] == user[2]
        ) {
          throw new Error("[ERROR]");
        }
        let ballCnt = 0;
        let strikeCnt = 0;

        for (let i = 0; i < COUNT; i++) {
          for (let j = 0; j < COUNT; j++) {
            if (computer[i] === user[j]) {
              if (i === j) strikeCnt++;
              if (i !== j) ballCnt++;
            }
          }
        }
        if (ballCnt === 0 && strikeCnt === 0)
          MissionUtils.Console.print("낫싱");
        if (ballCnt > 0 && strikeCnt > 0)
          MissionUtils.Console.print(`${ballCnt}볼 ${strikeCnt}스트라이크`);
        if (ballCnt > 0 && strikeCnt === 0)
          MissionUtils.Console.print(`${ballCnt}볼`);
        if (ballCnt === 0 && strikeCnt > 0)
          MissionUtils.Console.print(`${strikeCnt}스트라이크`);
        if (strikeCnt === 3) {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          const tmp = await MissionUtils.Console.readLineAsync("");
          const startOrEnd = Number(tmp);
          MissionUtils.Console.print(startOrEnd);
          if (startOrEnd === 1) {
            for (let x = 0; x < COUNT; x++) {
              computer.pop();
            }
            await selectRandomNumber();
          }
          if (startOrEnd === 2) {
            MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
            break;
          }
          if (
            (startOrEnd !== 1 && startOrEnd !== 2) ||
            isNaN(startOrEnd) ||
            startOrEnd === null ||
            startOrEnd === undefined
          ) {
            throw new Error("[ERROR]");
          }
        }
      }
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
