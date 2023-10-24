import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    //컴퓨터 랜덤값 지정 함수
    function getComputer() {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer;
    }
    //user 입력값 지정 함수
    async function getUserInput() {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        //resolve 되는 경우 입력값 출력
        MissionUtils.Console.print(input);
        return input;
      } catch (error) {
        // reject 되는 경우
        MissionUtils.Console.print(error);
      }
    }

    async function gameStart() {
      const computer = getComputer();
      let strike = 0;
      let ball = 0;

      //3strike 될 때까지 while문
      while (true) {
        //user input 3자리 받기
        // let x = await MissionUtils.Console.readLineAsync("입력");
        // MissionUtils.Console.print(x);
        let x = await getUserInput();
        let user = [...x].map(Number);
        //한자리씩 비교
        for (let i = 0; i < computer.length; i++) {
          for (let j = 0; j < user.length; j++) {
            //숫자 같을 때
            if (computer[i] === user[j]) {
              if (i === j) strike += 1;
              else if (i !== j) ball += 1;
            }
          }
        }
        if (strike === 3) {
          break;
        }
        //출력
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        strike = 0;
        ball = 0;
        continue;
      }

      //3strike (while문 빠져나옴)
      MissionUtils.Console.print("3스트라이크, 빠져나왔다");
      // let user = await MissionUtils.Console.readLineAsync("입력");
      let user = await getUserInput();

      //재귀
      if (user === "1") {
        MissionUtils.Console.print("다시 들어감요");
        gameStart();
      }
      //함수 종료
      else if (user === "2") {
        MissionUtils.Console.print("나감요");
        return 0;
      }
    }

    gameStart();
  }
}
export default App;
