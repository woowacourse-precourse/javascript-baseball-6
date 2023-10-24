import { Random, Console } from "@woowacourse/mission-utils";
import readline from "readline";

class App {

  computerNumberPick() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    let startNumSetting = 1; // 값이 1이면 루프 진행, 2이면 멈춤
    let computer = this.computerNumberPick();
    let countStrike, countBall, countBallAndStrike; // 스트라이크, 볼, 스트라이크 + 볼 횟수

    Console.print("숫자 야구 게임을 시작합니다.");

    while (startNumSetting == 1) {

      let userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");

      try { // 숫자 3개 확인
        if (userNumber.length != 3 || isNaN(userNumber)) {
          throw new Error("[숫자 3개를 입력하세요.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        return;
      }

      try { //띄어쓰기 감지
        if (userNumber.includes(" ")) {
          throw new Error("띄어쓰기를 없애주세요.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        return;
      }

      try { // 띄어쓰기 감지
        if (userNumber.includes("0")) {
          throw new Error("0은 안됩니다.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        return;
      }

      try { // 겹치는 숫자 확인
        if (new Set(userNumber).size !== userNumber.length) {
          throw new Error("겹치지 않게 숫자를 입력하세요.");
        }
      } catch (error) {
        Console.print("[ERROR]" + error.message);
        return;
      }

      const user = userNumber.split('').map(Number); // 문자로 받은 userNumber를 user에 숫자로 배열로 넣기

      countStrike = 0;
      countBallAndStrike = 0;

      // 볼+스트라이크, 스트라이크 갯수 카운트
      for (let count = 0; count < 3; count++) {
        if (user[count] == computer[count]) {
          countStrike++;
        }
        if (user.includes(computer[count])) {
          countBallAndStrike++;
        }
      }

      countBall = countBallAndStrike - countStrike;


      // 출력할 문장 변수
      let printSentence = "";

      if (countBallAndStrike == 0) {
        printSentence = "낫싱";
      }

      if (countBall != 0) {
        printSentence = printSentence + countBall + "볼";
        if (countStrike != 0) {
          printSentence += " ";
        }
      }

      if (countStrike != 0) {
        printSentence = printSentence + countStrike + "스트라이크";
      }

      Console.print(printSentence);
      if (countStrike == 3) {
        Console.print(countStrike + "개의 숫자를 모두 맞히셨습니다! 게임종료");
        startNumSetting = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        computer = this.computerNumberPick();
      }
    }
  }
}

export default App;