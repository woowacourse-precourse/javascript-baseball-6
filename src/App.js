import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {

    function newGame() {
      // 게임 시작 문구 출력
      Console.print('숫자 야구 게임을 시작합니다.');

      // 컴퓨터 임의의 수 3개 선택
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      // Console.print(computer) //test용


      //사용자 입력 
      async function getGuess() {
        try {
          // 사용자 입력
          const guess = await Console.readLineAsync('숫자를 입력해주세요 : ');

          // 사용자 입력 수와 컴퓨터 임의의 수 비교
          let strike = 0;
          let ball = 0;

          for (let i = 0; i < 3; i++) {
            if (parseInt(guess[i]) === computer[i]) {
              strike++;
            }
            for (let j = 0; j < 3; j++) {
              if ((i !== j) && (parseInt(guess[i]) === computer[j])) {
                ball++;
              }
            }
          }

          // 결과 출력
          if (strike === 3) {
            Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');

            const answer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
            if (answer === '1') {
              newGame();
            } else if (answer === '2') {
              process.exit();
            }

          } else if (strike !== 0 || ball !== 0) {
            Console.print(`${ball}볼 ${strike}스트라이크`);
            getGuess();

          } else {
            Console.print('낫싱');
            getGuess();

          }

        } catch (error) {
          // reject 되는 경우
          Console.print('에러발생');
        }
      }

      getGuess();
    }

    newGame();


  }
}

export default App;

const app = new App();
app.play();