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

  async play() {}
}

export default App;
