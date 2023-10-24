import { MissionUtils } from "@woowacourse/mission-utils";

//랜덤 번호 생성 함수
async function makeNumber() {
  let computer=[];

  while (computer.length < 3) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computer.includes(NUMBER)) {
        computer.push(NUMBER);
    }
  }
  return computer;
}

export default makeNumber;
