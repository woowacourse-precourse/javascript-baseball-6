import { Random, Console } from "@woowacourse/mission-utils";


class App {

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer; //3개의 배열로 이루어진 랜덤값 생성
  }
  async getUserInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");    // 사용자 입력

    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");   //숫자가 아닌 값 검사
    }
    if (input.length !== 3) {
      throw new Error("[ERROR] 숫자의 길이가 올바르지 않습니다.");  // 3자리가 아닌 숫자 검사
    }
    if (input.includes(0)) {
      throw new Error("[ERROR] 1~9 사이의 숫자를 입력해주세요.");  // 0이 포함된 숫자 검사
    }
    const uniqueNumber = [...new Set(input.split(""))];
    if (uniqueNumber.length !== 3) { 
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");    //중복된 숫자 검사
    }

    return input.split("").map(Number); // 입력값을 배열로 변환
  }
  calculateResult(computerNumber, userInput) {
    let S = 0;
    let B = 0;                    //  명시적으로 S,B,N 0으로 선언 및 초기화
    let N = 0;

    for (let i = 0; i < 3; i++) {           
      if (computerNumber[i] === userInput[i]) {  // 배열의 위치와 숫자가 동일하면 S
        S++;
      } else if (computerNumber.includes(userInput[i])) {    //위치 상관없이 포함되어 있으면 B
        B++;
      } else {     // 아무것도 아니면 N
        N++;
      }
    }

    let result = "";

    if (B > 0) {
      result += `${B}볼 `;
    }
    if (S > 0) {
      result += `${S}스트라이크 `;
    }
    if (B === 0 && S === 0) {
      result = `낫싱`;
    }

    return result; // 볼, 스트라이크, 낫싱 결과 출력
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다");
    const computerNumber = this.getRandomNumber();
    let S = 0;

    while (S !== 3) {
      const userInput = await this.getUserInput();
      const result = this.calculateResult(computerNumber, userInput);
      Console.print(result);
      const regexResult = /(\d+)스트라이크/.exec(result); // 문자열 3스트라이크 대신 result에서 S 값을 추출해온뒤 변수로 저장해서 3이면
      S = regexResult ? parseInt(regexResult[1]) : 0;
    }
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const restartOption = await Console.readLineAsync(
      "게임을 재시작하려면 1, 종료하려면 2를 입력하세요: "
    );
    if (restartOption === "1") {
      this.play(); // 재시작
    } else if (restartOption === "2") {
      Console.print("게임을 종료합니다.");
      return;
    } else {
      throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
    }
  }
}

const app = new App();
app.play();

export default App;