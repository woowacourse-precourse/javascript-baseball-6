import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let game = true;
    while (game) {
      let computer = "";
      let user = "";
      while (computer.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer += number;
        }
      }

      while (game) {
        try {
          user = await Console.readLineAsync("숫자를 입력해 주세요 : ");
          /* 예외처리 코드*/
          if (!/^\d{3}$/.test(user)) {
            throw new Error("[ERROR]");
          }
          let ball = 0;
          let strike = 0;
          let prom = "";
          for (let i = 0; i < 3; i++) {
            if (computer[i] === user[i]) {
              strike++;
            } else if (computer.includes(user[i])) {
              ball++;
            }
          }
          if (ball === 0 && strike === 0) {
            prom = prom += "낫싱";
          }
          if (ball > 0) {
            prom += `${ball}볼 `;
          }
          if (strike > 0) {
            prom += `${strike}스트라이크`;
          }

          Console.print(prom);
          if (computer === user) {
            Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

            const regame = await Console.readLineAsync(
              "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
            );

            if (regame === "1") {
              computer = "";
              while (computer.length < 3) {
                const number = Random.pickNumberInRange(1, 9);
                if (!computer.includes(number)) {
                  computer += number;
                }
              }
            } else if (regame === "2") {
              game = false;
            } else {
              throw new Error("[ERROR]");
            }
          }
        } catch (error) {
          game = false;
          throw error;
        }
      }
    }
  }
}
const app = new App();
app.play();
export default App;
