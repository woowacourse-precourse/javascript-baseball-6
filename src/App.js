import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다."); // Console.print 로 출력

    const startInclusive = 1;
    const endInclusive = 9;
    const numberLength = 3;
    let computerNum = "";

    try {
      const computerNumbers = [];

      while (computerNumbers.length < numberLength) {
        const number = Random.pickNumberInRange(startInclusive, endInclusive);
        // Random.pickNumberInRange 로 랜덤 값 추출
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
    } catch (error) {
      // console.error("에러 발생:", error.message);
      Console.print("에러 발생:", error.message);
    }
  }
}

export default App;

const app = new App();
app.play();
