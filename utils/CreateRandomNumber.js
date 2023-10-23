import { MissionUtils } from "@woowacourse/mission-utils"

const createRandomNumber = () => {
  let computerNumber = []
  while (computerNumber.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number))
      computerNumber.push(number);
  }
  
  const computerNumberString = computerNumber.join(''); // computerNumber 배열을 문자열로 변환
  MissionUtils.Console.print("컴퓨터의 숫자: " + computerNumberString);
  return computerNumber;
}

export default createRandomNumber;
