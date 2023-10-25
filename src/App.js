import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    //input 예외처리 함수
    async function checkInput(isPlaying, userInput) {
      const arrInput = [...userInput].map(Number);
      //게임 중
      if (isPlaying) {
        let isDup = new Set(arrInput).size !== arrInput.length;
        if (arrInput.length !== 3 || arrInput.includes(0) || isDup) {
          throw new Error("[ERROR]");
        }
      }
      //게임 끝
      else if (!isPlaying) {
        if (arrInput[0] !== 1 && arrInput[0] !== 2) {
          //1이나 2가 아닐 때
          throw new Error("[ERROR]");
        }
      }
    }
    //input 입력값 지정 함수
    async function getUserInput(isPlaying) {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      //check input
      await checkInput(isPlaying, input);
      return input;
    }
    //컴퓨터 랜덤값 지정 함수
    function getComputer() {
      const computer = [];
      while (computer.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer;
    }
    //output 처리 함수
    function checkOutput(strike, ball) {
      const strikeOutput = `${strike}스트라이크`;
      const ballOutput = `${ball}볼`;
      let output = "낫싱";

      if (strike > 0 || ball > 0) {
        //3스트라이크
        if (strike === 3)
          output = strikeOutput.concat(
            "\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
        //볼or스트라이크만
        else if (ball === 0) output = strikeOutput;
        else if (strike === 0) output = ballOutput;
        //볼, 스트라이크 둘 다
        else output = ballOutput.concat(" ", strikeOutput);
      }
      Console.print(output);
    }

    //게임 시작 함수
    async function gameStart() {
      Console.print("숫자 야구 게임을 시작합니다.");
      const computer = getComputer();
      // console.log(computer);
      let strike = 0;
      let ball = 0;
      let playing = true;
      //3strike 될 때까지 while문
      while (true) {
        //user input 3자리 받기
        let x = await getUserInput(playing);
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
        //출력
        checkOutput(strike, ball);
        if (strike === 3) {
          break;
        }
        strike = 0;
        ball = 0;
        continue;
      }
      //3strike (while문 빠져나옴)
      playing = !playing;
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      let user = await getUserInput(playing);

      //재귀
      if (Number(user) === 1) {
        gameStart();
      }
      //함수 종료
      else if (Number(user) === 2) {
        return 0;
      }
    }

    //게임 시작
    await gameStart();
  }
}

//실행 코드
const app = new App();
app.play();

export default App;
