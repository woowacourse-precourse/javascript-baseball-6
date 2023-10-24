import { Random } from "@woowacourse/mission-utils";
class Computer {
  // 정답을 만드는 함수
  createAnswer = () => {
    let arr = []; // 정답을 담을 배열
    // 1 ~ 9 사이의 중복되지 않는 숫자 3개를 arr 배열에 push
    while (arr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!arr.includes(number)) {
        arr.push(number);
      }
    }
    return arr;
  };
}

export default Computer;
