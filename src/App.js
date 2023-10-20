import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    async function getNumber() {
      try {
        const threeNumber = await Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );

        if (isNaN(+threeNumber)) {
          throw new Error("숫자를 입력해주세요");
        }

        let array = threeNumber.split("");
        let ballCount = { strike: 0, ball: 0 };
        let strike = 0;
        let ball = 0;

        array.map((item, index) => {
          if (computer.includes(+item) && computer[index] === +array[index])
            strike++;
          else if (
            computer.includes(+item) ||
            computer[index] === +array[index]
          )
            ball++;
        });

        if (strike === 3)
          Console.print(
            `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
          );
        else if (strike && ball) {
          Console.print(`${ball}볼 ${strike}스트라이크`);
          getNumber();
        } else if (strike) {
          Console.print(`${strike}스트라이크`);
          getNumber();
        } else if (ball) {
          Console.print(`${ball}볼`);
          getNumber();
        } else {
          Console.print("낫싱");
          getNumber();
        }
      } catch (error) {
        Console.print("숫자를 입력해주세요");
      }
    }

    getNumber();
  }
}

export default App;

const app = new App();
app.play();
