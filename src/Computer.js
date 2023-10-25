import { MissionUtils } from "@woowacourse/mission-utils";

const { Random } = MissionUtils;

class Computer {
  //* [x, y, z]
  // 1~9 사이 서로 다른 임의의 3자리 수 생성
  createRandomNumber() {
    const number = [];

    while (number.length < 3) {
      const randomNum = Random.pickNumberInRange(1, 9);

      if (!number.includes(randomNum)) {
        number.push(randomNum);
      }
    }

    return number;
  }

  //* [x, y]
  // 스트라이크, 볼 판정
  countStrikeBall(randomNumber, playerInput) {
    if (!randomNumber || !playerInput) {
      return;
    }

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (randomNumber[i] === Number(playerInput[i])) {
        strike++;
      } else if (randomNumber.includes(Number(playerInput[i]))) {
        ball++;
      }
    }

    return [strike, ball];
  }
}

export default Computer;
