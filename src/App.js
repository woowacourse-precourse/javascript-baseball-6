import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    // ! 👩🏻‍💻 사용자 클래스
    class GamePlayer {
      // * 게임 실행 메서드 ✅
      static async playGame() {
        // 게임 시작을 알리는 문구 출력
        Console.print("숫자 야구 게임을 시작합니다.");
        // 게임 진행 여부 담는 변수(Boolean, 상태관리)
        let isPlay = false;
        // isPlay가 true인 동안에는 게임을 계속 반복
        while (!isPlay) {
          const computerNumbers = Computer.generateNumbers();
          // 사용자에게 숫자를 입력받는 메서드에 컴퓨터가 생성한 숫자를 인자로 넘기면서 호출
          await this.inputGamePlayerNumber(computerNumbers);
          // 재시작 및 시작 시 isPlay변수에 true값이 들어오게끔 하는 로직
          isPlay = await this.isPlay(); // isPlay 메서드는 true or false값으로 평가된 값을 리턴함
        }
      }

      // * 사용자에게 숫자를 입력받는 메서드 ✅
      static async inputGamePlayerNumber(computerNumbers) {
        // 3스트라이크면 3스트라이크와 종료를 알린 뒤 재시작, 종료 선택 로직으로 넘어가고, 그게 아닌 경우 게임 지속.
        // 이를 위한 상태관리 변수(Booelan, true일 때만 게임 종료)
        let isTripleStrike = false;
        // isTripleStrike가 false인 경우 계속 실행되도록
        while (!isTripleStrike) {
          const gamePlayerInput = await Console.readLineAsync(
            "숫자를 입력해주세요 : "
          );
          // 사용자가 입력하는 문자열로 리턴됨
          const gamePlayerNumbers =
            Computer.gamePlayerInputToArr(gamePlayerInput);
          isTripleStrike = Computer.countStrikeBall(
            computerNumbers,
            gamePlayerNumbers
          );
        }
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }

      // * 게임 시작 or 종료 여부 선택 메서드 ✅
      static async isPlay() {
        const isPlay = await Console.readLineAsync(
          `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
        );
        if (isPlay !== "1" && isPlay !== "2") {
          throw new Error("[ERROR] 잘못된 입력값입니다.");
        }
        return isPlay === "2";
      }
    }

    // ! 🖥️ 컴퓨터 클래스
    class Computer {
      // * 컴퓨터 숫자 랜덤 생성 메서드 ✅
      static generateNumbers() {
        const computerNumbers = [];
        while (computerNumbers.length < 3) {
          const randomNumber = Random.pickNumberInRange(1, 9);
          if (!computerNumbers.includes(randomNumber)) {
            computerNumbers.push(randomNumber);
          }
        }

        return computerNumbers;
      }

      // * (반복문을 돌며 컴퓨터의 숫자와 인덱스별 요소 비교를 위해) 사용자가 입력한 숫자를 배열화 하는 메서드 ✅
      static gamePlayerInputToArr(gamePlayerInput) {
        if (gamePlayerInput.length !== 3) {
          throw new Error("[ERROR] 숫자는 반드시 3자리값이여야 합니다.");
        }
        // this.gamePlayerInputToNumber에 gamePlayerInput을 '' 기준으로 잘라내서 인자로 던진다.
        //
        const gamePlayerNumbers = this.gamePlayerInputToNumber(
          gamePlayerInput.split("")
        );
        // gamePlayerNumbers에는 3개의 숫자를 담은 배열이 들어있고, 이를 하나하나 돌면서 유효한 값인지 검사한 뒤
        this.gamePlayerNumbersValidation(gamePlayerNumbers);
        // 검사를 통과한 값을 리턴
        return gamePlayerNumbers;
      }

      // * 사용자가 입력한 숫자는 readLindeAsync를 거쳐 문자열로 반환. 이를 숫자로 바꾸기 위한 메서드 ✅
      static gamePlayerInputToNumber(gamePlayerNumbers) {
        // 기존 문자열이 담긴 gamePlayerNumbers에 배열 메서드 map(특정 연산을 거친 새로운 값을 배열의 요소로 push하여 새로운 배열 리턴)을 걸어서
        return gamePlayerNumbers.map((el) => {
          // 특정 변수 선언하여 각 요소를 Number메서드를 거쳐 넘버타입으로 변환하여 담는다.
          const gamePlayerNumber = Number(el);
          // 숫자로 변경할 수 없는 문자열을 걸러내는 과정, (ㄱ,ㄴ 등의 진짜 문자열 입력했을 때)
          if (Number.isNaN(gamePlayerNumber)) {
            throw new Error("[ERROR] 숫자가 아닙니다.");
          }
          // 숫자로 변환된 값 리턴, map은 이 값을 매핑하여 배열로 리턴.
          return gamePlayerNumber;
        });
      }

      // * gamePlayerNumbers 유효성 검사 메서드 ✅
      static gamePlayerNumbersValidation(gamePlayerNumbers) {
        // 중복 숫자 존재 여부 검사: filter로 걸러낸 배열에 담기는 값은 컴퓨터가 낸 숫자 === 사용자가 낸 숫자 인 값. 이 배열의 길이가 1 이상이라는 것은 같은 수가 2개 이상이라는 뜻. ∴ 중복요소 존재 O
        gamePlayerNumbers.forEach((el) => {
          if (
            gamePlayerNumbers.filter(
              (gamePlayerNumber) => gamePlayerNumber === el
            ).length > 1
          ) {
            throw new Error("[ERROR] 중복되지 않는 숫자만 입력할 수 있습니다.");
          }
          // 입력 범위(1~9)를 벗어난 숫자 입력 여부 검사
          if (el < 1 || el > 9) {
            throw new Error("[ERROR] 1부터 9까지의 숫자만 입력할 수 있습니다.");
          }
        });
      }

      // * 컴퓨터 숫자 vs 사용자 입력 숫자 비교해서 스트라이크, 볼 카운팅하는 메서드 ✅
      static countStrikeBall(computerNumbers, gamePlayerNumbers) {
        const counting = { strike: 0, ball: 0 };
        // computerNumbers의 요소와 gamePlayerNumbers의 요소를 공통된 인덱스로 조회하면서 비교, 값이 같은 경우 strike의 counting+1
        gamePlayerNumbers.forEach((el, i) => {
          if (computerNumbers[i] === el) {
            counting.strike += 1;
          } // 그게 아닌 경우 매 회의 el요소를 computerNumbers가 포함하고 있는지 확인. true/false로 리턴되고 true인 경우 본문이 실행되어 ball의 counting+1
          else if (computerNumbers.includes(el)) {
            counting.ball += 1;
          }
        });
        // printResult 메서드에 counting 객체 인자로 전달하며 호출
        this.printResult(counting);
        return counting.strike === 3; // 이게 평가되서 true로 리턴되는 경우 inputUserNumber메서드의 isTripleStrike에 true가 할당되면서 while문을 지나 맨 아래의 Console.print("3개의 숫자를 모두 맞히셨습니다! 게임종료") 문이 실행됨.
      }

      // * 결과 출력 메서드 ✅
      static printResult({ strike, ball }) {
        // 결과로 출력할 문자열을 담을 변수 선은
        let result = "";
        // ball의 값이 0 초과면 초기 설정값 "" + `${ball}볼 ` 문자열 연산 진행되게 설정
        if (ball > 0) {
          result += `${ball}볼 `;
        }
        // strike의 값이 0 초과면 `${ball}볼 `+ `${strike}스트라이크` 문자열 연산 진행되게 설정
        if (strike > 0) {
          result += `${strike}스트라이크`;
        }

        // 둘 다 0이면 '낫싱'을 바로 프린트하고 리턴
        if (strike === 0 && ball === 0) {
          Console.print("낫싱");
          return;
        }

        // 그게 아닌 경우 문자열 연산이 완료된 결과 result를 리턴
        Console.print(result);
      }
    }

    await GamePlayer.playGame();
  }
}

export default App;
