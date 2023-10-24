import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const ERROR_MESSAGE = "[ERROR]";

    function makeAnswer() {
      const COMPUTER = [];
      //중복되지 않는 1 ~ 9 사이의 자연수 세 개 생성
      while (COMPUTER.length < 3) {
        const NUMBER = Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(NUMBER)) {
          COMPUTER.push(NUMBER);
        }
      }
      return COMPUTER;
    }

    async function getInput() {
      const USER_INPUT = [
        ...(await Console.readLineAsync("숫자를 입력해주세요 : ")),
      ].map((element) => parseInt(element));

      try {
        chkUserInput(USER_INPUT);
        return USER_INPUT;
      } catch (error) {
        Console.print(error);
      }
    }

    function chkUserInput(userInput) {
      //파라미터로 들어오는 배열의 값을 체크할것.
      //true / false 반환할것

      //1. 서로 다른 세 자리의 자연수로 이루어져 있을 것.
      //2. 1 ~ 9 사이의 수로 이루어져 있을 것.
      if (
        new Set(userInput).size === userInput.length &&
        userInput.length === 3
      ) {
        userInput.forEach((element) => {
          if (element === 0 || isNaN(element)) {
            throw new Error(ERROR_MESSAGE);
          }
        });
      } else {
        throw new Error(ERROR_MESSAGE);
      }

      return true;
    }

    async function newGameChk() {
      const NEW_GAME_INPUT = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );

      if (NEW_GAME_INPUT === "1") {
        return true;
      } else if (NEW_GAME_INPUT === "2") {
        return false;
      } else {
        throw new Error(ERROR_MESSAGE);
      }
    }

    async function chkValue(computer) {
      //chkUserInput의 값이 true라면 두 배열을 비교하여 결과를 출력할것.
      let strike = 0;
      let ball = 0;
      let answer = "";
      const USER_INPUT = await getInput();
      const COUNT_LIMIT = 3;

      if (USER_INPUT) {
        computer.forEach((number, index) => {
          if (USER_INPUT.indexOf(number) === index) {
            strike++;
          } else if (USER_INPUT.includes(number)) {
            ball++;
          }
        });

        if (strike > 0 || ball > 0) {
          //strike와 ball 둘 중 하나라도 존재할 때의 처리.
          if (strike === COUNT_LIMIT) {
            answer = `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
            Console.print(answer);
            return false;
          } else if (strike === 0) {
            //볼만 존재할 때의 처리
            answer = `${ball}볼`;
          } else if (ball === 0) {
            //스트라이크만 존재할 때의 처리
            answer = `${strike}스트라이크`;
          } else {
            //볼과 스트라이크 모두 존재할 때의 처리
            answer = `${ball}볼 ${strike}스트라이크`;
          }
        } else {
          answer = "낫싱";
        }

        Console.print(answer);
        return true;
      } else {
        throw new Error(ERROR_MESSAGE);
      }
    }

    async function gameStart() {
      
      let playAgain = true;
      // Console.print(COMPUTER);
      while (playAgain) {
        const COMPUTER = makeAnswer();
        while (true) {
          if (!(await chkValue(COMPUTER))) {
            break;
          }
        }

        try {
          playAgain = await newGameChk();
        } catch(error) {
          Console.print(error);
        }
      }
    }

    Console.print("숫자 야구 게임을 시작합니다.");
    await gameStart();
  }
}

const APP = new App();
APP.play();

export default App;
