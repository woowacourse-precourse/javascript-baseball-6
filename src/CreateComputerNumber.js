import { Random } from "@woowacourse/mission-utils";

/**
 * 컴퓨터의 숫자를 만드는 함수
 * @returns {Array} 랜덤으로 생성된 서로 다른 세 가지 숫자를 담은 배열
 */
function CreateComputerNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const RandomNumber = String(Random.pickNumberInRange(1, 9));
    if (!computerNumber.includes(RandomNumber)) {
      computerNumber.push(RandomNumber);
    }
  }
  return computerNumber;
}

export default CreateComputerNumber;
