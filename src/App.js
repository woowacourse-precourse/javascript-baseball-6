import { Random, Console } from "@woowacourse/mission-utils";

class App {
  // 답 생성
  static setRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    Console.print(randomNumber); // 확인
  }

  static async getUserNumber() {
    const userInputNumber = await Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    Console.print(userInputNumber);
    // 1~9까지 중복되지 않은 세자리 수 정규식
    // const regex = /^(?!.*(.).*\1)[1-9]{3}$/;
    // if (!regex.test(userInputNumber)) {
    //   throw new Error('[Error] 중복되지 않은 1부터 9 사이의 세자리 수를 입력해주세요')
    // }

    // 예외사항 처리
    // 1. 세자리 숫자가 입력되지 않을 경우
    // 2. 숫자가 아닌 문자가 입력 될 경우
    // 3. 중복된 숫자가 입력 될 경우
    // 4. 1~9가 아닌 숫자가 입력 될 경우

    if (userInputNumber.length !== 3) {
      throw new Error("[Error] 세자리 수를 입력해주세요");
    }

    if (isNaN(userInputNumber)) {
      throw new Error("[Error] 숫자를 입력해주세요");
    }

    if (
      userInputNumber[0] === userInputNumber[1] ||
      userInputNumber[0] === userInputNumber[2] ||
      userInputNumber[1] === userInputNumber[2]
    ) {
      throw new Error("[Error] 중복되지 않은 숫자를 입력해주세요");
    }

    if (userInputNumber.includes(0)) {
      throw new Error("[Error] 1~9 사이의 숫자를 입력해주세요");
    }

    const userAnswer = userInputNumber.split("").map((number) => +number);
    Console.print(userAnswer);
  }

  static play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.setRandomNumber();
    this.getUserNumber();
  }
}

App.play();

export default App;
