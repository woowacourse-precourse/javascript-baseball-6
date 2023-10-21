import { Console } from "@woowacourse/mission-utils";

async function userResultCheck(computer, numSize) {
  const stringUser = await Console.readLineAsync("숫자를 입력해주세요 : ");

  if (stringUser.length > numSize) {
    throw new Error("[ERROR]");
  }
  //사용자 데이터 검증 (차후 추가)

  const resultCount = [0, 0, 1];
  // index 0번이 볼갯수 1번이 스트라이크 갯수 2번이 낫싱체크
  // ex) 숫자가 아니거나 3자리가 아니거나 0이 포함되거나

  for (var idx = 0; idx < 3; idx++) {
    if (Number(stringUser[idx]) === computer[idx]) {
      resultCount[1] = resultCount[1] + 1;
      resultCount[2] = 0;
    } else if (computer.includes(Number(stringUser[idx]))) {
      resultCount[0] = resultCount[0] + 1;
      resultCount[2] = 0;
    } else {
      //console.log(Number(stringUser[idx]));
      continue;
    }
  }
  return resultCount;
}

export default userResultCheck;
