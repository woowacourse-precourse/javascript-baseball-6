import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구를 시작합니다.");

    let isGameFinished = false; // 게임이 시작되기 때문에 false 초기화 선언
    let computerNumbers = []; // 컴퓨터가 선택한 임의의 숫자 3개를 넣을 배열 선언

    // 컴퓨터의 숫자 3개를 무작위로 생성
    const computer = [];
    while (computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }

    // 게임 루프
    while (!isGameFinished) {
      try {
        // 사용자로부터 3자리 숫자 입력 받기
        const userInput = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );

        // 유효성 검사를 통해 입력 값이 3자리 숫자인지 확인
        if (!this.isValidInput(userInput)) {
          // 유효하지 않은 입력이면 에러를 던져서 게임 종료
          throw new Error("[ERROR] 유효하지 않은 입력입니다.");
        }

        // 컴퓨터 숫자와 사용자 입력 비교하여 결과 출력
        const result = this.compareNumbers(computerNumbers, userInput);
        MissionUtils.Console.print(result);

        // 모두 맞춘 경우 게임 종료
        if (result === "3스트라이크") {
          console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          isGameFinished = true;
        }
      } catch (error) {
        // 예외가 발생하면 에러를 출력하고 게임을 종료
        console.error(error);
        isGameFinished = true;
      }
    }
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  }

  // 입력 값이 3자리 숫자인지 확인
  isValidInput(input) {
    if (!/^[1-9]{3}$/.test(input)) {
      throw new Error("[ERROR] 유효하지 않은 입력입니다.");
    }
    return true;
  }

  // 컴퓨터 숫자와 사용자 입력 비교하여 결과 반환
  compareNumbers(computerNumbers, userInput) {
    // 비교 로직 구현
    // 스트라이크, 볼, 낫싱에 따라 결과 문자열 생성
    const userGuess = userInput.split(""); // 사용자 입력 userInput을 배열로 변환
    const results = { strike: 0, ball: 0 }; // strike, ball를 가진 객체 results

    for (let i = 0; i < computerNumbers.length; i++) {
      const computerDigit = computerNumbers[i];
      const userDigit = parseInt(userGuess[i]); // i번째 자릿수를 비교

      if (computerDigit === userDigit) {
        results.strike++; // 숫자와 자릿수가 동일하면 스트라이크
      } else if (userGuess.includes(computerDigit.toString())) {
        results.ball++;
      }
    }

    if (results.strike === 0 && results.ball === 0) {
      return "낫싱";
    }

    let resultString = "";
    if (results.strike > 0) {
      resultString += results.strike + "스트라이크 ";
    }
    if (results.ball > 0) {
      resultString += results.ball + "볼";
    }

    return resultString.trim();
  }
}

export default App;
