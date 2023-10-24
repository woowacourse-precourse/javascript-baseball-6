import { Console } from "@woowacourse/mission-utils";
import numConstant from "../constant/constant";

function scoreCount(resultCount, idx) {
  resultCount[idx] = resultCount[idx] + 1;
  resultCount[numConstant.NOTINGINDEX] = 0;

  return resultCount;
}

async function userResult(computer, numSize) {
  const stringUser = await Console.readLineAsync("숫자를 입력해주세요 : ");

  //사용자 데이터 검증 (차후 추가) => 10/21 추가완료
  // ex) 숫자가 아니거나 3자리가 아니거나 0이 포함되거나
  if (stringUser.length !== numSize || isNaN(Number(stringUser)) === true) {
    throw new Error("[ERROR]");
  }

  let resultCount = [0, 0, 1];
  // index 0번이 볼갯수 1번이 스트라이크 갯수 2번이 낫싱체크

  for (let idx = 0; idx < numSize; idx++) {
    if (Number(stringUser[idx]) === computer[idx]) {
      resultCount = scoreCount(resultCount, numConstant.STRIKEINDEX);
      continue;
    }
    if (computer.includes(Number(stringUser[idx]))) {
      resultCount = scoreCount(resultCount, numConstant.BALLINDEX);
      continue;
    }
  }
  return resultCount;
}

export default userResult;
