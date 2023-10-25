import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    // ** 🖥️ 컴퓨터 클래스
    class Computer {
      // * 컴퓨터 숫자 랜덤 생성 메서드
      static generateNumbers() {
        // 컴퓨터의 숫자를 담을 배열
        const computerNumbers = [];
        // 컴퓨터 숫자를 담을 배열의 길이가 3이 되기 전까지만 숫자 push 작업이 반복되고, 3이 되면 더이상 작동하지 않게끔 조건 설정
        while (computerNumbers.length < 3) {
          // misson-utils의 Random 객체에서 pickNumberInRange 메서드를 사용해서 1~9까지의 숫자를 골라서
          const randomNumber = Random.pickNumberInRange(1, 9);
          // 컴퓨터 숫자를 담은 배열에 해당 값이 존재하지 않을 때에만 해당 배열에 push
          if (computerNumbers.includes(randomNumber) === false) {
            computerNumbers.push(randomNumber);
          }

          return computerNumbers;
        }
      }

      // * 컴퓨터 숫자 vs 사용자 입력 숫자 비교해서 스트라이크, 볼 카운팅하는 메서드
      static countStrikeBall(computerNumbers, gamePlayerNumbers) {
        const counting = { strike: 0, ball: 0 }; // 카운팅 초기화
        // computerNumbers요소 vs gamePlayerNumbers요소 인덱스별 비교 하며 문자열 연산
        gamePlayerNumbers.forEach((el, i) => {
          // 컴퓨터 숫자의 i번째 요소가 사용자 입력 숫자의 i번째 요소값과 일치할 때 strike+1 --> 같은 인덱스를 서로 다른 두 배열에 적용한 요소값 비교
          if (computerNumbers[i] === el) {
            counting.strike += 1;
          } // 스트라이크가 아닌 경우 볼인지 확인 --> computerNumbers를 gamePlayerNumbers.length만큼 돌면서 computerNumbers에 el(각 회차에 해당하는 gamePlayerNumbers의 요소)가 포함되어 있는지 확인 後 true일 때마다 ball + 1
          else if (computerNumbers.includes(el)) {
            counting.ball += 1;
          }
        });
        // 결과 출력 메서드에 완성된 counting객체 전달하며 호출
        this.printResult(counting);
        // strike가 3인 경우 result 출력 후 true 리턴 --> 이를 사용자 입력 메서드가 이어 받아 게임 종료 및 시작여부 프린트에 사용할 예정.
        return counting.strike === 3; // true or false. false면 게임 종료 X && 게임 재시작 여부 프린트 X
      }

      // * 결과 출력 메서드
      static printResult({ strike, ball }) {
        // 일치하는 수 有 케이스는 문자열 연산하여 리턴
        let result = "";
        if (ball > 0) {
          result += `${ball}볼`;
        }
        if (strike > 0) {
          result += `${strike}스트라이크`;
        }
        if (strike === 0 && ball === 0) {
          Console.print("낫싱");
          return;
        }
      }
    }

    // ** 👩🏻‍💻 사용자 클래스
    class GamePlayer {
      // * 게임 실행 메서드
      static async playGame() {
        // 게임 시작을 알리는 문구 출력
        Console.print("숫자 야구 게임을 시작합니다.");
        // 게임 진행 여부(Boolean) 담는 변수 (일종의 상태관리)
        let isPlay = false; // 3 스트라이크 맞아서 재시작 여부 물었을 때 이 값을 true로 만들어서 아래 로직 이행
        // isPlay 여부가 true일 때만 게임이 진행되도록
        while (!isPlay) {
          // 컴퓨터 클래스의 generateNumbers로 랜덤으로 생성된 숫자가 들어있는 배열을 computerNumbers변수에 담는다.
          const computerNumbers = Computer.generateNumbers();
          // 사용자에게 숫자를 입력받는 메서드인 inputUserNumber에 컴퓨터 숫자를 인자로 넘기면서 호출한다.
          await this.inputUserNumber(computerNumbers);
          // 재시작 및 시작 시 isPlay변수에 true값이 들어오게끔 하는 로직
          isPlay = await this.isPlay();
        }
      }

      // * 사용자에게 숫자를 입력받는 메서드
      static async inputUserNumber(computerNumbers) {
        // 3번의 스트라이크를 맞으면 아래 값이 true가 되면서 게임 종료 (일종의 상태관리)
        let isTripleStrike = false;
        // 3번의 스트라이크가 나오기 전까지는 아래 반복문 실행
        while (!isTripleStrike) {
          // mission-utils의 Console 객체에서 readLineAsync 메서드를 이용해서 숫자 입력 문구 출력 & 사용자가 입력한 답변을 Promise를 통해 반환
          const userInput = await Console.readLineAsync(
            "숫자를 입력해주세요 : "
          );
          const gamePlayerNumbers = this.userInputToArr(userInput);
          isTripleStrike = Computer.countStrikeBall(
            computerNumbers,
            gamePlayerNumbers
          );
        }
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }

      // * 게임 시작 or 종료 여부 선택 메서드
      static async isPlay() {
        const isPlay = await Console.readLineAsync(
          `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
        );
        // 1, 2 이외의 문자 입력 시 에러 발생
        if (isPlay !== "1" && isPlay !== "2") {
          throw new Error("[ERROR] 숫자 1 또는 2만 입력할 수 있습니다.");
        }
        return isPlay === "2"; // true or false가 반환된다.
      }

      // * (반복문을 돌며 컴퓨터의 숫자와 인덱스별 요소 비교를 위해) 사용자가 입력한 숫자를 배열화 하는 메서드
      static userInputToArr(userInput) {
        if (userInput.length !== 3) {
          throw new Error("[ERROR] 숫자는 반드시 3자리값이여야 합니다.");
        }
        // userInput은 string이기때문에, 이를 ''기준으로 나눠서 먼저 배열로 만들고, 배열 內 각 요소를 넘버타입으로 바꾸기 위해 map(반복문을 돌며 새로운 값의 배열로 리턴하는 배열 메서드)이용한 메서드에 돌려준다.
        const gamePlayerNumbers = this.userInputTypeCasting(
          userInput.split("")
        );
        this.userNumbersValidation(gamePlayerNumbers);
        return gamePlayerNumbers;
      }

      // * 사용자가 입력한 숫자는 readLindeAsync는 Promise를 통해 문자열로 반환됨, 이를 숫자로 바꾸기 위한 메서드.
      static userInputTypeCasting(gamePlayerNumbers) {
        return gamePlayerNumbers.map((el) => {
          const gamePlayerNumber = Number(el);
          if (Number.isNaN(gamePlayerNumber)) {
            throw new Error("[ERROR] 숫자가 아닙니다.");
          }
          return gamePlayerNumber;
        });
      }

      // * userNumbers 유효성 검사 메서드
      static userNumbersValidation(userNumbers) {
        userNumbers.forEach((el) => {
          // 1. 중복 숫자 존재 여부 검사 : filter로 걸러낸 배열에 담기는 값은 컴퓨터값 === 사용자값인 값. 근데 이 배열의 길이가 1보다 크면 중복된 숫자가 있다는 뜻.
          if (userNumbers.filter((number) => number === el).length > 1) {
            throw new Error("[ERROR] 중복되지 않는 숫자만 입력할 수 있습니다.");
          }
          // 2. 범위를 벗어난 숫자 입력 여부 검사
          if (el < 1 || el > 9) {
            throw new Error("[ERROR] 1부터 9까지의 숫자만 입력할 수 있습니다.");
          }
        });
      }
    }

    await GamePlayer.playGame();
  }
}

export default App;
