import userResult from "./userResultCheck.js";
import resultCheck from "./printResult.js";
import numConstant from "../constant/constant.js";

async function answering(computer) {
  let correctCheck = true;
  while (correctCheck) {
    //사용의 대답에 따른 결과카운트
    const resultCount = await userResult(computer, numConstant.NUMSIZE);

    //사용자의 결과가 3스트라이크 여부 확인
    correctCheck = await resultCheck(resultCount);
  }
  return;
}
export default answering;
