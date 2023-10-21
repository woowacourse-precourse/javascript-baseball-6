import { Console, Random } from "@woowacourse/mission-utils";

export default class Computer extends Player {
  ballNumbers;
  constructor() {
    super();
    this.ballNumbers = this.generateBallNumbers;
  }
  generateBallNumbers = () => {
    // 1~9까지의 숫자로 배열 생성
    const numbers = Array.from({ length: 9 }, (_, idx) => idx + 1);

    // 배열 무작위로 섞기
    const shuffleNumbers = Random.shuffle(numbers);

    // 섞인 배열에서 앞 3개의 숫자 선택하고 문자열로 변환
    return shuffleNumbers.slice(0, 3).join("");
  };
}
