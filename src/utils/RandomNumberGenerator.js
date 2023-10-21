import { Random, Console } from "@woowacourse/mission-utils";

export const RandomNumberGenerator = {
  generateRandomNumber() {
    const randomNumber = [];
    Console.print("숫자 야구 게임을 시작합니다.");
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    Console.print(randomNumber.join(""));
    return randomNumber.join("");
  },
};
