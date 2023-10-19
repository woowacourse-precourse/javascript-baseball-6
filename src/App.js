import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = [];
    const user = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
        console.log(computer);
      }
    }
    //  숫자입력받는함수
    async function getUserInput() {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      user.push(userInput.split("").map(Number));
      console.log(user);
      console.log(computer);
      findCommonNumbers(user, computer);
    }

    // 공통된 숫자 찾아내는 함수
    function findCommonNumbers(user, computer) {
      const commonNumbers = computer.filter((number) =>
        user[0].includes(number)
      );
      console.log("공통된 숫자:", commonNumbers);
      console.log("공통된 숫자 개수:", commonNumbers.length);
    }
    //  이제 3개 다찾을떄까지 게임 반복.
    getUserInput();
  }
}

const app = new App();
app.play();
export default App;
