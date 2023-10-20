import { MissionUtils } from "@woowacourse/mission-utils";

// console.log(MissionUtils.Random.pickNumberInRange(1, 9));

MissionUtils.Console.readLine("닉네임을 입력해주세요.", (answer) => {
  console.log(`닉네임: ${answer}`);
});
