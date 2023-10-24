import { MissionUtils } from "@woowacourse/mission-utils";

// 사용자 숫자 입력 함수
export async function inputUserNum(){
  const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  return userNum;
}