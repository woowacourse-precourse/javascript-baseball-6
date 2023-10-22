import { MissionUtils, Console } from "@woowacourse/mission-utils";

class Game {
  constructor(App) {
    this.app = App;
  }

  async randomNum() {
    const Computer = [];

    for (let i = 0; i < 3; i++) {
      let Numbers = await MissionUtils.Random.pickNumberInRange(1, 9);
      Computer.push(Numbers);
    }

    return Computer;
  }

  async numberValidChk() {
    const regex = /^[1-9]+$/;
    let userNum;

    try {
      userNum = await Console.readLineAsync(`숫자를 입력해주세요 : `);

      console.log(`번호 ${userNum}`);

      const isNumber = regex.test(userNum);
      const isError = !isNumber || userNum === undefined;

      if (userNum === "1") {
        return;
      }

      if (isError || userNum.length !== 3) {
        throw new Error();
      }
    } catch (e) {
      this.app.isPlaying = false;
      throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    const userArr = userNum.split("");
    const User = userArr.map(Number);

    return User;
  }

  isNumber_Same(data) {
    let strike = 0;
    let ball = 0;
    let Com = data["com"];

    console.log(data);

    Com.forEach((el, idx) => {
      if (el === data["me"][idx]) strike++;
      else if (data["me"].includes(el)) ball++;
    });

    if (strike + ball === 0) {
      Console.print("낫싱");
      return { state: "FAIL", com: data["com"] };
    }
    if (strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
      return { state: "FAIL", com: data["com"] };
    }

    if (strike !== 0 && strike !== 3 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      return { state: "FAIL", com: data["com"] };
    }

    if (strike !== 0 && strike !== 3 && ball === 0) {
      Console.print(`${strike}스트라이크`);
      return { state: "FAIL", com: data["com"] };
    }

    if (strike === 3) {
      Console.print("3스트라이크");
      return "WIN";
    }
  }

  async newGameSwitch() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    try {
      const userNum = await Console.readLineAsync(`숫자를 입력해주세요 : `);

      console.log(`게임종료 or 재시작 ${userNum}`);

      if (userNum === "2") {
        Console.print("게임 종료");
        this.app.isPlaying = false;
        return;
      }
      if (userNum === "1") {
        this.app.isPlaying = "reStart";
        return;
      } else {
        throw new Error();
      }
    } catch (error) {
      throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default Game;
