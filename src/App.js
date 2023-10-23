import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    function makeAnswer() {
      const computer = [];
      while (computer.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer;
    }

    async function getInput() {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const user = [...input].map((item) => parseInt(item));

      try {
        chkUserInput(user);
        return user;
      } catch (e) {
        Console.print(e);
      }
    }

    function chkUserInput(userInput) {
      //파라미터로 들어오는 배열의 값을 체크할것.
      //true / false 반환할것

      //1. 서로 다른 세 자리의 자연수로 이루어져 있을 것.
      //2. 1 ~ 9 사이의 수로 이루어져 있을 것.
      if(new Set(userInput).size === userInput.length && userInput.length === 3) {
        userInput.forEach((element) => {
          if(element < 1 || element > 9 || isNaN(element)) {
            throw new Error("[ERROR]");
          }
        })
      } else {
        throw new Error("[ERROR]");
      }
      
      return true;
    }

    async function newGameChk() {
      const chkNewGame = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );

      if (chkNewGame === "1") {
        return true;
      } else {
        return false;
      }
    }

    async function chkValue(computer) {
      //chkUserInput의 값이 true라면 두 배열을 비교하여 결과를 출력할것.
      let strike = 0;
      let ball = 0;
      let answer = "";
      let userInput = await getInput();

      if (userInput) {
        computer.forEach((number, index) => {
          if (userInput.indexOf(number) === index) {
            strike++;
          } else if (userInput.includes(number)) {
            ball++;
          }
        });

        if (strike > 0 || ball > 0) {
          if (strike === 3) {
            answer = `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
            Console.print(answer);
            return false;
          } else if (strike === 0) {
            answer = `${ball}볼`;
            Console.print(answer);
          } else {
            answer = `${ball}볼 ${strike}스트라이크`;
            Console.print(answer);
          }
        } else {
          answer = "낫싱";
          Console.print(answer);
        }

        return true;
      } else {
        throw new Error("[ERROR]");
      }
    }

    async function gameStart() {
      const computer = makeAnswer();
      Console.print(computer);

      while (true) {
        if (!(await chkValue(computer))) {
          break;
        }
      }

      if(await newGameChk()) {
        return await gameStart();
      } else {
        return 0;
      }
    }

    Console.print("숫자 야구 게임을 시작합니다.");
    await gameStart();
  }
}

const app = new App();
app.play();

export default App;
