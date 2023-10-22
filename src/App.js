import { MissionUtils } from "@woowacourse/mission-utils";
import { Console, Random } from "@woowacourse/mission-utils";
import init from "./init";

class App {
  // constructor() {
  //   this.init();
  // }

  // generateRandomNumber() {
  //   const computer = [];
  //   while (computer.length < 3) {
  //     const number = Random.pickNumberInRange(1, 9);
  //     if (!computer.includes(number)) {
  //       computer.push(number);
  //     }
  //   }
  //   return computer;
  // }

  // init() {
  //   Console.print("숫자 야구 게임을 시작합니다.");
  //   this.strike = 0;
  //   this.ball = 0;
  //   this.randoms = this.generateRandomNumber();
  // }

  // printResult(strike, ball) {
  //   let result = "낫싱";
  //   if (strike !== 0 && ball === 0) {
  //     result = `${strike}스트라이크`;
  //   }
  //   if (strike === 0 && ball !== 0) {
  //     result = `${ball}볼`;
  //   }
  //   if (strike !== 0 && ball !== 0) {
  //     result = `${ball}볼 ${strike}스트라이크`;
  //   }
  //   return result;
  // }

  // askPlay() {
  //   try {
  //     Console.readLine(
  //       "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  //       (num) => {
  //         if (num === "1") {
  //           return init();
  //         } else if (num === "2") {
  //           return 0;
  //         } else {
  //           console.log("여긴가?");
  //           throw "[ERROR] 숫자가 잘못된 형식입니다.";
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     Console.print(error);
  //   }
  // }

  // comparePitches(userNum, computerNum) {
  //   const user = userNum.split("").map((e) => +e);

  //   for (let i = 0; i < user.length; i++) {
  //     let num = computerNum.indexOf(user[i]);
  //     if (num === i) {
  //       this.strike++;
  //     } else if (num !== -1 && num !== i) {
  //       this.ball++;
  //     }
  //   }

  //   Console.print(printResult(this.strike, this.ball));

  //   if (this.strike === 3) {
  //     Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  //     return askPlay();
  //   }
  //   inputPitches(computerNum);
  // }

  // async play() {
  //   try {
  //     const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
  //     if (inputNumber.length > 3) {
  //       throw "[ERROR] 숫자가 잘못된 형식입니다.";
  //     }
  //     await comparePitches(inputNumber, this.randoms);
  //   } catch (error) {
  //     Console.print(error);
  //   }
  // }
  async play() {
    //Console.print("숫자 야구 게임을 시작합니다.");
    init();
  }
}

export default App;
