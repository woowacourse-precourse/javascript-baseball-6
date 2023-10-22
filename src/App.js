import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다."); // Console.print 로 출력

    const startInclusive = 1;
    const endInclusive = 9;
    const numberLength = 3;
    let computerNum = "";
    let userNum = "";

    try {
      const computerNumbers = [];

      while (computerNumbers.length < numberLength) {
        const number = Random.pickNumberInRange(startInclusive, endInclusive);
        // Random.pickNumberInRange 으로 랜덤 값 추출
        if (!computerNumbers.includes(number)) {
          // computerNumber에 있는 숫자와 중복되지 않은 숫자를 추가
          computerNumbers.push(number);
        }
      }

      if (computerNumbers.length === 3) {
        computerNum = computerNumbers.join("");
      }
      console.log("선택된 서로 다른 수:", computerNumbers);
      console.log("컴퓨터가 선택한 3자리 수:", computerNum);

      let isValidInput = false;
      while (!isValidInput) {
        const userInput = await Console.readLineAsync("3자리 숫자를 입력하세요 (1~9): ");
        userNum = userInput.trim();

        console.log("사용자가 선택한 3자리 수:", userNum);
        if (userNum.length !== numberLength || !/^[1-9]{3}$/.test(userNum)) {
          // userNum(사용자에게 입력받은 숫자)의 길이가 3이 아니거나
          // 1에서 9까지의 숫자로 이루어진 3자리 숫자 형식이 아닐 때 오류 발생
          // /^[1-9]{3}$/는 문자열이 1에서 9까지의 숫자로 이루어진 3자리 문자열인지 검사하는 정규 표현식 패턴
          // userNum이 이 패턴과 일치하지 않으면 test(userNum)는 false를 반환하게 되고,
          // !/^[1-9]{3}$/.test(userNum)는 true가 되어 if문의 조건이 참이 되어 에러가 발생
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        const userNumbers = userNum.split("");
        const userNumbersSet = new Set(userNumbers);
        console.log(userNumbers, numberLength);
        console.log(userNumbersSet, userNumbersSet.size);

        if (numberLength !== userNumbersSet.size) {
          //입력한 값이 3자리의 서로 다른 숫자인지 검사
          console.log("[ERROR] 입력한 숫자는 각 자리에 서로 다른 숫자여야 합니다.");
        } else {
          // 숫자 비교 부분 추가
          let strikes = 0;
          let balls = 0;

          for (let i = 0; i < numberLength; i++) {
            const computerDigit = computerNum[i];
            const userDigit = userNum[i];

            if (computerDigit === userDigit) {
              strikes++;
            } else if (computerNum.includes(userDigit)) {
              balls++;
            }
          }

          if (strikes === numberLength) {
            Console.print("정답을 맞췄습니다. 게임 종료!");
            isValidInput = true;
          } else if (strikes > 0 || balls > 0) {
            Console.print(`${strikes}스트라이크 , ${balls}볼`);
          } else {
            Console.print("낫싱");
          }
        }
      }
    } catch (error) {
      Console.print("에러 발생:", error.message);
    }
  }
}

export default App;

const app = new App();
app.play();
